angular.module('answersToLife')
.factory('Answers', function AnswersFactory($http){
  // return $.Deferred();
  return $http.get('https://answerstolife.firebaseio.com/answers.json');
  // return $http.get('http://theanswerstolife.tumblr.com/api/read/json');

  // try and fig out why this is not working, oath?
  // var apiKey = 'Lg3fEupJ8ULRAlUxHS0G2Hev1cYgKZUOKCjRxCO2qVNxO05EmI';
  // return $http.get('http://api.tumblr.com/v2/blog/theanswerstolife.tumblr.com/posts?api_key='+ apiKey);

});
