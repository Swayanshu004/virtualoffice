import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css'
import Navbar from './components/Navbar';
import Workspace from './components/Workspace';
import Meetingroom from './components/Meetingroom';
import Chill from './components/Chill';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='py-20 px-5'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/meeting" element={<Meetingroom />} />
            <Route path="/chill" element={<Chill />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
