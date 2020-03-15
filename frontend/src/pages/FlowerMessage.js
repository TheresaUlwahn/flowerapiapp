import React from "react"
import moment from "moment" // this is to format the date
import './flowermessage.css'

export const FlowerMessage = props => {
  const { message, hearts, createdAt, _id } = props.flowerMessage
  
const handleClick = () => {
  console.log ("clicking!", _id)
  fetch (`https://flowers-mock-data.firebaseio.com.json/like`, {
    method: "POST",
    body: "",
    headers: {"Content-Type": "application/json"}
  }).then(() => props.onLiked(_id))
}

  return (
    <article className='flower-message'>
      <h3>{ message }</h3>
      {/* <h3>({ message })</h3> */}
      {/* <h3>{FlowerMessage}</h3> */}
      {/* <h3>{props.flowerMessage[0]}</h3> */}
      {/* <p>
      <button 
        className='flower-heart' 
        onClick={handleClick}>
          <span role='img' aria-label='Heart' >
            {"❤️ "}
          </span>
      </button>     
        x {hearts}
      </p> */}
      <p>{moment(createdAt).fromNow()}</p>
    </article>
  )
}