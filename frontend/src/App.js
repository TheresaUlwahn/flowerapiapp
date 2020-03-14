import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { FlowerList } from './pages/FlowerList'
import { FlowerInfo } from './pages/FlowerInfo'
import { FlowerForm } from './pages/FlowerForm'
import { FlowerMessage } from './pages/FlowerMessage'

const url = "http://localhost:8080/"

export const App = () => {
  const [flowers, setFlowers] = useState([])
  // const [postedReflection, setPostedReflection] = useState("")

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setFlowers(json.flowers)
        console.log(flowers)
  })
}, [flowers])

const [messages, setMessages] = useState([])
  const [postedMessage, setPostedMessage] = useState("")

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setMessages(json))
  }, [postedMessage])

  const handleFormSubmit = message => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => setPostedMessage(message))
      .catch(err => console.log("error:", err))
  }

  const onLiked = (messageId) => {
    console.log ("Logging in the App.js", messageId)
    const updatedMessages = messages.map(message => {
      if (message._id === messageId) {
        message.hearts += 1
      }
      return message
    })
    setMessages(updatedMessages)
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <FlowerList />
        </Route>
        <Route path="/flowers/:flowerId">
          <FlowerInfo />
          <FlowerForm className="infoPoster" onFormSubmit={handleFormSubmit} /> 
      {messages.map(message => (
        <FlowerMessage key={message._id} message={message} onLiked={onLiked} />  
      ))}
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
