const person = {
    _name: "Joey Tribbiani",
    img_src: ""
};

function Avatar({ person, size }) {
    return (
        <Img
            className="avatar_img"
            src={person.img_src}
            alt={person._name}
            width={size}
            height={size}
        />
    );
}

export default function App() {
    return (
        <div className="app">
            <h1>Hello Props</h1>
            <h3>F.R.I.E.N.D.S</h3>
            <>
                <Avatar
                    person={{
                        _name: "Monica Geller",
                        img_src: ""
                    }}
                    size={120}
                />
            </>
        </div>
    );

}


// react connection
const rootNode = document.getElementById('reactRoot');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

// NOTES
// React components use props to communicate with each other
// Every parent component can pass some information to its child components by giving them props
// you can pass any JS value thro props: object, array, function...
// props => 'information that you pass to a JSX tag'
// props examples => className, src, alt, width, height (for <img/>)....
// the above props fir the <img/> are predefined
// but you can pass custom props to your own custom components