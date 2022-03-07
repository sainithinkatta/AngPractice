//this variable is holding the module its reference to it. [] is used to pass the dependencies.
//var name should be equal to module name
const myapp = angular.module('myapp', ['ngRoute','feedbackModule','movieListModule']);
// //this function runs loads before your application runs

myapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        //path name
        .when('/feedback', {
            //path location declaration
            templateUrl: 'views/feedback.html',
            controller: 'feedbackController'
        })
        .when('/movies', {
            //path location declaration
            templateUrl: 'views/movieslist.html',
            //declare which controller we want to use for this directory
            controller: 'movieController'
        })
        .otherwise({
            redirectTo: '/home'
        })
}])

//writing the function for our directives and we use directive name as a camelcase here 
//and pass the dependencies and call the function
myapp.directive('movieList',[function(){
    //it returns the object containing the elements
    return {
        //it restrict the directive to certain elements and attributes as E A
        restrict: 'E',
        //scope is declared to render the data
        scope: {
            movieinfo: "=",
            title: "=",
            
        },
        //template used to directly write the tag here
        //templateUrl to refer to view from some other html page.
        templateUrl: 'views/random.html',
        transclude: true,
        //have a controller to write the function to access the objects data
        controller: function($scope){
            $scope.random = Math.floor(Math.random() * 4);
        }
    };
}])

// })
// myapp.controller('feedbackController', ['$scope', function ($scope) {
//     console.log("Hello myappview")
// }])



 