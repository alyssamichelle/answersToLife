// Attatching all to the main application module
angular.module('answersToLife')

// Answers Factory in charge of GETting all Answers
.factory('Answers', function AnswersFactory($http){
  return $http.get('https://answerstolife.firebaseio.com/answers.json');
})

.factory('Question', function QuestionsFactory($http){
  return $http.get('https://answerstolife.firebaseio.com/questions.json');
});
