/**
 * @jsx React.DOM
 **/
var App = React.createClass({

    getInitialState: function() {
        var start = this.props.currentpage - 1;
        var end = start + this.props.perPage;
        var rows = this.props.rows.slice(start, end);
        return {
            edit: {i: null, key: null},
            data: {rows: rows},
            currentpage: this.props.currentpage,
        };
    },

    editRow: function (row, event) {
        this.state.edit = row;
        this.setState(this.state);
    },

    saveRow: function (event) {
        // TODO: should rely only on ID here
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
            //_this.props.rows[i][key];
            _this.state.edit = {i: null, key: null};
            _this.setState(_this.state);
        });
    },

    unique: function (key, event) {
        this.state.data.rows = _.uniq(this.state.data.rows, key);
        this.setState(this.state);
    },

    inlineSearch: function (event) {
        event.preventDefault();
        var query = $(event.target).serializeArray()[0];
        var key = query.name;
        var foundRows = _.filter(this.state.data.rows, function(row) {
            // TODO: implement case insensitive search
            var value = row[key].toLowerCase();
            var substring = query.value.toLowerCase();
            return value.search(substring) != -1;
        });
        if (foundRows.length > 0) {
            this.state.data.rows = foundRows;
        }
        this.setState(this.state);
    },

    jumpToPage: function (page, event) {
        console.log('jumpToPage');
        console.log(page);
        var start = this.props.perPage * (page - 1);
        var end = start + this.props.perPage;
        var rows = this.props.rows.slice(start, end);
        this.state.currentpage = page;
        this.state.data.rows = rows;
        this.setState(this.state);
    },

    render: function () {
        var headings = Object.keys(this.state.data.rows[0]).filter(function(value) {return value.charAt(0) !== '_'});
        return (
            <div>
                <table>
                    <TableHead
                        headings = {headings}
                        unique = {this.unique}
                        inlineSearch = {this.inlineSearch}
                    />
                    <TableRows
                        headings = {headings}
                        rows = {this.state.data.rows}
                        state = {this.state}
                        perPage = {this.props.perPage}
                        editRow = {this.editRow}
                        saveRow = {this.saveRow}
                    />
                </table>
                <Pagination
                    state = {this.state}
                    rows = {this.props.rows}
                    perPage = {this.props.perPage}
                    jumpToPage = {this.jumpToPage}
                />
            </div>
        );
    }

});

var TableHead = React.createClass({
    render: function () {
        var listHeadings = this.props.headings.map(function (value) {
            return (
                <th>
                    {value}
                    <a href="#" onClick={this.props.unique.bind(event, value)}>[u]</a>
                </th>
                );
        }, this);
        var listSearchBoxes = this.props.headings.map(function (value) {
            return (
                <td>
                    <form onSubmit={this.props.inlineSearch}><input name={value} /></form>
                </td>
                );
        }, this);
        return (
            <thead className="controls-btns">
                <tr>
                    <th></th>
                    {listHeadings}
                </tr>
                <tr>
                    <td></td>
                    {listSearchBoxes}
                </tr>
            </thead>
        );
    }
});

var TableRows = React.createClass({

    render: function () {
        var listRows = this.props.state.data.rows.map(function (row, i) {
            return (
                <tr>
                    <td>{i+1}</td>
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



var Pagination = React.createClass({

    render: function () {
        console.log('Pagination');
        console.log(this.props.state);
        var currentpage = this.props.state.currentpage;
        var totalPages = Math.ceil(this.props.rows.length/this.props.perPage);

        var prev = currentpage > 1 ? <button onClick={this.props.jumpToPage.bind(event, currentpage-1)}>Prev</button> : '';
        var next = currentpage < totalPages ? <button onClick={this.props.jumpToPage.bind(event, currentpage+1)}>Next</button> : '';
        return (
            <div>
                {prev}
                {next}
                <div>
                    Page {this.props.state.currentpage} from {totalPages}
                </div>
            </div>
        );
    }
});



