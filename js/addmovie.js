//create a module for adding the movies
let addMovies = angular.module('addMovieModule', []);

//create a controller to implement the methods 
addMovies.controller('addMovieController', ['$scope', '$http', function ($scope, $http) {
    //function to execute afetr submitting form details 
    $scope.addMovie = function () {
        //create an object to store the form details
        let movieData = {
            movieName: $scope.newMovie.name,
            movieRating: parseInt($scope.newMovie.rating),
            movieImage: $scope.newMovie.image,
            trailerUrl: $scope.newMovie.trailer
        }
        console.log(movieData)

        //posting the object details to the required api using $http.post service
        $http.post("http://localhost:3000/movies", JSON.stringify(movieData))
            .then(function (response) {
                console.log(response.data)
        })
        alert("Movie added successfully!");

        //emptying the form fields after successfully submitting the movie details
        $scope.newMovie.name = "",
        $scope.newMovie.rating = "",
        $scope.newMovie.image = "",
        $scope.newMovie.trailer = ""
    }   
}]);
