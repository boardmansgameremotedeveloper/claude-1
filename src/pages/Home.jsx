import { useAuth } from '../context/AuthContext'

function Home() {
  const { user, isAuthenticated } = useAuth()

  return (
    <div className="page home-page" style={{ background: 'linear-gradient(to bottom, #DDA0DD, #FFFDD0)', minHeight: '100vh' }}>
      <h1>Welcome to React Starter</h1>
      <p>This is a modern React starter framework with authentication, routing, and a responsive layout.</p>

      {isAuthenticated ? (
        <div style={{ marginTop: '20px', padding: '15px', background: '#e8f5e9', borderRadius: '8px' }}>
          <p>You are logged in as <strong>{user.name}</strong> ({user.role})</p>
        </div>
      ) : (
        <div style={{ marginTop: '20px', padding: '15px', background: '#fff3e0', borderRadius: '8px' }}>
          <p>You are not logged in. <a href="/login">Login</a> to access more features.</p>
        </div>
      )}

      <h2 style={{ marginTop: '30px' }}>Features</h2>
      <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
        <li>React 18 with Vite for fast development</li>
        <li>React Router v6 for client-side routing</li>
        <li>Context API for state management</li>
        <li>Mock authentication system</li>
        <li>Responsive layout with header, footer, and sidebars</li>
        <li>Ad integration ready</li>
      </ul>
    </div>
  )
}

export default Home
