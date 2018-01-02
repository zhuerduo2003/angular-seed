'use strict';

angular.module('movieDB.genre', [
    'ui.bootstrap'
    ]).controller('genreCtrl', ['$scope', '$http', '$routeParams', '$filter', function($scope, $http, $routeParams, $filter){

        $scope.currentPage = 1;
        $scope.pageSize = 12;
        $scope.genreName = $routeParams.genreName;
        
        // $scope.currentPage = 4;
        $http.get('json/movies.json').success(function(data) {
            $scope.movieList=$filter('filter')(data, function(movie) {
                return $filter('filter')(movie.genres, {name: $scope.genreName}).length;
            });
            $scope.totalItems = $scope.movieList.length;
        });

        $http.get('json/genres.json').success(function(data) {
            $scope.genresList=data;
            $scope.totalItems = $scope.genresList.length;
        });
    }])