angular.module('answersToLife')
.directive('atlAnswer', [function (){
  return {
    restrict: 'E',
    templateUrl: 'atl-answer/template.html',
    link: function(scope){

    },
    scope:{
      altContent: '=',
      content: '=',
      title: '='
    }
  }
}]);
