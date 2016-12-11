var app = angular.module('minmax', []);

app.controller('MinMaxController', function($scope){
  $scope.formModel = {};

  $scope.onSubmit = function(){
    console.log($scope.formModel);
  };
});
