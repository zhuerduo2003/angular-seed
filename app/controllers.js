'use strict';

angular.module("myApp.controllers", [])
	.controller("myController", ["$scope", "$filter", function($scope, $filter) {
	    $scope.newTask="";
	    $scope.taskList=[{description: "task1", done: false},
        {description: "task2", done: false}];
        $scope.pendingCount=1;
	    $scope.addNewTask= function () {
            $scope.taskList.push({description: $scope.newTask, done: false});
            $scope.newTask="";
        };

        $scope.removeTask= function ($index) {
            $scope.taskList.splice($index, 1);
        };

        $scope.$watch('taskList', function () {
            $scope.pendingCount= $filter('filter')($scope.taskList, {done: false}).length;
        }, true);

        $scope.clearCompleted = function () {
            $scope.taskList = $filter('filter')($scope.taskList, {done: false});
        }
	}]);