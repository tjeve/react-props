// Render the name tags using React!
const App = (props) => {
    let { nameTags } = props;
    console.log("Line 4 -->> App component props:", props)

    const AllNametags = props.nameTags.map(NameTag) //maps over NameTag function on line 15

    return (
        <span>name tags</span>
    )
}

// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component
const NameTag = (props) => {
    console.log("NameTag component props:", props)

    const name = {
        name: props.name
    }

    return (
        <div>{name}</div>
    )
    


};  