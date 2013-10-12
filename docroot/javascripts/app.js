var acornAmpsApp = angular.module('acornAmpsApp', [], function($routeProvider) {
    $routeProvider.
    when('/home', {
      templateUrl: 'partials/home.html'
    }).
    when('/find-us', {
      templateUrl: 'partials/find-us.html'
    }).
    when('/contact-us', {
      templateUrl: 'partials/contact-us.html'
    }).
    otherwise({
      redirectTo: '/home'
    });
  });
