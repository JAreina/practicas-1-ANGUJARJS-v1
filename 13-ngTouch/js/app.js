
var app = angular.module('bonusApp',['ngTouch']);

app.controller('mainCtrl', ['$scope', function($scope){

$scope.mostrar = () =>{
	alert("HAS TOCADO")
}

}]);
