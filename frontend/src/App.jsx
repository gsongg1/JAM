
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header></Header>
        <h1 className="text-3xl font-bold underline text-red-600">Hello World </h1>
    </div>
  )
}

export default App
