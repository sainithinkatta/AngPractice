// creating a module named movieListModule 
let movie = angular.module('movieListModule', []);

// creating a service for movieListModule
movie.service('movieService', ['$http', function ($http) {
    //function to call the movie details api using $http service
    this.getMovieDetails = function () {
        return $http.get('http://localhost:3000/movies');
    };
}])

//creating a controller to render the data in the movieslist template
//injecting service method and necessary services
movie.controller('movieController', ['movieService', '$scope', '$rootScope', '$http', function (movieService, $scope, $rootScope, $http) {
    //call the api function from the movieService and save the responce
    movieService.getMovieDetails().then(function (response) {
        console.log(response.data)
        $scope.movieInfo = response.data;
    });

    //remove the movies data by using the $http,delete service.
    $scope.removeMovie = function (Movies) {
        console.log(Movies.id)
        $http.delete('http://localhost:3000/movies/' + Movies.id)
        .then(function successCallback(response) {
            //sending an aleart message after successfully deleting the movie.
            alert("Movie has been removed Successfully");
            //method to instantly remove the movie that we deleted from the template
            var removedMovie = $scope.movieInfo.indexOf(Movies);
            console.log(removedMovie)
            //splice(a,b) it removes a and go to 1 element next
            $scope.movieInfo.splice(removedMovie, 1);
        }, function errorCallback(response) {
            //display error message if movie is  ot deleted from the api. 
            alert("Error. while deleting user Try Again!");

        });
    }
}]);

