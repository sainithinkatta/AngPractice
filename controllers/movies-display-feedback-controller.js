//create a controller to view the feedback details using the services and inject service function
myMoviesApp.controller('viewFeedbackController', [
    'feedbackService',
    '$scope', 
    function (feedbackService,$scope) {

    //method to call the service methods...
    const getFeedBack = function(){
        //calling the service method to get the api details and storing it in an object
        feedbackService.getFeedbackDetails().then(function (response) {
            $scope.feedbackData = response.data;
        });
    }

    getFeedBack();
    
}])