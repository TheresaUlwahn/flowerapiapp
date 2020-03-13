import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { FlowerList } from "./pages/FlowerList"
import { FlowerInfo } from "./pages/FlowerInfo"

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
 
  // const handleFormSubmit = message => {
  //   fetch(url, {
  //     method: "POST",
  //     //Theresa changed from reflection to message down below and took away checkbox
  //     body: JSON.stringify({ message }),
  //     headers: { "Content-Type": "application/json" }
  //   })
  //   //Theresa changed from reflection to message down below
  //     .then(() => setPostedReflection(message))
  //     .catch(err => console.log("error:", err))
  // }

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
