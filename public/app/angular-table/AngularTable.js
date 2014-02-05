/*exported app, UserCtrl*/
var app = angular.module('angularTableApp', []);

function UserCtrl($scope, $http, $timeout) {
	$scope.currentPage = 1; //current page
    $scope.maxSize = 5; //pagination max size
    $scope.entryLimit = 5; //max rows for data table
	$scope.user = [];	
	$scope.loadUser = function () {
		$http({method: 'GET', url: 'data/users-table-angular.json'})
			.success(function (data, status) {
				$scope.status = status;
				$scope.user = data;
				$scope.noOfPages = $scope.user.length;//Starting number for data pagination overridden later


			})
			.error(function (data, status) {
				$scope.data = data || 'Request failed';
				$scope.status = status;
			});
	};	
    
	$scope.filter = function() {
		 $timeout(function() { 
			 //wait for 'filtered' to be changed
			/* change pagination with $scope.filtered */
			$scope.noOfPages = Math.ceil($scope.filtered.length/$scope.entryLimit);
			$scope.currentPage = 1;
		}, 10);
	};
	$scope.loadUser();

}
app.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});
