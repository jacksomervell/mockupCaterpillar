angular
  .module("mockupApp", [ 'ui.router'])
  .config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'index.html'
    })

    .state('services', {
      url: '/services',
      templateUrl: 'services.html'
    })
  }
