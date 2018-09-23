import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Route to="/" component={Home} />
    </BrowserRouter>
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'))
