let movie = angular.module('movieListModule', []);

movie.service('movieService', ['$http', function ($http) {
    this.getMovieDetails = function () {
        return $http.get('http://localhost:3000/movies');
    };


}])


movie.controller('movieController', ['movieService', '$scope', '$rootScope', '$http', function (movieService, $scope, $rootScope, $http) {
    movieService.getMovieDetails().then(function (response) {
        // $scope.recommendMovies = true;
        console.log(response.data)
        $scope.movieInfo = response.data;
    });


    $scope.removeMovie = function (Movies) {
        console.log(Movies.id)
        
        $http.delete('http://localhost:3000/movies/' + Movies.id)
        .then(function successCallback(response) {

            alert("Movie has been removed Successfully");
            var removedMovie = $scope.movieInfo.indexOf(Movies);
            console.log(removedMovie)
            //splice(a,b) it removes a and go to 1 element next
            $scope.movieInfo.splice(removedMovie, 1);

        }, function errorCallback(response) {

            alert("Error. while deleting user Try Again!");

        });
    }
}]);

