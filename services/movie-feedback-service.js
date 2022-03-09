//create a service for the feedback module
myMoviesApp.service('feedbackService', ['$http', function ($http) {

    //method to get the feedback details api using http get service
    this.getFeedbackDetails = function() {
        return $http.get("http://localhost:3000/feedback");
    };
    
    //method to send feedback data to the database using http post service
    this.addFeedbackDetails = function(feedbackData) {
        return $http.post("http://localhost:3000/feedback", JSON.stringify(feedbackData))
    };
}])