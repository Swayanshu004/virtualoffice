import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css'
import Navbar from './components/Navbar';
import Workspace from './components/Workspace';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='pt-20 px-5'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workspace" element={<Workspace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
