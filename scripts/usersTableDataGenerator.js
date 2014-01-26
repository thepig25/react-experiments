var usersTableData = {
	'headers': [
		'id',
		'fullName',
		'email',
		'updated'
	],
	'data': []
};
for (var i = 1; i <= 500; i++) {
	usersTableData.data.push([
		1000 + i,
		'Robot Man #' + i,
		'robotman.' + i + '@smith.com',
		new Date()
	]);
}
JSON.stringify(usersTableData, null, 4);