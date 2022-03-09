//creating a controller to render the data in the movieslist template
//injecting service method and necessary services
myMoviesApp.controller('movieController', [
    'movieService',
    '$scope',
    '$filter',
    function (movieService, $scope, $filter) {

        //call the api function from the movieService and save the response in movielist object
        //method to call the service methods...
        const getMoviesDetails = function () {
            movieService.getMoviesDetails().then(function (response) {
                $scope.moviesList = response.data;
                let orderByFilter = $filter("orderBy");
                
                // console.log( $scope.moviesList{movieName})
                // $scope.moviesList = orderByFilter(getMoviesDetails(), movieName)
            });
        }

        $scope.orderByMovieName = function(){
             let orderByFilter = $filter("orderBy");
             $scope.moviesList = orderByFilter(getMoviesDetails(), movieName)
        }

        //remove method to remove the movie from view and database...
        $scope.removeMovie = function (movie) {
            //calling service method to remove the movie using htttp delete service ...
            movieService.removeMovie(movie.id).then(function successCallback() {
                //condition to instantly remove the movie that we deleted from the template
                //splice(a,b) it removes a and go to 1 element next
                $scope.moviesList.splice($scope.moviesList.indexOf(movie), 1);
                //sending an aleart message after successfully deleting the movie.
                alert("Movie has been removed Successfully");
            }, function errorCallback() {
                //display error message if movie is  ot deleted from the api. 
                alert("Error. while deleting user Try Again!");

            });
        }

        getMoviesDetails();
        
    }]);