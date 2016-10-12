(function() {
    angular.module("vinylApp")
      .directive("vinyl", VinylDirective);

      function VinylDirective() {
          return {
              restrict: 'E',
              templateUrl: 'vinyl.html',
              scope: {
                  image: '@',
                  album: '@',
                  artist: '@',
                  year: '@'
              }
          };
      }
})();