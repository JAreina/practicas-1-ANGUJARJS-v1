var app = angular.module('paginacionApp.controladores',[]);

app.controller('observadorCtrl', ['$scope', function ($scope) {



$scope.jareina="jareina"
$scope.valorAntiguo="";
$scope.valorActual="";

$scope.$watch('jareina',(valorAntiguo,valorActual)=>{
	$scope.valorAntiguo=valorAntiguo;
	$scope.valorActual= valorActual;

	 console.log(valorAntiguo,valorActual)
})

}]);
