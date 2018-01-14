"use strict";

var app = angular.module('jareina',['ngRoute']);

   app.controller('mainCtrl',  function($scope){

  $scope.menu = './partials/menu.html';
$scope.message="Hello, world desde home";
})
   .controller('autoresCtrl',function($scope){
     $scope.message="desde autores";
   })
   .controller('librosCtrl',function($scope){
     $scope.message="desde libros";
   });
