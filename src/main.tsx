import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import ChooseCancelourPage from './pages/game/components/ChooseCancelour.tsx'
import ConfirmCandidates from './pages/game/components/ConfirmCandidates/index.tsx'
import NoGamePage from './pages/game/components/NoGamePage.tsx'
import PlayersMove from './pages/game/components/PlayersMove/index.tsx'
import PrePlayersMove from './pages/game/components/PrePlayersMove.tsx'
import RolesPage from './pages/game/components/RolesPage/index.tsx'
import SleepStagePage from './pages/game/components/SleepStagePage.tsx'
import GameLayout from './pages/game/page.tsx'
import NewGamePage from './pages/newgame/index.tsx'
import App from './App.tsx'

import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="newgame" element={<NewGamePage />} />
        <Route path="game" element={<GameLayout />}>
          <Route index element={<NoGamePage />} />
          <Route path="role-revealing" element={<RolesPage />} />
          <Route path="sleep-stage" element={<SleepStagePage />} />
          <Route path="choose-cancelour" element={<ChooseCancelourPage />} />
          <Route path="confirm-candidates" element={<ConfirmCandidates />} />
          <Route
            path="prepresident-move"
            element={<PrePlayersMove role="president" />}
          />
          <Route path="president-move" element={<PlayersMove />} />
          <Route
            path="prechancellor-move"
            element={<PrePlayersMove role="chancellor" />}
          />
          <Route path="chancellor-move" element={<PlayersMove />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
