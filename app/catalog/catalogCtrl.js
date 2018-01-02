'use strict';

angular.module('movieDB.catalog', [
    'ui.bootstrap'
    ]).controller('catalogCtrl', ['$scope', '$http', function($scope, $http){

        $scope.currentPage = 1;
        $scope.pageSize = 12;
        
        // $scope.currentPage = 4;
        $http.get('json/movies.json').success(function(data) {
            $scope.movieList=data;
            $scope.totalItems = $scope.movieList.length;
        });

        $http.get('json/genres.json').success(function(data) {
            $scope.genresList=data;
            $scope.totalItems = $scope.genresList.length;
        });
    }])