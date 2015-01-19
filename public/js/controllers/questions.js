angular.module('answersToLife')

// TO DO
// Add data to firebase
// Make server calls to get this data https://answerstolife.firebaseio.com/

.controller('QuestionsController',['$scope', function($scope){
  console.log('Running in values controller')
  // Temporary Inline Controller to Fake Getting Data
  $scope.unansweredQuestions =
    ["How old is the Earth?",
    "What happened to the Dinosaurs?",
    "Do you need to be baptized to go to heaven?",
    "Who is Satan?",
    "How does gay and lesbian life styles fit into christian life?",
    "Really, what are angels?",
    "Who is going to heaven?",
    "How are you or I saved?",
    "Are there really aliens in our universe?",
    "How did the earth and our solar system come to be?",
    "Was Noah and his ark real?",
    "What is marriage and why get married?",
    "What is the meaning of life?",
    "What does heaven look like?"];

    console.log('Running in values controller', $scope)

}]);
