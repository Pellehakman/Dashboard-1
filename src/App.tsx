import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

import { Route, Routes } from 'react-router-dom'
import HomePage from './views/Home/HomePage'
import Inbox from './views/Inbox/Inbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
     
    </div>
  )
}

export default App
