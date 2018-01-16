var app = angular.module('promesaApp.services', []);
app.factory('Personas', ['$http', '$q', '$rootScope',function($http, $q, $rootScope) {
  var self = {
    "cargando": false,
    "mensaje":"",
    "data": []
  };

  //json-generator.com

  self.cargarData = () => {
    self.cargando = true;


    //promesa
    var q = $q.defer();

    $http.jsonp('http://www.json-generator.com/api/json/get/cePRSrvVbC?callback=JSON_CALLBACK')
      .then(function success(respuesta) {
          console.log(respuesta)
          q.resolve(respuesta.data)
        },
        function error(error) {
          console.log(error)
          q.reject("ERROR AL CARGAR" + error)
        }
      );
return q.promise;
  }

  //ejecutar la función
  $rootScope.promise = self.cargarData();

  $rootScope.promise.then(
    (data) => {
      self.cargando= false;
      self.mensaje = "ok cargados los datos"
      self.data = data;
    },
    (error) => {
      self.cargando= false;
      self.mensaje = "ERROR AL CARGAR LOS DATOS"
      console.error(error)
    }
  )




  return self;

}])
