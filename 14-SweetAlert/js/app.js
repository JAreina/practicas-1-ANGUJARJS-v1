var app = angular.module('bonusApp', []);

app.controller('mainCtrl', ['$scope', function($scope) {


  $scope.alerta = () => {
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
  }

  $scope.borrar = () => {
    swal({
        title: "Estás seguro?",
        text: "Una vez borrado es irrecuperable!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! HA SIDO BORRADO", {
            icon: "success",
          });
        } else {
          swal("NO HA SIDO BORRADO!");
        }
      });
  }

  $scope.buscar = () => {
    swal({
        text: 'Search for a movie. e.g. "La La Land".',
        content: "input",
        button: {
          text: "Search!",
          closeModal: false,
        },
      })
      .then(name => {
        if (!name) throw null;

        return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
      })
      .then(results => {
        return results.json();
      })
      .then(json => {
        const movie = json.results[0];

        if (!movie) {
          return swal("No movie was found!");
        }

        const name = movie.trackName;
        const imageURL = movie.artworkUrl100;

        swal({
          title: "Top result:",
          text: name,
          icon: imageURL,
        });
      })
      .catch(err => {
        if (err) {
          swal("Oh noes!", "The AJAX request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
  }
}]);
