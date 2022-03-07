let feedback = angular.module('feedbackModule', []);

feedback.service('feedbackService', ['$http', function ($http) {
    this.getFeedbackDetails = function() {
        return $http.get("http://localhost:3000/feedback");
    };
}])

feedback.controller('feedbackController', ['$scope', '$http', function ($scope, $http) {
    $scope.feedbackFormSubmit = function () {
        console.log($scope.userFeedback.name)
        let feedbackData = {
            userName: $scope.userFeedback.name,
            userEmail: $scope.userFeedback.email,
            userFeedback: $scope.userFeedback.message
        }
        console.log(feedbackData)

        $http.post("http://localhost:3000/feedback", JSON.stringify(feedbackData))
            .then(function (response) {
                console.log(response.data)
        })
        alert("Feedback posted successfully!");

        $scope.userFeedback.name = "",
        $scope.userFeedback.name = "",
        $scope.userFeedback.name = ""
    }
}]);

feedback.controller('viewFeedbackController', ['feedbackService','$scope', '$http', function (feedbackService,$scope, $http) {
    feedbackService.getFeedbackDetails().then(function (response) {
        console.log(response.data)
        $scope.feedbackData = response.data;
    });
}])