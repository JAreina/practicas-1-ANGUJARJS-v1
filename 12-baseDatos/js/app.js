"use strict";

var app = angular.module('jareina', ['ngRoute']);
//poner clase acctiva en menu

app.controller('mainCtrl', ['$scope','$http', function($scope, $http) {

  $scope.menu = './partials/menu.html';
  $scope.message = "Hello, world desde home";

  $scope.setActivo = function(Opc) {
    $scope.mInicio = "";
    $scope.mAutores = "";
    $scope.mLibros = "";
    $scope[Opc] = "active";
  }

}]);

app.controller('inicioCtrl', function($scope) {
  $scope.message = "desde inicio";
   $scope.setActivo("mInicio")
});




app.controller('librosCtrl', function($scope) {
  $scope.message = "desde libros";
  $scope.setActivo("mLibros")
});
