angular.module('answersToLife')
.controller('AnswersController',function(Answers, $scope){
  $('.ui.menu .item').removeClass('active');
  $('.ui.menu .answers.item').addClass('active');
// Multiple Answers Controller
  Answers.success(function(data){
    $scope.answers = data;
    console.log(data);
  });

})

// Single Answer Controller
.controller('AnswerController',function(Answers,$scope, $routeParams){
  $('.ui.menu .item').removeClass('active');
  $('.ui.menu .answers.item').addClass('active');

  if($scope.answers){
    $scope.answer = $scope.answers[$routeParams.id];
  }else{
    Answers.success(function(data){
      $scope.answers = data;
      $scope.answer = $scope.answers[$routeParams.id];

    });
  };

})

// Questions Controller
.controller('QuestionsController',function(Question, $scope){
  $('.ui.menu .item').removeClass('active');
  $('.ui.menu .questions.item').addClass('active');

  Question.success(function(data){
    $scope.unansweredQuestions = data;
  });
  //
  // $scope.votes = 0;
  //
  // $scope.vote = function(){
  //   $scope.votes++;
  // }
});
