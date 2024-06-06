import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { EditPerfil } from './pages/Edit'
import { DefaultLayout } from './DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<EditPerfil />} />
      </Route>
    </Routes>
  )
}
