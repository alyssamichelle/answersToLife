angular.module('answersToLife')
.factory('Answers', ['$http', function AnswersFactory($http){
  return $http.get('https://answerstolife.firebaseio.com/answers.json');
}]);
