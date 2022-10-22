export default function App() {
    return (
        <div className="app">
            <h1>Hello Props</h1>
        </div>
    );

}


// react connection
const rootNode = document.getElementById('reactRoot');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);