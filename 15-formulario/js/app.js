
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){

$scope.formData={};

$scope.guardar = ( valido)=>{

  if (!valido){
		return;
	}
	console.log("guardado")
}

}]);
