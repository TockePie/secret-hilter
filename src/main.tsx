import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import GamePage from './pages/game/page.tsx'
import NewGamePage from './pages/newgame/index.tsx'
import App from './App.tsx'

import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="newgame" element={<NewGamePage />} />
        <Route path="game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
