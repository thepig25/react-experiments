/**
 * exported CommentForm
 * @jsx React.DOM
 */
var CommentForm = React.createClass({

    render: function () {

        // FIXME Need a nicer way to conditionally render components. Perhaps just display: none?
        if (this.state.errorText.trim() !== '') {
            var rawMarkup = converter.makeHtml(this.state.errorText);
            return (
                <div className="commentForm">
                    <h2>{this.props.title}</h2>
                    <div className="errors" dangerouslySetInnerHTML={{__html: rawMarkup}}/>
                    <form className="commentForm" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Your name" ref="author" />
                        <input type="text" placeholder="Say something..." ref="text" />
                        <input type="submit" value="Post" />
                    </form>
                </div>
            );
        } else {
            return (
                <div className="commentForm">
                    <h2>{this.props.title}</h2>
                    <form className="commentForm" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Your name" ref="author" />
                        <input type="text" placeholder="Say something..." ref="text" />
                        <input type="submit" value="Post" />
                    </form>
                </div>
            );
        }

    },

    getInitialState: function () {
        return {
            errorText: ''
        };
    },

    /**
     * AJAX style form submission.
     * @returns {boolean} Always false - to block browser form submission.
     */
    handleSubmit: function () {

        console.debug('TODO handleSubmit');

        // TODO Add client-side validation? Or just use Abide?

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

            if (response.success) {

                // Wipe values upon success
                // This is how we hook into the dom? What about just using state?
                this.refs.author.getDOMNode().value = '';
                this.refs.text.getDOMNode().value = '';

                // Q Does this trigger a re-render? No worry, React handles? :)
                this.setState({
                    errorText: ''
                });

            } else {
                this.setState({
                    errorText: response.errors.join('<br/>')
                });
            }

            // TODO Show errors on screen.

        }.bind(this));

        // TODO fail scenario.

        // Prevent default form handler
        return false;
    }

});
