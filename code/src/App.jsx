import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-exo-2">
      <Navbar />
      <Home />
      <Sidebar />
    </div>
  )
}

export default App
