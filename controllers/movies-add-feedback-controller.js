myMoviesApp.controller('feedbackController', [
    'feedbackService',
    '$scope',
    '$location',
    function (feedbackService, $scope , $location) {

        //method to execute after submittimg the feedback form
        $scope.feedbackFormSubmit = function () {

            //create an object to store all the form data
            let feedbackData = {
                userName: $scope.userFeedback.name,
                userEmail: $scope.userFeedback.email,
                userFeedback: $scope.userFeedback.message
            }

            //calling the service method to add feedback details to database by passing the feedback object
            feedbackService.addFeedbackDetails(feedbackData);

            //emptying the form after successfully posting the data
            $scope.userFeedback.name = "",
            $scope.userFeedback.email = "",
            $scope.userFeedback.message = ""

            //show the alert notification on the template after user successfully giving the feedback
            alert("Feedback posted successfully!");

            //navigate to movies page after submitting the form
            $location.path('/movies');
        }

    }]);