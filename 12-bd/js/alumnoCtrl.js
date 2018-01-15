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

$scope.alumno = {};

    /*añadir más parametros
     en config.js
     .when('/alumno/:codigo/:nombre',{
       templateUrl: 'parciales/alumno.html',
       controller: 'alumnoCtrl'
     })

    $scope.nombre = $routeParams.nombre;
    */

    // mensaje alumno Guardado
    $scope.guardado = false;

    // crear nuevo alumnos
    $scope.creandoNuevo = false;

    if ($scope.codigo == "nuevo") {
      $scope.creandoNuevo = true;
    } else {
      //RECUPERAR UN alumno
      $http.get('php/servicios/alumnos.getAlumno.php?c=' + $scope.codigo)
        .success((data) => {
          // si codigo no existe vuelve a alumnos
          if (data.err !== undefined) {
            window.location = "#/alumnos"
          }
          $scope.alumno = data;
        })
    }


    /* guardar alumno*/
    $scope.guardarElAlumno = () => {

      if($scope.creandoNuevo){
        //CREAR NUEVO ALUMNO
        $http.post('php/servicios/alumnos.crear.php', $scope.alumno)
          .success((data) => {
            //   alert("GUARDADO")
            if (data.err === false) $scope.guardado = true;

            // para que desaparezca el mensaje
            setTimeout(() => {
              $scope.guardado = false
              $scope.$apply(); // para que lo aplique ya que setTimeout es sincrono
            }, 4000);
          })
      }else{
        //ACTUALIZAR
        $http.post('php/servicios/alumnos.guardar.php', $scope.alumno)
          .success((data) => {
            //   alert("GUARDADO")
            if (data.err === false) $scope.guardado = true;

            // para que desaparezca el mensaje
            setTimeout(() => {
              $scope.guardado = false
              $scope.$apply(); // para que lo aplique ya que setTimeout es sincrono
            }, 4000);
          })
      }

    }



  }
]);
