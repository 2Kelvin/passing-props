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