//create a controller to implement the methods 
myMoviesApp.controller('addMovieController',[
    'movieService',
    '$scope',
    '$location',
    function (movieService,$scope,$location) {
    
    //method to execute after submitting form details 
    $scope.addMovie = function () {

        //create an object to store the form details from the template
        let movieData = {
            movieName: $scope.newMovie.name,
            movieRating: parseInt($scope.newMovie.rating),
            movieImage: $scope.newMovie.image,
            trailerUrl: $scope.newMovie.trailer
        }

        //call service method that post details to database and pass the moviedata object
        movieService.addMovieDetails(movieData);

        //emptying the form fields after successfully submitting the movie details
        $scope.newMovie.name = "",
        $scope.newMovie.rating = "",
        $scope.newMovie.image = "",
        $scope.newMovie.trailer = ""

        //send an alert method on the view template after removing the movie
        alert("Movie added successfully!");

        //navigate to the movies page after adding the movie...
        $location.path('/movies');
    }   

}]);