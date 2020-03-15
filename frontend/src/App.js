import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { FlowerList } from './pages/FlowerList'
import { FlowerInfo } from './pages/FlowerInfo'
/* import { FlowerForm } from './pages/FlowerForm'
import { FlowerMessage } from './pages/FlowerMessage' */

export const App = () => {
  // const [flowerMessages, setFlowerMessages] = useState([])
  //const [postedMessage, setPostedMessage] = useState("")

  /* useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setFlowerMessages(json))
  }, [postedMessage]) */
  //console.log("hello", flowerMessages)

  // console.log(message)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <FlowerList />
        </Route>
        <Route path="/flowers/:flowerId">
          <FlowerInfo />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
