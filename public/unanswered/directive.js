angular.module('answersToLife')
.directive('Unanswered', function (){
  return {
    restrict: 'E',
    templateUrl: 'unanswered/template.html',
    link: function(scope){

    },
    scope:{
      unansweredQuestions: '='
    }
  }
});
