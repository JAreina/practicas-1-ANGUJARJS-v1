var app = angular.module('promesaApp.controladores', []);



app.controller('mainCtrl', ['$scope', '$q', function($scope, $q) {


  $scope.miVariable2 = 0;
$scope.miVariable = 0

  console.log("todo bien")


  setInterval(() => {
    $scope.miVariable2++;
    $scope.$apply();
  }, 1000);


  //funcion asincrona

  $scope.sumar = (num) => {
    // defer = diferido
    var q = $q.defer();
    var correcto = true;

setTimeout(()=>{
  if (correcto) {
    q.resolve(num + 2000)
  } else {
    q.reject("no se suma")
  }
},1000);


    return q.promise; //
  }

//llamar a la función

  $scope.promise = $scope.sumar(1000)

// cuando se ha cumplido la promesa
$scope.promise.then(
     //funcion resolve
  (valor)=>{
      console.log("Se HA CUMPLIDO LA PROMESA");
      $scope.miVariable= valor;
},

  (error)=>{
   console.error(error)
})


}]);
//promesas   : ejecuta un proceso
// y sigue el flujo normal
// cuando termina avisa si ha ido bien o mal
