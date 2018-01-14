(function() {
  "use strict";



  var app = angular.module('jareina', []);



  app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

    //http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK
    $scope.clima = {};
    $scope.url = "";

    // geoplugin obtengo coordenadas actuales
    $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK')
      .success((data) => {
        $scope.url = `http://api.openweathermap.org/data/2.5/weather?lat=${data.geoplugin_latitude}&lon=${data.geoplugin_longitude}&callback=JSON_CALLBACK&appid=9f50a805aa0089a1edd1829a5db029f0`
        console.log($scope.url)

        //OBTENER EL CLIMA DE ESAS COORDENADAS ACTUALES
        $http.jsonp($scope.url)
          .success(function(data) {

            $scope.clima = data;


          });
      });

$scope.kelvinCelsius = function(k){
  return Math.round((k - 273.15)*100)/100;
}



  }]);

  // filtro personalizado para mostrar json de forma legible en tag <pre>
  app.filter('prettyJSON', function() {
    function prettyPrintJson(json) {
      return JSON ? JSON.stringify(json, null, '  ') : 'your browser doesnt support JSON so cant pretty print';
    }
    return prettyPrintJson;
  });



})();
