angular.module('answersToLife')
.controller('UnansweredController',function(Unanswered, $scope){

  Unanswered.success(function(data){
    $scope.unansweredQuestions = data;
    console.log('what');
  });

});
