var app = angular.module('minmax', []);

app.controller('MinMaxController', function($scope, $http){
  $scope.formModel = {};

  $scope.onSubmit = function(){
    $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
      then(function(data){
        console.log(':)');
      },
      function(data){
        console.log(':(');
      });
  };
});
