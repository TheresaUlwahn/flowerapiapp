import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { FlowerList } from './pages/FlowerList'
import { FlowerInfo } from './pages/FlowerInfo'
import { FlowerForm } from './pages/FlowerForm'
import { FlowerMessage } from './pages/FlowerMessage'

const url = "https://flowers-mock-data.firebaseio.com.json"
// const url = "hhttps://flowers-mock-data.firebaseio.com/comments/{YOUR GITHUB USERNAME}/{flowerId}.json"

export const App = () => {
  const [flowerMessages, setFlowerMessages] = useState([])
  const [postedMessage, setPostedMessage] = useState("")

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setFlowerMessages(json))
  }, [postedMessage])
    console.log("hello", flowerMessages)

  const handleFormSubmit = message => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => setPostedMessage(message))
      .catch(err => console.log("error:", err))
  }

  const onLiked = (flowerMessageId) => {
    console.log ("Logging in the App.js", flowerMessageId)
    const updatedFlowerMessages = flowerMessages.map(flowerMessage => {
      if (flowerMessage._id === flowerMessageId) {
        flowerMessage.hearts += 1
      }
      return flowerMessage
    })
    setFlowerMessages(updatedFlowerMessages)
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
          {flowerMessages.map(flowerMessage => (
            <FlowerMessage key={flowerMessage._id} flowerMessage={flowerMessage} onLiked={onLiked} />  
          ))}
        </Route>
      </Switch>
    </BrowserRouter>
    )
  }
