import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import AdBox from '../AdBox/AdBox'

function Header() {
  const { user, loading, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">React Starter</div>

        <div className="header-ad">
          <AdBox
            scriptContent='<ins data-revive-zoneid="8" data-revive-id="dd1b8f3615a0b13e4a9251d246a75a9f"></ins>'
            placeholder="320x50"
          />
        </div>

        <nav className="header-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </nav>

        <div className="header-auth">
          {loading ? (
            <span className="loading-spinner"></span>
          ) : isAuthenticated ? (
            <>
              <span className="header-user">Welcome, {user.name}</span>
              <button className="header-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login">
              <button className="header-btn">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
