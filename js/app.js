angular
  .module("mockupApp", ['ui.router', 'ngMaterial'])
  .config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })

    .state('services', {
      url: '/services',
      templateUrl: 'services.html'
    })
  }
