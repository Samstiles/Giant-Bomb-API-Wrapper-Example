productivityTime.config(function($routeProvider, $locationProvider) {

  $routeProvider

  .when('/', {
    templateUrl: '/templates/index.html',
    controller: 'indexController'
  })

  .when("/thing", {
    templateUrl: '/templates/thing.html',
    controller: 'thingController',
    resolve: {
      "thing": function($http, $rootScope, $location){
        return $http.get("http://someURL/")
        .then(function(successResponse){
          return successResponse.data;
        }, function(errorResponse){
          return $location.path('/404');
        });
      }
    }
  })

  .when("/login", {
    templateUrl: '/templates/login.html',
    controller: 'authLoginController'
  })

  .when("/logout", {
    templateUrl: '/templates/login.html',
    controller: 'authLogoutController'
  })

  .when("/404", {
    templateUrl: '/templates/404.html'
  })

  .otherwise({
    redirectTo: '/404'
  });

  $locationProvider.html5Mode(false);

});