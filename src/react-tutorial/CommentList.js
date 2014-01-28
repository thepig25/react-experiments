/**
 * exported CommentList
 * @jsx React.DOM
 */
var CommentList = React.createClass({

	render: function () {

		var commentNodes = this.props.comments.map(function (comment) {
			/* jshint ignore:start */
			return <Comment author={comment.author}>{comment.text}</Comment>;
			/* jshint ignore:end */
		});

		/* jshint ignore:start */
		return (
			<div className="commentList">
			<h2>{ this.props.title }</h2>
			{commentNodes}
			</div>
		);
		/* jshint ignore:end */

	}

});
