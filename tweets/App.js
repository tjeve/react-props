// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;

    // console.log(props)

    const allTweets = props.tweets.map(Tweet)

    return <div>{ allTweets }</div>

    return (
        <span>
            <div class="bg-white p-2 m-2 w-50">
                <div class="d-flex align-items-center">
                    <img width="50" src="${tweet.user.profilePic}" />
                    <div class="mt-4 ml-2">
                        <b>${tweet.user.username}</b>
                        ${tweet.user.isVerified ? '<img width="15" src="twitterIcons/check-circle.svg" />' : ''}
                        <p>${tweet.user.handle}</p>
                        
                    </div>
                </div>
                <h3>${tweet.text}</h3>
                <hr />
                <div class="d-flex text-secondary">
                    <img style="opacity: 0.62" src="twitterIcons/message-circle.svg" />
                    <b class="mr-3 ml-1">${tweet.replies}</b>
                    <img style="opacity: 0.62" src="twitterIcons/repeat.svg" />
                    <b class="mr-3 ml-1">${tweet.retweets}</b>
                    <img style="opacity: 0.62" src="twitterIcons/heart.svg" />
                    <b class="mr-3 ml-1">${tweet.likes}</b>
                </div>
            </div>
        </span>
    )
    return (
        <span>
            <div class="bg-white p-2 m-2 w-50">
                <div>userInfo</div>
                <h3>${tweet.text}</h3>
                <hr />
                <div>buttons</div>
            </div>
        </span>
    )
}

// const Tweet = (props) => {
//     console.log(props)
// }

const Tweet = (props) => {
    console.log(props)

    const tweetDiv = 
    <div class="bg-white p-2 m-2 w-50">
        <div class="d-flex align-items-center">
            <img width="50" src={ props.user.profilePic } />
            <div class="mt-4 ml-2">
                <b>{ props.user.username} </b>
                {props.user.isVerified} ? '<img width="15" src="twitterIcons/check-circle.svg" />' : ''
                <p>{ props.user.handle }</p>
                
            </div>
        </div>
        <h3> { props.text } </h3>
        <hr />
        <div>
            {/* <div class="d-flex text-secondary">
                <img style="opacity: 0.62" src="twitterIcons/message-circle.svg" />
                <b class="mr-3 ml-1">{ props.replies }</b>
                <img style="opacity: 0.62" src="twitterIcons/repeat.svg" />
                <b class="mr-3 ml-1">{ props.retweets }</b>
                <img style="opacity: 0.62" src="twitterIcons/heart.svg" />
                <b class="mr-3 ml-1">{ props.likes }</b>
            </div> */}
        </div>
    </div>

    return <div> { tweetDiv }</div>
};  

// user: {
//     handle: "@officialjaden",
//     username: "Jaden Smith",
//     isVerified: true,
//     profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
// },


// CHALLENGE: Write a separate Tweet component for use in the App component

const User = (props) => {
    console.log(props)
    return (
    <div class="d-flex align-items-center">
            <img width="50" src={ props.user.profilePic } />
            <div class="mt-4 ml-2">
                <b>{ props.user.username} </b>
                {props.user.isVerified} ? '<img width="15" src="twitterIcons/check-circle.svg" />' : ''
                <p>{ props.user.handle }</p>
                
            </div>
        </div>
        )
};  

// CHALLENGE: Write a separate User component for use in the Tweet component

const Metrics = () => {
    return null
};  // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly