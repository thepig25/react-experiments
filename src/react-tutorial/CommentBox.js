/**
 * exported CommentBox
 * @jsx React.DOM
 */
var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                <h2>{ this.props.title }</h2>
                <CommentList/>
                <CommentForm/>
            </div>
        );
    }
});
