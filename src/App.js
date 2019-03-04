import React, { Component } from 'react'
import 'normalize.css'
import './App.scss'
import Simon from './Simon'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Simon/>
      </div>
    )
  }
}

export default App
