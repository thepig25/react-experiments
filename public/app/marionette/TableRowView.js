/*exported TableRowView*/
var TableRowView = Backbone.Marionette.ItemView.extend({
	
	tagName: 'tr',

	/**
	 * TODO Performance tuning.
	 * @see http://underscorejs.org/#template
	 */
	template: '#table-row-template',

	/**
	 * For use, in future, with  _.template's variables setting.
	 */
	serializeData: function () {
		return { 
			data: this.model.toJSON() 
		};
	}

});