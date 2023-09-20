import React from 'react'
import Navbar from './components/Navbar'

import { Route, Routes } from 'react-router-dom'
import Countries from './pages/Countries'
import CountryDetail from './pages/CountryDetail'

import 'bootstrap-icons/font/bootstrap-icons.css'

const App = () => {
  return (
    <div className='dark:bg-dark dark:text-white'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Countries />} />
        <Route path='/countries/:id' element={<CountryDetail />} />
      </Routes>
    </div>
  )
}

export default App