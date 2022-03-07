let movie = angular.module('movieListModule', []);

movie.service('movieService', ['$http', function ($http) {
    this.getMovieDetails = function() {
        return $http.get("http://localhost:3000/movies");
    };

    this.recommendedMovies = function() {
        return $http.get("http://localhost:3000/recommendedMovies");
    };
}])


movie.controller('movieController', ['movieService', '$scope', '$rootScope', '$http', function (movieService, $scope, $rootScope, $http) {
    movieService.getMovieDetails().then(function (response) {
        // $scope.recommendMovies = true;
        console.log(response.data)
        $scope.movieInfo = response.data;
    });

    movieService.recommendedMovies().then(function (response) {
        // $scope.recommendMovies = false;
        console.log(response.data)
        $scope.recommendedMovies = response.data;
    });

    $scope.removeMovie = function (Movies) {
        var removedMovie = $scope.movieInfo.indexOf(Movies);
        console.log(removedMovie)
        //splice(a,b) it removes a and go to 1 element next
        $scope.movieInfo.splice(removedMovie, 1);
        alert("Movie removed successfully!");
    }
}]);

