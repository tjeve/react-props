// Render the cards using React!
const App = (props) => {
    let { cards } = props;

    console.log("Line 5 -->> App Component props:", props)

    const RandomCards = props.cards.map(Card)

    return (
        <span>{RandomCards}</span>
        )
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = (props) => {
    // console.log("Card component props:", props)

  const url = "cards/" + props.value + props.suit + ".png" 

  console.log(url)
    // return null

    return  <img width="80" src={url}/>
};  