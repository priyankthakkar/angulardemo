var app = angular.module('minmax', [
  'jcs-autoValidate'
]);

app.run(function(defaultErrorMessageResolver){
  defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages){
    errorMessages['tooYoung'] = 'You must be atleast {0} years old to use this site.';
    errorMessages['tooOld'] = 'You must max {0} years to use this site.';
    errorMessages['badUsername'] ="Username can container only characters and numbers and _";
  });
});

app.controller('MinMaxController', function($scope, $http){
  $scope.formModel = {};

  $scope.onSubmit = function(){
    console.log('I am submitted');

    $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
      then(function(data){
        console.log(':)');
      },
      function(data){
        console.log(':(');
      });
  };
});
