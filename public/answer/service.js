// Attatching all to the main application module
angular.module('answersToLife')

// Answers Factory in charge of GETting all Answers
.factory('Answers', function AnswersFactory($http){
  return $http.get('https://answerstolife.firebaseio.com/answers.json');
})
// Answer Factory in charge of GETting a single Answer
// .factory('Answer', function AnswersFactory($http, $scope, $routeParams){
//   return
//   $scope.answerId = $routeParams.id;
//   // console.log($routeParams)
//   // return $scope.answers[$routeParams.id];
//   // return $http.get('https://answerstolife.firebaseio.com/answers/'+ $routeParams.id +'.json');
// })
