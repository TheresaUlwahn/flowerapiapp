import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { FlowerList } from './pages/FlowerList'
import { FlowerInfo } from './pages/FlowerInfo'


export const App = () => {

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
