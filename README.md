# React Experiments

## Goals

* Learn how to use React, Facebook's "new" view/rendering framework.
* Learn how to integrate Backbone with React, essentially replacing Backbone.View with React.
* See how easy it is to render large table with Backbone + React, adding in some behaviours (TBC).

## Offline JSX compiling

All of the experiments use JSX, so you need to compile `src/` into `public/build/`.

```sh
npm install -g react-tools
```

To compile JSX into JS:

```sh
jsx --watch src/ build/
```

## Experiments

* public/hello-world.html - basic, single component use. Makes use of `props`.
* public/react-tutorial - following the react tutorial, on their homepage.
