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

function navController($scope, $location) {
  $scope.template = 'partials/nav.html';

  $scope.isActive = function (viewLocation) {
    return viewLocation === '#' + $location.path();
  };

  $scope.links = [
    {
      'class': "home",
      'href': '#/home',
      'text': 'Home',
      'icon': 'icon-home',
      'title': 'Home'
    },
    {
      'class': "find-us",
      'href': '#/find-us',
      'text': 'Find Us',
      'icon': 'icon-map-marker',
      'title': 'Directions to Acorn Amps…'
    },
    {
      'class': "contact-us",
      'href': '#/contact-us',
      'text': 'Contact Us',
      'icon': 'icon-comment',
      'title': 'Give us a shout…'
    },
    {
      'class': "instagram",
      'href': 'http://instagram.com/acornamps',
      'text': 'Instagram',
      'icon': 'icon-instagram',
      'title': 'Check us out on Instagram…',
      'external': true
    },
    {
      'class': "facebook",
      'href': 'http://facebook.com/acornamps',
      'text': 'Facebook',
      'icon': 'icon-facebook',
      'title': 'Check us out on Facebook…',
      'external': true
    },
    {
      'class': "twitter",
      'href': 'http://twitter.com/AcornAmps',
      'text': 'Twitter',
      'icon': 'icon-twitter',
      'title': 'Check us out on Twitter…',
      'external': true
    }
  ];
}
