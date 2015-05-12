// Attatching all to the main application module
angular.module('answersToLife')

// Answers Factory in charge of GETting all Answers
.factory('Answers', function AnswersFactory($http){
  return $http.get('https://answerstolife.firebaseio.com/answers.json');
})

// Unanswered Questions Index
.factory('Question', function QuestionsFactory($http){
  return $http.get('https://answerstolife.firebaseio.com/questions.json');
})

// Calling Bible API
.factory('Bible', function BibleFactory($http){
  var apiKEy ='g7pRCebbMw8nO233bScEv1yVZcDWSrJbSIl1jsJl';
  var verse = 'For God so loved the world, that he gave his only begotten son; that whosoever believed in him, shall not perish, but have everlasting life.';
  // return $http.get('https://'+ apiKey+ ':bibles.org/v2/versions/eng-GNTD.xml');
  return verse;
});

// curl command
// curl -L -u g7pRCebbMw8nO233bScEv1yVZcDWSrJbSIl1jsJl:X -k https://bibles.org/v2/verses/eng-GNTD:Acts.8.34.xml
