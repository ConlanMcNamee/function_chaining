var app = angular.module('chaining', []);

app.controller('chainController', ['$scope', '$http', function($scope, $http) {
  /*
  when users fill out our forms on the html page, these will be
  populated with two way data binding
  */
  $scope.firstName;
  $scope.lastName;
  $scope.bDay;
  $scope.bMonth;
  $scope.bYear;
  $scope.occupation;

  var url = document.URL;
  $scope.sendRequest = function() {
    $http({
      url: url + 'chain',
      method: "GET",
      params: {
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        bDay: $scope.bDay,
        bMonth: $scope.bMonth,
        bYear: $scope.bYear,
        occupation: $scope.occupation
      }
    })
    .then(function(response) {
      $scope.display = response.data.display;
    })
  }
}])
