angular.module('answersToLife')
.controller('AnswersController', ['Answers','$scope', function(Answers, $scope, AccessToken){

  Answers.success(function(data){
    $scope.answers = data;
  });

}]);
