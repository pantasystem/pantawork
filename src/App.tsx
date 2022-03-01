import React from 'react'
import { HomePage } from './HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LinksPage } from './LinksPage'
import { ProfilePage } from './ProfilePage'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/links" element={<LinksPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
