app.controller('autoresCtrl', ['$scope','$http', function($scope, $http) {
  $scope.message = "desde autores";
  $scope.setActivo("mAutores")

  $scope.titulos = {"hola":"funciona"}
 $scope.error={"hola":"no funciona"}
  $http.get('php/servicios/libros.listado.php')
  .success(function(data) {
    $scope.titulos = data;
    console.log($scope.titulos );
  })


}]);
