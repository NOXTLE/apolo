import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Apology from './components/Apology'
import Promises from './components/Promises'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Apology />
      <Promises />
    </div>
  )
}

export default App
