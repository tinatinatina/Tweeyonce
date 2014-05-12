var MyApp = angular.module('MyApp', [
  'ngRoute',
  'Tweets',
  'Words',
  'MyAppController',
  'd3',
  'myApp.directives'
]);

 
MyApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/barView.html',
        controller: 'homeCTRL'
      }).
      when('/tweets', {
        templateUrl: 'views/tweetView.html',
        controller: 'tweetCTRL'
      }).
      when('/map', {
        templateUrl: 'views/mapView.html',
        controller: 'mapCTRL'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);




