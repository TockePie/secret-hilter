import { Route, Routes, useLocation } from 'react-router'

import ChaosPage from './pages/game/components/Chaos.tsx'
import ChooseCancelourPage from './pages/game/components/ChooseChancellor.tsx'
import ConfirmCandidates from './pages/game/components/ConfirmCandidates'
import Execution from './pages/game/components/Execution'
import InvestigateLoyalty from './pages/game/components/InvestigateLoyalty'
import NoGamePage from './pages/game/components/NoGamePage.tsx'
import PlayersMove from './pages/game/components/PlayersMove.tsx'
import PolicyPeek from './pages/game/components/PolicyPeek.tsx'
import PrePlayersMove from './pages/game/components/PrePlayersMove.tsx'
import ResultsPage from './pages/game/components/ResultsPage'
import RolesPage from './pages/game/components/RolesPage'
import SleepStagePage from './pages/game/components/SleepStagePage.tsx'
import SpecialElection from './pages/game/components/SpecialElection.tsx'
import Victory from './pages/game/components/Victory.tsx'
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
        <Route path="investigate-loyalty" element={<InvestigateLoyalty />} />
        <Route path="policy-peek" element={<PolicyPeek />} />
        <Route path="special-election" element={<SpecialElection />} />
        <Route path="execution" element={<Execution />} />
        <Route path="victory" element={<Victory />} />
      </Route>
    </Routes>
  )
}
