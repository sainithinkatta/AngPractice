let movie = angular.module('movieListModule', []);

movie.service('movieService', ['$http', function($http){
    this.getMovieDetails = function getMovieDetails() {
        return $http.get('data/movieinfo.json');
    };
    this.test = function(){
       let a = 10;
       return a;
    }
}])


movie.controller('movieController', ['movieService', '$scope', '$rootScope', '$http', function (movieService, $scope ,$rootScope, $http) {


    movieService.getMovieDetails().then(function (response) {
        console.log(response.data)
        $scope.movieinfo = response.data;
    });

    $scope.a = movieService.test();
    console.log($scope.a);


    // $http.get('data/movieinfo.json').then(function (response) {
    //     console.log(response.data)
    //     $scope.movieinfo = response.data;
    // });
    // $rootScope.value = 10;
    // $scope.removemovie = function (Movies) {
    //     var removedmovie = $scope.movieinfo.indexOf(Movies);
    //     console.log(removedmovie)
    //     //splice(a,b) it removes a and go to 1 element next
    //     $scope.movieinfo.splice(removedmovie, 1);
    // }
    // $scope.count = false;
    // $scope.addamovie = function () {
    //     $scope.count = true;
    // }
    // $scope.addMovie = function () {
    //     $scope.movieinfo.push({
    //         movieName: $scope.newmovie.name,
    //         rating: parseInt($scope.newmovie.rating),
    //         genre: $scope.newmovie.genre,
    //         available: true
    //     });

    //     $scope.newmovie.name = "", x
    //     $scope.newmovie.rating = "",
    //         $scope.newmovie.genre = ""
    // };

}]);

