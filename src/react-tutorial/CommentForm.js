/**
 * exported CommentForm
 * @jsx React.DOM
 */
var CommentForm = React.createClass({

    render: function () {
        return (
            <div className="commentForm">
                <h2>Have your say...</h2>
                <form className="commentForm" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Your name" ref="author" />
                    <input type="text" placeholder="Say something..." ref="text" />
                    <input type="submit" value="Post" />
                </form>
            </div>
        );
    },

    /**
     * AJAX style form submission.
     * @returns {boolean} Always false - to block browser form submission.
     */
    handleSubmit: function () {

        console.debug('TODO handleSubmit');

        var xhr = $.ajax({
            type: 'POST',
            url: this.props.target,
            data: {
                author: this.refs.author.getDOMNode().value.trim(),
                text: this.refs.text.getDOMNode().value.trim()
            },
            dataType: 'json'
        });

        xhr.done(function (response) {

            console.debug('handleSubmit response:', response);

            // Wipe values upon success
            // This is how we hook into the dom? What about just using state?
            this.refs.author.getDOMNode().value = '';
            this.refs.text.getDOMNode().value = '';

        }.bind(this));

        // TODO fail scenario.

        // Prevent default form handler
        return false;
    }

});
