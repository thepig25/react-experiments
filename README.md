# React Experiments

## Goals

* Learn how to use React, Facebook's "new" view/rendering framework.
* Learn how to integrate Backbone with React, essentially replacing Backbone.View with React.
* Render a large table with Backbone + React, adding in some behaviours (TBC).

## Requirements

* node/npm
* git

## Installation and running these experiments

From your terminal/git bash console:

```sh
git clone git@github.com:ScottMaclure/react-experiments.git
cd react-experiments
npm install
npm start
```

And fire up <http://localhost:3000>

The index.html page has links to each experiment.

## Offline JSX compiling

All of the experiments use JSX, if making changes, you need to compile `src/` into `public/build/`.

You can use React's jsx program in watch mode:

```sh
node ./node_modules/react-tools/bin/jsx --watch src/ public/build/
```

## React Developer Tools for Google Chrome

Useful for debugging:

<https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related>

## Generating mock json data

Type this into your console and smoke it:

```
var comments = [];
var authorName = 'Roy Baty v';
var authorText = 'This is comment #';
for (var i = 0; i < 500; i++) {
	comments.push({
		author: authorName + i,
		text: authorText + i
    });
}
JSON.stringify(comments, null, 4);
```

# TODO

## general

* Find a nice solution for JSHint + JSX (https://github.com/CondeNast/JSXHint?) (dangerouslySetInnerHTML={{__html: rawMarkup}})
* Add Foundation v5 or Twitter bootstrap to the project, get things looking pretty. JS integration?
* Go through our components, and make use of propTypes (http://facebook.github.io/react/docs/component-specs.html)

## react-tutorial

* Consider Websocket for comment updates - socket.io mixin? - github.com/Enome/react.io
* Consider a FormErrors component, for nice display of error messages (Foundation Abide?)
* Consider pouchdb or simliar, for offline storage of comments.
* Add a date field to comments, perhaps invert render order

## react-table

* Code review on ReactTabe.js
* Add "delete row" support