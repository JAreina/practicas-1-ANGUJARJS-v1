"use strict";

var app = angular.module('jareina',['ngRoute']);

   app.controller('mainCtrl',  function($scope){

  $scope.menu = './partials/menu.html';
$scope.message="Hello, world desde home";

//poner clase acctiva en menu
$scope.setActivo = function(Opc){
  $scope.mInicio= "";
$scope.mAutores= "";
$scope.mLibros= "";
$scope[Opc]= "active";
}

})
.controller('inicioCtrl',function($scope){
  $scope.message="desde inicio";
  $scope.setActivo("mInicio")
})
   .controller('autoresCtrl',function($scope){
     $scope.message="desde autores";
     $scope.setActivo("mAutores")
   })
   .controller('librosCtrl',function($scope){
     $scope.message="desde libros";
      $scope.setActivo("mLibros")
   });
