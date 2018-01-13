(function(){
"use strict";
var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK

$scope.geo={};

// jsonp para obtener recursos externos
  $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK')
           .success((data)=>{
             $scope.geo = data;
           } )


}]);





})();
