// Render the rectangle using React!
const App = (props) => {
    let { rectangle } = props;

    // console.log(props)

    const backgroundColor = "background-color"

    const style ={
        margin: "20px",
        width: rectangle.width + "px",
        height: rectangle.height + "px",
        backgroundColor: rectangle.color //this has to be background color, not color. You were rendering a white rectangle before
    }
    console.log(style)
    return (
        <span><div style={ style }></div></span>
    )
}

// This can also be done using Object.keys to grab the information from the reducer (according to Sue). 

// Alternate Version - Render the rectangle using React!
// const App = (props) => {

// }