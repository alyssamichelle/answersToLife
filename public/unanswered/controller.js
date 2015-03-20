angular.module('answersToLife')
.controller('UnansweredController',function(Questions, $scope){

  Questions.success(function(data){
    $scope.unansweredQuestions = data;
    console.log(data);
  });

});
