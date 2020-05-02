import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TopNav from './TopNav/TopNav'
import Home from './Home/Home'
import Page1 from './Page1/Page1'

import './App.css'

export default function App() {
  return (
    <div className="app">
      <TopNav />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
