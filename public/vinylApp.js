(function () {
  angular.module("vinylApp", [])
    .controller("VinylController", VinylController);

  VinylController.$inject = ['VinylService'];
  function VinylController(vinylService) {
    var vm = this;

    vm.ideas = [{ album: "Out of ideas!" }];
    vm.owned = [{ album: "We don't have any vinyls yet :(" }];
    vm.wanted = [{ album: "There's gotta be something we want..." }];

    vinylService.getData().then(setVinyls, displayError);

    function setVinyls(result) {
      console.log(result);
      if (result.ideas && result.ideas.length > 0) {
        vm.ideas = result.ideas;
      }
      if (result.owned && result.owned.length > 0) {
        vm.owned = result.owned;
      }
      if (result.wanted && result.wanted.length > 0) {
        vm.wanted = result.wanted;
      }
    }

    function displayError(error) {
      console.log(error);
    }
  }
})();