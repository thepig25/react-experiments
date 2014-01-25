/**
 * exported CommentBox
 * @jsx React.DOM
 */
var CommentBox = React.createClass({

    /**
     * Main React render function.
     * @returns {XML}
     */
    render: function () {
        return (
            <div className="commentBox">
                <h2>{ this.props.title }</h2>
                <CommentList comments={this.state.comments}/>
                <CommentForm target={this.props.target}/>
            </div>
            );
    },

    /**
     * Executes exactly once during the lifecycle of the component
     * @returns {{comments: Array}}
     */
    getInitialState: function () {
        return {
            comments: []
        };
    },

    /**
     * Called by React before the component is rendered.
     * The key to dynamic updates is this.setState().
     */
    componentWillMount: function () {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, (this.props.pollInterval || 5000));
    },

    /**
     * Helper function to pull comments JSON from server and update state.
     */
    loadCommentsFromServer: function () {

        var xhr = $.ajax({
            cache: false, // ignore server caching headers, for "live" reloads
            url: this.props.source,
            dataType: 'json'
        });

        xhr.done(function (comments) {
            this.setState({
                comments: comments
            });
        }.bind(this));

        xhr.fail(function (xhr, status, err) {
            console.error('CommentBox failed loading source:', this.props.source, 'err:', err.toString());
        }.bind(this));

        // Return the promise for other potential actions.
        return xhr;

    }

});
