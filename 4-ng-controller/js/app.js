//array para dependencias de la app, otras librerias
var app = angular.module('jareina', []);
/// el nombre "jareina"   debe estar en index.html en la tag ng-app="jareina"


//controllador maneja parte de la pagina en index.html ng-controller="personaCtrl"
app.controller('personaCtrl', function($scope) {

  //propiedades del controlador
  $scope.persona = personaData;
  $scope.editando = {};
  $scope.mostrarCaja = false;

  $scope.editarPersona = function() {
    //angular.copy copia la persona en la variable editando
    angular.copy($scope.persona, $scope.editando);
    $scope.mostrarCaja = true;
  }

  $scope.guardarCambios = function() {
    angular.copy($scope.editando, $scope.persona);
    $scope.mostrarCaja = false;
  }
  $scope.cancelarCambios = function() {
    $scope.editando = {};
    $scope.mostrarCaja = false;
  }

});


var personaData = {
  nombre: "JAreina",
  bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis iusto at quisquam, magni enim illum cumque quia sunt maiores iure. Officia quisquam natus consequuntur, numquam nobis voluptatem dolorum minima culpa.",
  edad: 97,
  foto: "img/jareina.png"
}
