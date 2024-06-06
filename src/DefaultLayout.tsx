import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet /> {/* Específica onde o conteúdo deve ficar */}
    </div>
  )
}
