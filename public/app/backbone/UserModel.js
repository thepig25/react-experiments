/*exported UserModel*/
var UserModel = Backbone.Model.extend({

	defaults: {
		id: null,
		fullName: '',
		email: '',
		updated: null,
	}

});