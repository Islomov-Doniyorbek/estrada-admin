import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLog from './Admin/Komponents/AdminLog'
import AdminBox from './Admin/Komponents/AdminBox'
import './App.css'
const App = () => {
  return (
    <div className='admin'>
       <Routes>
      <Route path="/" element={<AdminLog />} />
      <Route path="Adminpanel/*" element={<AdminBox />} />
    </Routes>
    </div>
  )
}

export default App

