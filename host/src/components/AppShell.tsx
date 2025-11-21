import { Link, NavLink } from 'react-router-dom'
import './AppShell.css'

interface AppShellProps {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-content">
          <Link to="/" className="logo-link">
            <h1>🏠 Host Application</h1>
          </Link>
          <nav className="header-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/analytics">Analytics</NavLink>
            <NavLink to="/reports">Reports</NavLink>
            <NavLink to="/sscs">SSCS</NavLink>
            <NavLink to="/oss-license">OSS License</NavLink>
          </nav>
        </div>
      </header>

      <aside className="left-aside">
        <h3>Navigation</h3>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink to="/">
                <span className="nav-icon">📊</span>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/analytics">
                <span className="nav-icon">📈</span>
                Analytics
              </NavLink>
            </li>
            <li>
              <NavLink to="/reports">
                <span className="nav-icon">📋</span>
                Reports
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings">
                <span className="nav-icon">⚙️</span>
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink to="/sscs">
                <span className="nav-icon">🛡️</span>
                SSCS
              </NavLink>
            </li>
            <li>
              <NavLink to="/oss-license">
                <span className="nav-icon">📜</span>
                OSS License
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        {children}
      </main>

      <aside className="right-aside">
        <h3>Quick Info</h3>
        <div className="widget">
          <h4>Quick Stats</h4>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-label">Users</span>
              <span className="stat-value">1,234</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Active</span>
              <span className="stat-value">89</span>
            </div>
          </div>
        </div>
        <div className="widget">
          <h4>Notifications</h4>
          <ul className="notification-list">
            <li>New update available</li>
            <li>System maintenance at 2 AM</li>
            <li>3 new messages</li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
