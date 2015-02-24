angular.module('answersToLife')
.controller('AnswersController', ['Answers','$scope', function(Answers, $scope){

  Answers.success(function(data){
    $scope.answers = data;
  });
  
}]);
