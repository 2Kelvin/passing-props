const person = {
    _name: "Joey Tribbiani",
    img_src: ""
};

function Avatar({ person, size }) {
    return (
        <img
            className="avatar_img"
            src={person.img_src}
            alt={person._name}
            width={size}
            height={size}
        />
    );
}

function FriendsCast() {
    return (
        <div className="friends_cast">
            <Avatar
                person={{
                    _name: "Monica Geller",
                    img_src: ""
                }}
                size={120}
            />
        </div>
    );
}

function ShowName() {
    return (
        <img
            src="../images/theme.png"
            alt="friends"
            className="show_image"
        />
    );
}

export default function App() {
    return (
        <div className="app">
            <ShowName />
            <FriendsCast />
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
// the above props for the <img/> are predefined, ReactDOM conforms to HTML standards
// but you can pass any props to your own custom components to customize them