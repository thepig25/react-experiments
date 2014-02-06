// Simple script to generate some mock table JSON data for the FE to render.
// Example use (from project root):
// node scripts/usersTableDataGenerator.js  > public/data/users-table.json

var maxRows = 5000;

var userData = [];

for (var i = 1; i <= maxRows; i++) {

	// Pad to 4 characters. Won't work over 9999.
	var paddedId = ('000' + i).slice(-4); 

	userData.push({
		id: paddedId,
		fullName: 'Robot Man #' + paddedId,
		email: 'robotman.' + paddedId + '@smith.com',
		updated: new Date()
	});

}

console.log(JSON.stringify(userData, null, 4));