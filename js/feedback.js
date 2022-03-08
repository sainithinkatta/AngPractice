//create a module for feedback
let feedback = angular.module('feedbackModule', []);

//create a service for the feedback module
feedback.service('feedbackService', ['$http', function ($http) {
    //method to call the feedback details api 
    this.getFeedbackDetails = function() {
        return $http.get("http://localhost:3000/feedback");
    };
}])

//create a controller for feedback
feedback.controller('feedbackController', ['$scope', '$http', function ($scope, $http) {

    //method to execute after submittimg the feedback form
    $scope.feedbackFormSubmit = function () {
        console.log($scope.userFeedback.name)
        //create an object to store all the form data
        let feedbackData = {
            userName: $scope.userFeedback.name,
            userEmail: $scope.userFeedback.email,
            userFeedback: $scope.userFeedback.message
        }
        console.log(feedbackData)

        //posting the object data (feedbak data) to the api (database)
        $http.post("http://localhost:3000/feedback", JSON.stringify(feedbackData))
            .then(function (response) {
                console.log(response.data)
        })
        alert("Feedback posted successfully!");

        //emptying the form after successfully posting the data
        $scope.userFeedback.name = "",
        $scope.userFeedback.name = "",
        $scope.userFeedback.name = ""
    }
}]);

//create a controller to view the feedback details using the services and inject service function
feedback.controller('viewFeedbackController', ['feedbackService','$scope', '$http', function (feedbackService,$scope, $http) {
    //calling the service method to get the api details and storing it in an object
    feedbackService.getFeedbackDetails().then(function (response) {
        console.log(response.data)
        $scope.feedbackData = response.data;
    });
}])