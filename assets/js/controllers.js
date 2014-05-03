app.controller('indexController', function($scope, $rootScope, $http){

  $http.defaults.useXDomain = true;

  $scope.initialQuery = '';
  $scope.results;

  $scope.runQuery = function(){
    console.log('Sending query...');
    $http.jsonp('http://www.giantbomb.com/api/search/', {
      params: {
        api_key: '97aa330b6c4a3276eb9ea1de316d031713a8040e',
        format: 'jsonp',
        json_callback: 'JSON_CALLBACK',
        resources: 'game',
        field_list: 'id,name,image',
        limit: '10',
        query: $scope.initialQuery
      }
    }).success(function(data, status, headers, config) {

      console.log('Success!');
      $scope.results = data.results;

    }).error(function(data, status, headers, config) {
      console.log('Error!');
    });
  };

});

app.controller('authLogoutController', function($scope, $rootScope, $http, $location){

  $scope.processLogout = function(){
    $http.get('/processLogout')
    .success(function(data, status, headers, config){
      console.log('Success happened!');
      console.log(JSON.stringify(data, null, 4));
      $rootScope.currentUser = false;
      $location.path('/login');
    })
    .error(function(data, status, headers, config){
      console.log('Error happened!');
      console.log(JSON.stringify(data, null, 4));
      $rootScope.currentUser = false;
      $location.path('/login');
    });
  };

});


app.controller('randomGameController', function($scope, $rootScope, $http, $location){


});

app.controller('authLoginController', function($scope, $rootScope, $http, $location){

  $scope.email_signin = "";
  $scope.password_signin = "";

  $scope.email_signup = "";
  $scope.password_signup = "";
  $scope.password_signup_confirmation = "";

  $scope.processLogin = function(){

    if ( $scope.email_signin.length <= 0 ) {
      $rootScope.applicationError = "Please enter an email.";
      return;
    } else if ( $scope.password_signin.length <= 0 ) {
      $rootScope.applicationError = "Please enter your password.";
      return;
    }

    var data = {
      email: $scope.email_signin,
      password: $scope.password_signin
    };

    $http.post('/processLogin', data)
    .success(function(data, status, headers, config){
      console.log('Success happened!');
      console.log(JSON.stringify(data, null, 4));
      $rootScope.currentUser = data;
      $location.path('/');
    })
    .error(function(data, status, headers, config){
      console.log('Error happened!');
      console.log(data);
      $rootScope.applicationError = data.message;
    });
  };

  $scope.processSignup = function(){
    if ( $scope.password_signup === $scope.password_signup_confirmation ) {
      var data = {
        email: $scope.email_signup,
        password: $scope.password_signup
      };

      $http.post('/processSignup', data)
      .success(function(data, status, headers, config){
        console.log('Success happened!');
        console.log(JSON.stringify(data, null, 4));
        $rootScope.currentUser = data;
        $location.path('/');
      })
      .error(function(data, status, headers, config){
        console.log('Error happened!');
        console.log(data);
        $rootScope.applicationError = data.message;
      });
    } else {
      $rootScope.applicationError = "Passwords don't match!";
    }
  };

});

app.controller('errorController', function($scope, $rootScope){

  var errorDiv = angular.element(document.querySelector('#application-error-display'));
  $rootScope.applicationError = '';

  $scope.$watch('applicationError', function(){
    if ( $rootScope.applicationError !== '' ) {
      $scope.showPopup();
    } else {
      $scope.hidePopup();
    }
  });

  $scope.hidePopup = function(){
    errorDiv.css({
      'top': '-500px'
    });
    $rootScope.applicationError = '';
  };

  $scope.showPopup = function(){
    errorDiv.css({
      'top': '25px'
    });
  };
});