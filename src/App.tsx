import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Heder'
import { Main } from './components/Main'
import { Timer } from './components/Timer'
import { UserProvider } from './stores/context'

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <UserProvider>
          <Main />
          <Timer />
        </UserProvider>
        <Footer />
      </div>
    </div>
  )
}

export default App
