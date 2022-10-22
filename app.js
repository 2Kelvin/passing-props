export default function App() {
    return React.createElement(
        "div",
        { className: "app" },
        React.createElement(
            "h1",
            null,
            "Hello Props"
        )
    );
}

// react connection
var rootNode = document.getElementById('reactRoot');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));

// NOTES
// React components use props to communicate with each other
// Every parent component can pass some information to its child components by giving them props
// you can pass any JS value thro props: object, array, function...
// props => 'information that you pass to a JSX tag'
// props examples => className, src, alt, width, height (for <img/>)....
// the above props fir the <img/> are predefined
// but you can pass custom props to your own custom components