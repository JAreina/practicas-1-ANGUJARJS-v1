(function(){
"use strict";
var app = angular.module('ejemplosApp',[ ]);


// inyección de '$http'
app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

$scope.personas=[];

$http.get('./json/personas.json').success((data)=>{
  $scope.personas = data.personas;
})






}]);

// filtro personalizado para mostrar json de forma legible
app.filter('prettyJSON', function () {
    function prettyPrintJson(json) {
      return JSON ? JSON.stringify(json, null, '  ') : 'your browser doesnt support JSON so cant pretty print';
    }
    return prettyPrintJson;
});




})();
