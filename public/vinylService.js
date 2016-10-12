(function () {
  angular.module("vinylApp")
    .factory("VinylService", VinylService);

  VinylService.$inject = ['$http', '$q'];
  function VinylService($http, $q) {
    return {
      getData: getData
    };

    function getData() {
      var deferred = $q.defer();

      $http.get('/vinyls')
        .then(function (result) {
            deferred.resolve(result.data);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }
  }
})();