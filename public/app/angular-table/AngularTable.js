/*exported app, UserCtrl*/
var app = angular.module('angularTableApp', []);

function UserCtrl($scope, $http, $timeout) {
	$scope.currentPage = 1; //current page
	$scope.entryLimit = 100000; //max rows for data table todo make configurable
	$scope.lastPage = 5;
	$scope.user = [];
	$scope.loadUser = function () {
		$http({method: 'GET', url: 'data/users.json'})
			.success(function (data, status) {
				console.time('reactRender');
				$scope.status = status;
				var start = new Date();
				$scope.user = data;
				 setTimeout( function () {
			      // Logs when Angular is done processing repeater
					console.timeEnd('angularRender');
			    }); // Leave timeout empty to fire on next tick
				$scope.noOfPages = $scope.user.length / $scope.entryLimit;//Starting number for data pagination overridden later

			})
			.error(function (data, status) {
				$scope.data = data || 'Request failed';
				$scope.status = status;
			});
	};

	$scope.filter = function () {
		$timeout(function () {
			//Small timeout to work out filtered content
			/* change pagination with $scope.filtered */
			$scope.noOfPages = Math.ceil($scope.filtered.length / $scope.entryLimit);
			$scope.currentPage = 1;
			$scope.lastPage = $scope.noOfPages;
		}, 10);
	};

	$scope.loadUser();
	//Delay keydown functionality to allow search

}
//A filtering app
app.filter('startFrom', function () {
	return function (input, start) {
		if (input) {
			start = +start;
			return input.slice(start);
		}
		return [];
	};
});