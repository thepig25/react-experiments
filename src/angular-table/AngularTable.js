var app = angular.module('angularTableApp', []);

function UserCtrl ($scope) {

	$scope.user = [];

	$scope.loadUser = function () {
		var xhr = $.ajax({
			method: 'POST',
			url: 'data/users-table.json',
			data: 'json'
		});

		xhr.done(function (data) {
			$scope.user = data;
		});
	};

	$scope.loadUser();

}
