import React from "react"
import moment from "moment" // this is to format the date
import './flowermessage.css'

export const FlowerMessage = props => {
  const { message, hearts, createdAt, _id } = props.thought
  
const handleClick = () => {
  console.log ("clicking!", _id)
  fetch (`https:/localhost:8080/${_id}/like`, {
    method: "POST",
    body: "",
    headers: {"Content-Type": "application/json"}
  }).then(() => props.onLiked(_id))
}

  return (
    <article className='flower-message'>
      <h3>{message}</h3>
      <p>
      <button 
        className='flower-heart' 
        onClick={handleClick}>
          <span role='img' aria-label='Heart' >
            {"❤️ "}
          </span>
        
      </button>     
        x {hearts}
      </p>
      <p>{moment(createdAt).fromNow()}</p>
    </article>
  )
}