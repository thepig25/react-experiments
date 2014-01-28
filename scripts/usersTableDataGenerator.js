// Simple script to generate some mock table JSON data for the FE to render.
// Example use (from project root):
// node scripts/usersTableDataGenerator.js  > public/data/users-table.json

var maxRows = 5000;

var usersTableData = {
	'headers': [
		'id',
		'fullName',
		'email',
		'updated'
	],
	'data': []
};

for (var i = 1; i <= maxRows; i++) {
	var paddedId = ('000' + i).slice(-4); // Pad to 4 characters. Won't work over 9999.
	usersTableData.data.push([
		paddedId,
		'Robot Man #' + paddedId,
		'robotman.' + paddedId + '@smith.com',
		new Date()
	]);
}

console.log(JSON.stringify(usersTableData, null, 4));