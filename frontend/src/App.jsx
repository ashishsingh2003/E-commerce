import { useState } from 'react'

import './App.css'
import Home from './Component/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Dash from './Component/Dash'
import Addprod from './Component/Addprod'
import Edit from './Component/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Routes>
        <Route path="/dash/:user/:id/:role" element={<Dash/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/addprod/:id" element={<Addprod/>}></Route>
        <Route path="/edit/:id" element={<Edit/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default App
