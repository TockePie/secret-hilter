import { Route, Routes, useLocation } from 'react-router'

import ChaosPage from './pages/game/components/Chaos.tsx'
import ChooseCancelourPage from './pages/game/components/ChooseChancellor'
import ConfirmCandidates from './pages/game/components/ConfirmCandidates'
import NoGamePage from './pages/game/components/NoGamePage.tsx'
import PlayersMove from './pages/game/components/PlayersMove'
import PrePlayersMove from './pages/game/components/PrePlayersMove.tsx'
import ResultsPage from './pages/game/components/ResultsPage'
import RolesPage from './pages/game/components/RolesPage'
import SleepStagePage from './pages/game/components/SleepStagePage'
import GameLayout from './pages/game/page.tsx'
import NewGamePage from './pages/newgame'
import App from './App.tsx'

export default function RouteTree() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route index element={<App />} />
      <Route path="newgame" element={<NewGamePage />} />
      <Route path="game" element={<GameLayout />} errorElement={<NoGamePage />}>
        <Route path="role-revealing" element={<RolesPage />} />
        <Route path="sleep-stage" element={<SleepStagePage />} />
        <Route path="choose-cancelour" element={<ChooseCancelourPage />} />
        <Route path="confirm-candidates" element={<ConfirmCandidates />} />
        <Route path="chaos" element={<ChaosPage />} />
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
        <Route path="results" element={<ResultsPage />} />
      </Route>
    </Routes>
  )
}
