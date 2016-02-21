angular.module('zacharyApp', ['ui.router','angular-loading-bar'])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/'); /* If no other routes are picked, it defaults to this one */

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html' /* Template for the URL provided. Can be HTML or can be an external file */
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html' /* Template for the URL provided. Can be HTML or can be an external file */
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact.html'
      });
  })
  // .controller('directoryController', function(){
  //
  //
  //
  // });
