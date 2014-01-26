# React Dev Comments

## Questions

How does a component dynamically render components? i.e. N Comments in a CommentList component.

## Key choices of React

1) Abandon templates. Underpowered, fail in creating complex UIs. Not a meaningful implemtation of "separation of concerns". Markup and display logic share the same concern, so why separate them? Can use standard programming for rendering UI (i.e. map() and filter()). This was learned from fighting Mustache @ Instagram.

2) Re-render on data change. React makes re-rendering cheap, which simplifies the whole thing for a developer. State is maintained.

3) Lightweight implementation of DOM and events. Faster than real dom, events still work cross-browser, including event bubbling. Means React works in IE8, including some html5 events (which ones?)

React diffs against the real DOM and computes the minimal amount of changes to achieve it (called reconciliation). Key point is React can apply these DOM changes in a single animation frame.

This also means that React can render on the server, without the need for a DOM, in pure node. They're also experimenting with web-workers and React, to push native-like performance on mobile devices.

## General

React homepage and getting started guide were good.

If you use the JSX transformer, you have to serve pages, rather than file:// (CORS).

Will work nicely within our grunt processes. Can the "jsx" CLI work in a single-run mode? So we can hook it into a grunt watch task?

"React is all about modular, composable components" (composable: a key tenet of maintainable frontends).

What about JSHint integration? Going to cause a problem?

"The <div> tags are not actual DOM nodes; they are instantiations of React div components"

"React is safe. We are not generating HTML strings so XSS protection is the default."

Similarities in src/build files can lead to confusion in the IDE - you have to be careful.

`this.props.children` is interesting. How you can drop text|components into your output.

`this.props.children.toString()` - this will be encoded by default, for safety, need raw?

props (immutable) vs state (internal changing data etc)

The key to dynamic updates is this.setState().

render function should only return a single XML object:
```
Error while reading module react-tutorial/CommentForm:
Error: Parse Error: Line 9: Unexpected identifier
```
So therefore all React components are typically wrapped in their own container (good anyway).

There's a Google Chrome extension for React:
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related

## JSX vs JS

http://facebook.github.io/react/docs/jsx-in-depth.html

On the fence on this one. I think it will matter more when composing nested components. When building basic stuff, it seems like more cruft in webapps.

They call JSX -> JX process "transpiling". :)

## JSHint Integration

Add "React" to your "globals" property in `.jshintrc`.

Ignore directive <http://www.jshint.com/docs/>

```
/* jshint ignore:start */
return (
    <div className="comment">
        <div className="comment__author">{ this.props.author }</div>
        <div className="comment__text" dangerouslySetInnerHTML={{__html: rawMarkup}}/>
    </div>
);
/* jshint ignore:end */
```

People also suggest just running JSHint over the transformed JS files, but I find that silly, because I want my IDE to lint in realtime.