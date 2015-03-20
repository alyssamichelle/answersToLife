angular.module('answersToLife')
.controller('AnswersController',function(Answers, $scope){

  Answers.success(function(data){
    $scope.answers = data;
    console.log(data);
  });

});
