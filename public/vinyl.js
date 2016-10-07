(function () {
  angular.module("vinyl", [])
    .controller("VinylController", VinylController)
    .factory("VinylService", VinylService);

  VinylController.$inject = ['VinylService'];
  function VinylController(vinylService) {
    var vm = this;

    vm.ideas = [{ album: "Ideas Album Name" }];
    vm.owned = [{ album: "Owned Album Name" }];
    vm.wanted = [{ album: "Wanted Album Name" }];

    vinylService.getData().then(setVinyls, displayError);

    function setVinyls(result) {
      console.log(result);
      vm.ideas = result.data.ideas;
      vm.owned = result.data.owned;
      vm.wanted = result.data.wanted;
    }

    function displayError(error) {
      console.log(error);
    }

  }

  VinylService.$inject = ['$http'];
  function VinylService($http) {
    return {
      getData: getData
    };

    function getData() {
      return $http.get("vinyls.json");
    }
  }
})();