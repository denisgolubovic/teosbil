app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'views/home.html'
    })
    .when('/', {
      controller: 'PhotoController',
      templateUrl: 'views/photo.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
