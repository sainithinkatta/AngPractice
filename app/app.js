//this variable is holding the module its reference to it. [] is used to pass the dependencies.
//var name should be equal to module name
const myapp = angular.module('myapp', ['ngRoute']);

// //this function runs loads before your application runs

myapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        //path name
        .when('/home', {
            //path location declaration

            templateUrl: 'views/home.html'
        })
        .when('/directory', {
            //path location declaration
            templateUrl: 'views/directory.html',
            //declare which controller we want to use for this directory
            controller: 'directorycontroller'
        })
        .otherwise({
            redirectTo: '/home'
        })
}])

// //this function loads while your application runs
// myapp.run(function(){

// })
myapp.controller('myappview', ['$scope', function ($scope) {
    console.log("Hello myappview")
}])

myapp.controller('directorycontroller', ['$scope', '$http', function ($scope, $http) {
    $scope.message = "Hey All";
    // res.header("Access-Control-Allow-Origin","*");
    // res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    // next(); 

    //remove movie function
    $scope.removemovie = function (Movies) {
        var removedmovie = $scope.movieinfo.indexOf(Movies);
        console.log(removedmovie)
        //splice(a,b) it removes a and go to 1 element next
        $scope.movieinfo.splice(removedmovie, 1);
    }
    $scope.count = false;
    $scope.addamovie = function (){
      $scope.count=true;
    }
    $scope.addMovie = function () {
        $scope.movieinfo.push({
            movieName: $scope.newmovie.name,
            rating: parseInt($scope.newmovie.rating),
            genre: $scope.newmovie.genre,
            available: true
        });

        $scope.newmovie.name = "",
            $scope.newmovie.rating = "",
            $scope.newmovie.genre = ""
    };
    
    console.log("Hello")
    $http.get('data/movieinfo.json').then(function(response) {
        console.log(response.data)
        $scope.movieinfo = response.data;
    });
}])
 