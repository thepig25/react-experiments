/**
 * @jsx React.DOM
 **/
var App = React.createClass({

    getInitialState: function() {
        return {
            edit: {i: null, key: null}
        };
    },

    editRow: function (row, event) {
        this.state.edit = row;
        this.setState(this.state);
    },

    saveRow: function (event) {
        event.preventDefault();
        var _this = this;
        var i = _this.state.edit.i;
        var key = _this.state.edit.key;
        var row = _this.props.rows[i];
        row[key] = event.target.elements[0].value;

        var xhr2 = $.ajax({
            url: '//localhost:5984/users/' + row._id,
            type: 'PUT',
            data: JSON.stringify(row),
            dataType: 'json'
        });
        xhr2.done(function (data) {
            row._rev = data.rev;
            _this.props.rows[i][key]
            _this.state.edit = {i: null, key: null};
            _this.setState(_this.state);
        });
    },

    render: function () {
        var headings = Object.keys(this.props.rows[0]).filter(function(value) {return value.charAt(0) !== '_'});
        return (
            <table>
                <TableHead
                    headings = {headings}
                />
                <TableRows
                    headings = {headings}
                    rows = {this.props.rows}
                    state = {this.state}
                    editRow = {this.editRow}
                    saveRow = {this.saveRow}
                />
            </table>
        );
    }

});

var TableHead = React.createClass({
    render: function () {
        var listHeadings = this.props.headings.map(function (value) {
            return (<th>{value}</th>);
        }, this);
        return (
            <thead className="controls-btns">
                <tr>{listHeadings}</tr>
            </thead>
        );
    }
});

var TableRows = React.createClass({

    render: function () {
        console.log(this.props.state);
        var listRows = this.props.rows.map(function (row, i) {
            return (
                <tr>
                    {this.props.headings.map(function(key) {
                        var value = this.props.rows[i][key];
                        var edit = this.props.state.edit;
                        var content = (edit.i == i && edit.key == key) ? <form onSubmit={this.props.saveRow}><input defaultValue={value}/></form> : value;
                        return (
                            <td
                                onDoubleClick={this.props.editRow.bind(event, {i: i, key: key})}
                                title="DoubleClick to Edit"
                                >
                                {content}
                            </td>
                        )}, this)
                    }
                </tr>
            )
        }, this);
        return (
            <tbody>
                {listRows}
            </tbody>
        );
    }
});



