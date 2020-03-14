 
import React, { useState } from "react"
import "./flowerform.css"

export const FlowerForm = props => {
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    props.onFormSubmit(message) // this onFormSubmit comes as a props from App.js
    setMessage("")
  }

  return (
    <form className='flower-form'>
      <h3>Message to ?</h3>
      <textarea
        rows='3'
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <div className='form-footer'>
        <button 
          className='flower-button'
          type='submit'
          onClick={handleSubmit}
          disabled={message.length < 6 || message.length > 140 ? true : false}
        >
          <span role='img' aria-label='Heart' >
            {"🌸"}
          </span>
          Post your flower thought!
          <span role='img' aria-label='Heart' >
            {"🌸"}
          </span>
        </button>
        <p>{message.length} / 140</p>
      </div>
    </form>
  )
}