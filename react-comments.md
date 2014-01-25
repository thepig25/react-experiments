# React Dev Comments

React homepage and getting started guide were good.

If you use the JSX transformer, you have to serve pages, rather than file://.

Will work nicely within our grunt processes. Can the "jsx" CLI work in a single-run mode? So we can hook it into a grunt watch task?

"React is all about modular, composable components" (redundant words?)

## JSX vs JS

On the fence on this one. I think it will matter more when composing nested components.

But, for example, consider this JSX:

```
/** @jsx React.DOM */
React.renderComponent(
    <HelloWorld/>,
    document.getElementById('container')
);
```

vs this JS:

```
/** @jsx React.DOM */
React.renderComponent(
    HelloWorld(null),
    document.getElementById('container')
);
```

## Integrating with JSHint

```
/**
 * global React
 * exported HelloWorld
 *
 * Note how I have the global statement in this comment block - limitation of JSX compiler.
 *
 * @jsx React.DOM
 * */
 ```

