angular.module('answersToLife')
.directive('Unanswered', function (){
  return {
    restrict: 'E',
    templateUrl: 'unanswered/template.html',
    scope:{
      unansweredQuestions: '='
    }
  }
});
