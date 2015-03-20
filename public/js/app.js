// Declare app level module which depends on ngRoute
angular.module('answersToLife', ['ngResource', 'yaru22.directives.md', 'ngRoute'])
.config(function($routeProvider){
  $routeProvider
  .when('/',{
    redirectTo: '/answers'
  })
  .when('/answers',{
    templateUrl: '/answer/template.html',
    controller: 'AnswersController'
  })
  .when('/alt-content',{
    templateUrl: '/answer/alt-content.html'
  })
  .when('/unanswered',{
    templateUrl: '/unanswered/template.html',
    controller: 'UnansweredController'
  })
  .when('/about',{
    templateUrl: '/about/template.html',
    controller: 'AboutController'
  });
});
