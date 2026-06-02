import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import HomePage from './pages/HomePage'
import MembershipsPage from './pages/MembershipsPage'
import CoachesPage from './pages/CoachesPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="pricing" element={<MembershipsPage />} />
        <Route path="memberships" element={<Navigate to="/pricing" replace />} />
        <Route path="coaches" element={<CoachesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App