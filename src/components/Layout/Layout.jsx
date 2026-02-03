import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import LeftRail from './LeftRail'
import RightRail from './RightRail'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="layout-body">
        <LeftRail />
        <main className="main-content">
          <Outlet />
        </main>
        <RightRail />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
