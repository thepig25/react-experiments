/*global UserModel*/
/*exported UserCollection*/
var UserCollection = Backbone.Collection.extend({
	model: UserModel,
	url: 'data/users.json'
});