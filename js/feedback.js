angular
    .module('feedbackModule', [])
    .controller('feedbackController', feedbackController);

function feedbackController($scope,$http) { 
    // $scope.userFeedback.name = null;
    // console.log($scope.userFeedback.name)
    // $scope.userFeedback.email = null;
    // $scope.userFeedback.message = null; 
    $scope.feedbackFormSubmit = function(){
        $scope.username = null;
        $scope.userfeedback = null;
        $scope.useremail = null;
        let feedbackData = {
            username: $scope.userFeedback.name,
            useremail: $scope.userFeedback.email,
            userfeedback: $scope.userFeedback.message
        }
        console.log(feedbackData)
        
        $http.post("http://localhost:3000/employees", JSON.stringify(feedbackData))
            .then(function(response){
            console.log(response.data)
        })
        // $http.get('data/movieinfo.json').then(function(response) {
        //     console.log(response.data)
        // });
    }

}