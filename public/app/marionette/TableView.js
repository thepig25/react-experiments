/*global TableRowView*/
/*exported TableView*/
var TableView = Backbone.Marionette.CompositeView.extend({
	
	template: '#table-template',
	
	className: 'panel',
	
	itemView: TableRowView,
	
	itemViewContainer: 'tbody.itemViewContainer'

});