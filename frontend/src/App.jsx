// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/ui/Navbar'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [resetCount] = useState(0)

  return (
    <>
      <div className='bg-primary text-white dark:bg-white'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />

        </Routes>
      </div>
    </>
  )
}

{/* <Button>Button</Button>
<Button loading>Button</Button>
<Button loading loadingText='Loading...'>Button</Button>
<Button disabled>Button</Button>
<Button disabled loading>Button</Button>
<Button disabled loading loadingText='Loading...'>Button</Button> */}

export default App
