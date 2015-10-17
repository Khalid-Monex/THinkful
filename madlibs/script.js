// Code goes here
angular.module('myApp', [])
.controller('oneController', function($scope) 
{
  $scope.female_name = { text: 'fn' };
  $scope.job_title = { text: 'jt' };
  
  $scope.set = function(name, title) {
            $scope.female_name.text = name;
            $scope.job_title.text = title;
        }
});