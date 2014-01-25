# React Dev Comments

## Questions

How does a component dynamically render components? i.e. N Comments in a CommentList component.

## General

React homepage and getting started guide were good.

If you use the JSX transformer, you have to serve pages, rather than file://.

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

## JSHint Integration

Add "React" to your "globals" property in `.jshintrc`.

Not sure yet how JSHint will play with JSX syntactic sugar.

"Unclosed regular expression"
