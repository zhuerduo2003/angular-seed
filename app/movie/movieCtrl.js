'use strict'

angular.module('movieDB.movie', ['ui.bootstrap']).
    controller('movieCtrl', ['$scope', '$filter', '$http', '$routeParams', function($scope, $filter, $http, $routeParams ){
        $scope.movieId = $routeParams.id;
        $http.get('json/movies.json').success(function(data) {
            $scope.movie= $filter('filter')(data, {id: parseInt($scope.movieId)}, true)[0];
        })
    }])