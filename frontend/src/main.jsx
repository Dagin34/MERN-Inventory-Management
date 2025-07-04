import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/Navbar'
import './index.css'
import '@fontsource/poppins';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='bg-primary text-white dark:bg-white dark:text-primary h-screen font-poppins'>
      {document.documentElement.classList.add('dark')}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  </BrowserRouter>
)
