/**
 * exported CommentList
 * @jsx React.DOM
 */
var CommentList = React.createClass({
    render: function () {

        var commentNodes = this.props.comments.map(function (comment) {
            return <Comment author={comment.author}>{comment.text}</Comment>;
        });

        return (
            <div className="commentList">
                <h2>{ this.props.title }</h2>
                {commentNodes}
            </div>
        );
    }
});
