let addMovies = angular.module('addMovieModule', []);

addMovies.controller('addMovieController', ['$scope', '$http', function ($scope, $http) {

    $scope.addMovie = function () {
        let movieData = {
            movieName: $scope.newMovie.name,
            movieRating: parseInt($scope.newMovie.rating),
            movieImage: $scope.newMovie.image,
            trailerUrl: $scope.newMovie.trailer
        }
        console.log(movieData)
        
        $http.post("http://localhost:3000/movies", JSON.stringify(movieData))
            .then(function (response) {
                console.log(response.data)
        })
        alert("Movie added successfully!");

        $scope.newMovie.name = "",
        $scope.newMovie.rating = "",
        $scope.newMovie.image = "",
        $scope.newMovie.trailer = ""
    }   
}]);
