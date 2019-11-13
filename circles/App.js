// Render the circles using React!
const App = (props) => { //used in Index.js, line 5
    let { circles } = props;
    console.log("App component props:", props)

    const AllCircles = props.circles.map(Circle) //maps over the function in line 13

    return (
        <span>{AllCircles}</span> //returns function from line 6
    )
}

const Circle = (props) => { 
    console.log("Circle Component props:", props)

    const style = {
        background: props.color,
        borderRadius: props.radius,
        width: (props.radius * 2) + 'px',
        height: (props.radius * 2) + 'px'
    }

    return (
    <div style = {style}></div>
    )
}; 


// CHALLENGE: Write a separate Circle component for use in the App component