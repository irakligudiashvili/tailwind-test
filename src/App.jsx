import { useState } from 'react'
import './App.css'
import Header from "./sections/Header"
import Hero from "./sections/Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default App
