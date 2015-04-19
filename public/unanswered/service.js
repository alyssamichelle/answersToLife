angular.module('answersToLife')
.factory('Unanswered', function AnswersFactory($http){
  return $http.get('https://answerstolife.firebaseio.com/unanswered.json');
});
