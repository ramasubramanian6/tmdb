import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Error1 from '../src/Pages/Error.jsx'
import WatchList from '../src/Pages/WatchList.jsx'
import HomePage from '../src/Pages/HomePage.jsx'
import NavBar from '../src/Pages/NavBar.jsx'
import Toggle from "../src/Pages/Toggle";


function Routers () {
  return (<>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/watchList" element={<WatchList/>}></Route>
    <Route path ="*" element={<Error1/>}></Route>
  </Routes>
  </>)
  
}

function App() {

  return (
    <div>
        <NavBar/>
        <Routers/>
        
    </div>
  )
}

export default App
