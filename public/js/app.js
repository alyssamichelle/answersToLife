// Declare app level module which depends on ngRoute
angular.module('answersToLife', ['ngResource', 'yaru22.directives.md', 'ngRoute'])
.config(function($routeProvider){
  $routeProvider
  .when('/',{
    redirectTo: '/answers'
  })
  .when('/answers',{
    templateUrl: '/templates/answers.html',
    controller: 'AnswersController'
  })
  .when('/answers/:id',{
    templateUrl: '/templates/answer.html',
    controller: 'AnswerController'
  })
  .when('/alt-content',{
    templateUrl: '/templates/alt-content.html'
  })
  .when('/questions',{
    templateUrl: '/templates/questions.html',
    controller: 'QuestionsController'
  })
  .when('/about',{
    templateUrl: '/templates/about.html',
    controller: 'AboutController'
  });
});
