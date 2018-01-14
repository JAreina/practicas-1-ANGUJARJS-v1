app.config(function( $routeProvider) {


                      $routeProvider.when('/', {
                          templateUrl : 'partials/home.html',
                           controller :'inicioCtrl'
                        })
                        .when('/autores', {
                          templateUrl : 'partials/autores.html',
                          controller :'autoresCtrl'

                        })
                        .when('/libros', {
                          templateUrl : 'partials/libros.html',
                          controller:'librosCtrl'

                        })

                        $routeProvider.otherwise({redirectTo:'/'});

            });
