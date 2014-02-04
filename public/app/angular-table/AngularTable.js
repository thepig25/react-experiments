/*exported app, UserCtrl*/
var app = angular.module('angularTableApp', []);

function UserCtrl($scope, $http) {
	$scope.currentPage = 0;
    $scope.pageSize = 10;
	$scope.user = [];	
	$scope.loadUser = function () {
		$http({method: 'GET', url: 'data/users-table-angular.json'})
			.success(function (data, status) {
				$scope.status = status;
				$scope.user = data;
				$scope.numberOfPages = function (){
		        	return Math.ceil($scope.user.length/$scope.pageSize);                
			    }
			})
			.error(function (data, status) {
				$scope.data = data || 'Request failed';
				$scope.status = status;
			});
	};	
	$scope.loadUser();

}

//startFrom filter
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});