(function() {

  var app = angular.module('universidadApp', []);

  app.controller('listadoCtrl', ['$scope', function($scope) {


    $scope.listado = ["fernando",
                                "maria",
                                "eva"
    ];

    $scope.listadoProfesores = {
      profesores: [{
          nombre: "juan",
          edad: 444,
          clase: "PRIMERO"
        },
        {
          nombre: "MARIA",
          edad: 34,
          clase: "SEGUNDO"
        }
      ]
    }


    $scope.counter = 100;
    $scope.array = [0];


    $scope.updateModel = function() {


      $scope.array = [];
      for (var i = 0; i < $scope.counter; i++) {
        $scope.array.push(i);

      }
    };

  }]);

})();
