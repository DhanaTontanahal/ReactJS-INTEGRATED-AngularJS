define(["./module"], function (controllers) {
  "use strict";
  controllers.controller("aboutController", [
    "$scope",
    "$window",
    "$location",
    function ($scope, $window, $location) {
      console.log(" aboutController..");
      $scope.test="Angular variable value";
      setTimeout(()=>{
        $scope.test="Angular variable value - timed out 1 sec";
        $scope.$apply();
      },1000)
    },
  ]);
});
