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

// mensaje alumno Guardado
$scope.guardado = false;


    $scope.alumno = {};

    //RECUPERAR UN alumno
    $http.get('php/servicios/alumnos.getAlumno.php?c=' + $scope.codigo)
      .success((data) => {
        // si codigo no existe vuelve a alumnos
        if (data.err !== undefined) {
          window.location = "#/alumnos"
        }
        $scope.alumno = data;
      })


   /* guardar alumno*/
   $scope.guardarElAlumno= ()=>{
       //alert("venga ya")
      $http.post('php/servicios/alumnos.guardar.php', $scope.alumno)
              .success((data)=>{
                  //   alert("GUARDADO")
                  if(data.err ===false) $scope.guardado = true;

                // para que desaparezca el mensaje
                  setTimeout(()=>{
                    $scope.guardado = false
                        $scope.$apply();
                  },4000);
              })
   }



  }]);
