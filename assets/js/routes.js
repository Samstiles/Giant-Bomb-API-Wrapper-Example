app.config(function($routeProvider, $locationProvider) {

  $routeProvider

  .when('/', {
    templateUrl: '/templates/findagame.html',
    controller: 'indexController'
  })

  // .when("/tasks", {
  //   templateUrl: '/templates/tasks.html',
  //   controller: 'tasksController',
  //   resolve: {
  //     "tasks": function($http, $rootScope, $location){
  //       return $http.get("http://localhost:1337/findTasksByUser")
  //       .then(function(successResponse){
  //         return successResponse.data;
  //       }, function(errorResponse){
  //         return $location.path('/404');
  //       });
  //     }
  //   }
  // })

  .when("/game/:gameid", {
    templateUrl: '/templates/game.html',
    controller: 'gameController',
    resolve: {
      "gameData": function($http, $route, $location, $rootScope) {
        return $http.jsonp('http://www.giantbomb.com/api/game/3030-' + $route.current.params.gameid, {
          params: {
            api_key: '97aa330b6c4a3276eb9ea1de316d031713a8040e',
            format: 'jsonp',
            json_callback: 'JSON_CALLBACK'
          }
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

  .when("/results", {
    templateUrl: '/templates/results.html',
    controller: 'gameResultsController'
  })

  .when("/random", {
    templateUrl: '/templates/random.html',
    controller: 'randomGameController'
  })

  .when("/404", {
    templateUrl: '/templates/404.html'
  })

  .otherwise({
    redirectTo: '/404'
  });

  $locationProvider.html5Mode(false);

});