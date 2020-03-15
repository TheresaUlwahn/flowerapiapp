 
import React, { useState } from "react"
import "./flowerform.css"

export const FlowerForm = props => {
  const [flowerMessage, setFlowerMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    props.onFormSubmit(flowerMessage) // this onFormSubmit comes as a props from App.js
    setFlowerMessage("")
  }

  return (
    <form className='flower-form'>
      <h3>Message to ?</h3>
      <textarea
        rows='3'
        onChange={event => setFlowerMessage(event.target.value)}
      ></textarea>
      <div className='form-footer'>
        <button 
          className='flower-button'
          type='submit'
          onClick={handleSubmit}
          disabled={flowerMessage.length < 6 || flowerMessage.length > 140 ? true : false}
        >
          <span role='img' aria-label='Heart' >
            {"🌸"}
          </span>
          Post your flower thought!
          <span role='img' aria-label='Heart' >
            {"🌸"}
          </span>
        </button>
        <p>{flowerMessage.length} / 140</p>
      </div>
    </form>
  )
}