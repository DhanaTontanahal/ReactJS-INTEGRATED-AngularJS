define([
  "angular",
  "angular-route",
  "./controllers/index",
  "./directives/index",
  "./services/index",
  "./constants/index",
  "./filters/index",
], function (ng) {
  "use strict";

  return ng.module("app", [
    "ngRoute",
    "app.services",
    "app.controllers",
  ]);
});
