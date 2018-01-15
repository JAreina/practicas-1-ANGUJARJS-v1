app.controller('alumnoCtrl', ['$scope', '$routeParams',
  '$http',
  function($scope,
    $routeParams,
    $http) {
    "use strict";
    $scope.message = "JAreina";
    $scope.setActive("mAlumnos");

    // recoger parametro
    $scope.codigo = $routeParams.codigo;

    /*añadir más parametros
     en config.js
     .when('/alumno/:codigo/:nombre',{
       templateUrl: 'parciales/alumno.html',
       controller: 'alumnoCtrl'
     })

    $scope.nombre = $routeParams.nombre;
    */

    $scope.alumno = {};

    //RECUPERAR UN alumno
    $http.get('php/servicios/alumnos.getAlumno.php?c=' + $scope.codigo)
      .success((data) => {
        if (data.err !== undefined) {
          window.location = "#/alumnos"
        }
        $scope.alumno = data;
      })

  }
]);
