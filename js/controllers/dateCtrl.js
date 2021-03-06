"use strict";
app.controller('DateCtrl', ["$scope", 'date', 'dateService', 'dates', 'mainService', function($scope, date, dateService, dates, mainService) {

  $scope.state = mainService.getState();
  $scope.selectedDate = date;

  $scope.editing = false;

  $scope.newDate = date.index;
  $scope.dates = dates;

  $scope.setDate = function(day) {
    dateService.setDay(day);
  };

  $scope.changeDate = function(date){
    var stringDate = date.toISOString().substring(0,10);
    var dayOfYear = $scope.dates.indexOf(stringDate);
    if(dayOfYear >= 0){
  	 dateService.setDay(dayOfYear); 
     $scope.newDate = dayOfYear;
    }
  	$scope.editing = !$scope.editing;
  };

  $scope.nextDay = function(){
    dateService.nextDay();
  };

  $scope.currentDate = function(){
    return dates[$scope.selectedDate.index];
  };

  //make it more obvious that you can click on the date to change it

}]);
