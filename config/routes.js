module.exports.routes = {
  '/processLogin': {
    controller: 'UserController',
    action: 'processLogin'
  },
  '/processSignup': {
    controller: 'UserController',
    action: 'processSignup'
  },
  '/processLogout': {
    controller: 'UserController',
    action: 'processLogout'
  }
};
