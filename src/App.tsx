import { useState } from 'react'
import './App.css'
import Navbar from './components/navBar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
       <Home />
       <Footer />
    </>


  )
}

export default App
