// creating a service for movies list
myMoviesApp.service('movieService', [
    '$http', 
    function ($http) {

    //method to call the movie details api using $http get service
    this.getMoviesDetails = function () {
        return $http.get('http://localhost:3000/movies');
    };

    //method to remove the movie data by using http delete service
    this.removeMovie = function(movies){
        return $http.delete('http://localhost:3000/movies/' + movies)
    }

    //method to add moviedetails to the database using http post service
    this.addMovieDetails = function(movieData) {
        console.log(movieData)
        return $http.post("http://localhost:3000/movies", JSON.stringify(movieData))
    };
}])
