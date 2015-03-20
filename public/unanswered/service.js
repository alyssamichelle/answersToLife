angular.module('answersToLife')
.factory('Questions', function AnswersFactory($http){
  return $http.get('https://answerstolife.firebaseio.com/unanswered.json');
});
