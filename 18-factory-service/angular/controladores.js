var app = angular.module('promesaApp.controladores', []);


//inyeccion del servicio Personas
app.controller('personasCtrl', ['$scope','Personas', function($scope,Personas){


$scope.personas=Personas;




}]);
