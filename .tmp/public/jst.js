this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/404.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>404 page!</h1>';

}
return __p
};

this["JST"]["assets/templates/directives/thing.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["JST"]["assets/templates/findagame.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="headerwrap">\r\n\t<div class="container">\r\n\t\t<div class="row" id="content">\r\n\t\t\t<div class="col-lg-6 pull-left">\r\n\t\t\t\t<h1>What was the last game you played, that you enjoyed?</h1>\r\n\t\t\t\t<form class="form-inline" role="form">\r\n\t\t\t\t  <div class="form-group col-xs-12 no-padding-left">\r\n\t\t\t\t    <input type="text" class="input-lg col-xs-6" id="gameinput" placeholder="Start typing the game title"> \r\n\t\t\t\t  \t<a type="submit" style="margin-left: 15px" class="search-btn btn-lg col-xs-2">Search!</a>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</form>\t\t\t\t\t\r\n\t\t\t</div><!-- /col-lg-6 -->\t\t\t\t\r\n\t\t</div><!-- /row -->\r\n\t</div><!-- /container -->\r\n</div><!-- /headerwrap -->\r\n\r\n<script type="text/javascript">\r\n$("div").each(function(index) {\r\n    $(this).delay(400*index).fadeIn(300);\r\n});\r\n</script>';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container page-wrapper authentication-page">\n  <div class="col-xs-6">\n    <div class="signin">\n      <h2>Sign In</h2>\n      <label for="email_signin">Email</label>\n      <input type="text" name="email_signin" class="form-control" ng-model="email_signin">\n      <label for="password_signin">Password</label>\n      <input type="password" name="email_password" class="form-control" ng-model="password_signin">\n      <div class="button-container">\n        <button id="login" ng-click="processLogin()">Log In</button>\n        <a href="/#/forgot">Forgot Password?</a>\n      </div>\n    </div>\n  </div>\n  <div class="or"><p>or...</p></div>\n  <div class="divider"></div>\n  <div class="col-xs-6">\n    <div class="signup">\n      <h2>Sign Up</h2>\n      <label for="email_signup">Enter your email address:</label>\n      <input type="text" name="email_signup" class="form-control" ng-model="email_signup">\n      <label for="password_signup">Enter a password:</label>\n      <input type="password" name="password_signup" class="form-control" ng-model="password_signup">\n      <label for="password_signup_confirmation">Confirm password:</label>\n      <input type="password" name="password_signup_confirmation" class="form-control" ng-model="password_signup_confirmation">\n      <div class="button-container">\n        <button id="register" ng-click="processSignup()">Register</button>\n      </div>\n    </div>\n  </div>\n</div>';

}
return __p
};