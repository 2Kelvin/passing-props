function Avatar({ person, size = 120 }) { //prop 'size' has been assigned a default value
    return (
        <img
            src={person.img_src}
            alt={person._name}
            width={size}
            height="165"
            className="avatar_img"
        />
    );
}

function CardWrap({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

function FriendsCast() {
    return (
        <div className="friends_cast">
            {/* monica */}
            <CardWrap>
                <Avatar
                    person={
                        {
                            _name: "Monica Geller",
                            img_src: "../images/monica.png"
                        }
                    }
                    size={150}
                />
            </CardWrap>
            {/* bing */}
            <CardWrap>
                <Avatar
                    person={
                        {
                            _name: "Chandler Bing",
                            img_src: "../images/chandler.png"
                        }
                    }
                    size={150}
                />
            </CardWrap>
            {/* ross */}
            <CardWrap>
                <Avatar
                    person={
                        {
                            _name: "Ross Geller",
                            img_src: "../images/ross.png"
                        }
                    }
                    size={150}
                />
            </CardWrap>
            {/* rachael */}
            <CardWrap>
                <Avatar
                    person={
                        {
                            _name: "Rachael Green",
                            img_src: "../images/rachael.png"
                        }
                    }
                    size={150}
                />
            </CardWrap>
            {/* joey */}
            <CardWrap>
                <Avatar
                    person={
                        {
                            _name: "Joey Tribbiani",
                            img_src: "../images/joey.png"
                        }
                    }
                    size={150}
                />
            </CardWrap>
            {/* phoebes */}
            <CardWrap>
                <Avatar
                    person={
                        {
                            _name: "Phoebe Buffet",
                            img_src: "../images/phoebes.png"
                        }
                    }
                    size={150}
                />
            </CardWrap>
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
            <CardWrap>
                <p>The Best Comedy Show of All Time</p>
            </CardWrap>
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
// there are 2 steps to adding props: 
    // passing props => from parent to child
    // reading props => inside child's ({}) and using them inside it's {}
//  you can make each component display its own unique info by changing the values of the porps passed
// think of props like “knobs” that you can adjust
// *** they serve the same role as arguments serve for functions
// *** props are the only argument to your component 
//  *** React component functions accept a single argument, a props object
// *** Usually you don’t need the whole props object itself
// *** so you destructure it into individual props
//  for example, in the backscene the above props are seen as 'props.person', 'props.size'
// but using destructuring, we use what we only need, {person}, {size}...together {person, size}
// you can give a prop a default value to fall back on when no value is specified
// prop 'size' above has been assigned a default value
// ...it'll be used when the size prop is not passed on the <Avatar/> component
// if you pass 'size={null}' or 'size={0}' the default value will not be used; the values specified are the ones that'll be passed to size prop
// however, if 'size={undefined}' the default value will be used

// if a parent component passes all the props to a child, you can use use a 'spread syntax' to represent this
// ... e.g. FriendsCast(...props){ <Avatar {...props}/> }
// this is preferred if the parent doesn't use the props directly || & instead the child is the only one using the props
// this method forwards all the parent props to the child without listing all their names exclusively
// this method should be used in restraint/ not all the time...
// if you find yourself using it a lot, it means you should split your code into smaller components

// when you nest a JSX component inside another JSX component, the parent component receives the child component in a prop called 'children'
// eg. <Card> <Avatar/> </Card> ==> the children prop here is set to the <Avatar/> component
// the parent <Card> component is a wrapper 
// the wrapper component unlike other components, has both the opening & closing tag
// these components are used as: visual wrappers, cards, panels, grids...
// you can insert any JSX components inside of them