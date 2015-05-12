angular.module('answersToLife')

// Decided to let each route handle this functionality
// This way on nav click, or manual page url type in, the nav buttons will respond properly

// .directive('menu', function(){
//   return {
//     replace: true,
//     restrict: 'E',
//     template: '<div class="ui three item purple menu"><a class="active answers item" href="#/answers">Answers</a><a class="questions item" href="#/questions">Questions</a><a class="about item" href="#/about">About</a></div>',
//     link: function(){
//
//       // find out what the current page is
//       // make the correlated nav active
//
//       // on menu item click, toggle active class
//       // on pg re-route, make sure current pg matches active nav
//     }
//   }
// })
// .directive('Answer', function (){
//   return {
//     restrict: 'E',
//     templateUrl: 'answer/template.html'
//   }
// })


// .directive('votes', function (){
//   return {
//     replace: true,
//     restrict: 'E',
//     template: '<span>{{votes}}</span>',
//     scope: {
//       votes: '='
//     },
//     link: function(){
//       scope.votes = 0;
//       scope.vote = function(){
//         scope.votes++;
//       };
//     }
//   }
// });
