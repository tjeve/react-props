// Render the name tags using React!
const App = (props) => {
    let { nameTags } = props;
    console.log("Line 4 -->> App component props:", props)

    const AllNametags = props.nameTags.map(NameTag) //maps over NameTag function on line 15

    return (
        <span>{AllNametags}</span> // Return the new object that you created in Line 6
    )
}

// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component
const NameTag = (props) => {
    console.log("NameTag component props:", props)

    const cardProperties ={
        value: props.value,
        suit: props.suit
    }
    
    //The extra styling used on the Circles rendering is not necessary here

    return (
        <div class="nametag mx-auto w-50 text-center border m-1">
                <div class="hello bg-primary text-white p-3 h3">Hello, my name is:</div>
                <div class="name h4 p-5">{ props }</div>
            </div>
    )
};  