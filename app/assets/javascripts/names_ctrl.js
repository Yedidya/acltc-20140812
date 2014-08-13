(function () {
  "use strict";

  angular.module("app").controller("namesCtrl", function($scope){ 
    $scope.people = people;
    $scope.clicked = true;

    $scope.toggle = function(person){
      console.log(person)
      person.show = !person.show;
    };
  });
})();
