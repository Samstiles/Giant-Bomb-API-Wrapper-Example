var app = angular
  .module('app', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap'
]);

app.run(function($http) {
  $http.defaults.useXDomain = true;
});