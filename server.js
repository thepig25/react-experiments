/*global require, console*/
/**
 * Simple demo server, expressjs
 */

var fs = require('fs');
var express = require('express');
var app = express();

var commentsFilePath = __dirname + '/public/data/comments.json';

// Middleware
app.use(express.bodyParser()); // For form data.

// Very simple endpoint to add comments to the json file we've got.
app.post('/addComment', function(req, res){

    console.log('addComment, body:', req.body);

    // Load current comments file in lieu of a databse.
    // TODO Use something like pouchdb for online/offline sync?
    var comments = JSON.parse(fs.readFileSync(commentsFilePath));

    // TODO Real validation system.
    if (req.body.author === void 0 || req.body.author.trim() === '') {
        res.send({
            success: false,
            fieldErrors: {
                author: 'author is required'
            }
        });
    }
    if (req.body.text === void 0 || req.body.text.trim() === '') {
        res.send({
            success: false,
            fieldErrors: {
                text: 'text is required'
            }
        });
    }

    // Append
    comments.push(req.body);

    // Write back to disk
    fs.writeFile(commentsFilePath, JSON.stringify(comments, null, 4), function (err) {
        if (err) {
            // Basic response payload to let the frontend know it worked.
            res.send({
                success: false,
                globalErrors: err
            });
        } else {
            // Basic response payload to let the frontend know it worked.
            res.send({
                success: true,
                message: 'Comment added successfully!'
            });
        }
    });

});

// Default folder is the public sub-folder.
app.use(express.static(__dirname + '/public'));

app.listen(3000);

console.log('Listening on port 3000');
