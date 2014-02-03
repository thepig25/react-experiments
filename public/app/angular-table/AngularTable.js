/*exported app, UserCtrl*/
var app = angular.module('angularTableApp', []);

function UserCtrl($scope, $http) {

	$scope.user = [];

	$scope.loadUser = function () {
		$http({method: 'GET', url: 'data/users-table-angular.json'})
			.success(function (data, status) {
				$scope.status = status;
				$scope.user = data;
			})
			.error(function (data, status) {
				$scope.data = data || 'Request failed';
				$scope.status = status;
			});
	};

	$scope.loadUser();

}