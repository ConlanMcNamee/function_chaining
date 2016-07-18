var app = angular.module('chaining', []);

app.controller('chainController', ['$scope', function($scope) {
  $scope.test = 'this will show up on the index page';
}])
