function Avatar(_ref) {
    var person = _ref.person,
        size = _ref.size;

    return React.createElement("img", {
        src: person.img_src,
        alt: person._name,
        width: size,
        height: size,
        className: "avatar_img"
    });
}

function FriendsCast() {
    return React.createElement(
        "div",
        { className: "friends_cast" },
        React.createElement(Avatar, {
            person: {
                _name: "Monica Geller",
                img_src: "../images/monica.png"
            },
            size: 150
        }),
        React.createElement(Avatar, {
            person: {
                _name: "Monica Geller",
                img_src: "../images/chandler.png"
            },
            size: 150
        }),
        React.createElement(Avatar, {
            person: {
                _name: "Monica Geller",
                img_src: "../images/ross.png"
            },
            size: 150
        }),
        React.createElement(Avatar, {
            person: {
                _name: "Monica Geller",
                img_src: "../images/rachael.png"
            },
            size: 150
        }),
        React.createElement(Avatar, {
            person: {
                _name: "Monica Geller",
                img_src: "../images/joey.png"
            },
            size: 150
        }),
        React.createElement(Avatar, {
            person: {
                _name: "Monica Geller",
                img_src: "../images/phoebes.png"
            },
            size: 150
        })
    );
}

function ShowName() {
    return React.createElement("img", {
        src: "../images/theme.png",
        alt: "friends",
        className: "show_image"
    });
}

export default function App() {
    return React.createElement(
        "div",
        { className: "app" },
        React.createElement(ShowName, null),
        React.createElement(FriendsCast, null)
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
// the above props for the <img/> are predefined, ReactDOM conforms to HTML standards
// but you can pass any props to your own custom components to customize them
// there are 2 steps to adding props: 
// passing props => from parent to child
// reading props => inside child's ({}) and using them inside it's {}
//  you can make each component display its own unique info by changing the values of the porps passed