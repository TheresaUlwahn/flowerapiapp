import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { FlowerList } from './pages/FlowerList'
import { FlowerInfo } from './pages/FlowerInfo'
import { FlowerForm } from './pages/FlowerForm'
import { FlowerMessage } from './pages/FlowerMessage'

const url = "https://flowers-mock-data.firebaseio.com/comments/TheresaUlwahn"

export const App = () => {
  const [flowerMessages, setFlowerMessages] = useState([])
  //const [postedMessage, setPostedMessage] = useState("")

  /* useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setFlowerMessages(json))
  }, [postedMessage]) */
  //console.log("hello", flowerMessages)

  const handleFormSubmit = (flowerId, message) => {
    console.log('POSTA DET HÄR MEDDELANDET: ', message, 'FÖR BLOMMA: ', flowerId);

    fetch(url + `/${flowerId}/.json`, {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    })
    // .then(() => setPostedMessage(message))
    // .catch(err => console.log("error:", err))
  }

  const onLiked = (flowerMessageId) => {
    console.log("Logging in the App.js", flowerMessageId)
    const updatedFlowerMessages = result.map(flowerMessage => {
      if (flowerMessage[0] === flowerMessageId) {
        flowerMessage.hearts += 1
      }
      return flowerMessage
    })
    setFlowerMessages(updatedFlowerMessages)
  }

  var result = Object.keys(flowerMessages).map(function (key) {
    return [key, flowerMessages[key]];
  });
  console.log(result)
  // console.log(message)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <FlowerList />
        </Route>
        <Route path="/flowers/:flowerId">
          <FlowerInfo />
          <FlowerForm className="infoPoster" onFormSubmit={handleFormSubmit} />
          {result.map(flowerMessage => (
            <FlowerMessage key={flowerMessage[0]} flowerMessage={flowerMessage[1]} onLiked={onLiked} />
          ))}
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
