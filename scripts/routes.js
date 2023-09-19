define(["./app"], function (app) {
  "use strict";
  return app.config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/angular", {
        templateUrl: "partials/about.html",
        controller: "aboutController",
      });

      $routeProvider.when("/react", {
        templateUrl: "partials/react.html",
      });


      $routeProvider.otherwise({
        redirectTo: "/",
      });
    },
  ]);
});
