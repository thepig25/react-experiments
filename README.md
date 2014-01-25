# React Experiments

## Goals

* Learn how to use React, Facebook's "new" view/rendering framework.
* Learn how to integrate Backbone with React, essentially replacing Backbone.View with React.
* Render a large table with Backbone + React, adding in some behaviours (TBC).

## Requirements

* node/npm
* git

## Installation and running these experiments

Clone the repo to your machine, then:

```sh
git clone git@github.com:ScottMaclure/react-experiments.git
cd react-experiments
npm install
npm start
```

http://localhost:3000

The index page has links to each experiment.

## Offline JSX compiling

All of the experiments use JSX, if making changes, you need to compile `src/` into `public/build/`.

You can use React's jsx program in watch mode:

```sh
node ./node_modules/react-tools/bin/jsx --watch src/ public/build/
```

# TODO

## react-tutorial

* Consider a FormErrors component, for nice display of error messages.
* Consider pouchdb or simliar, for offline storage of comments.

