import '../App.css'

export default function Dashboard() {
  return (
    <div className="App">
      <h2>📊 Dashboard</h2>
      <p className="intro-text">
        Welcome to your dashboard. Monitor your key metrics and performance indicators.
      </p>
      
      <div className="stats-overview">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-info">
            <span className="stat-number">1,234</span>
            <span className="stat-label">Total Users</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-info">
            <span className="stat-number">89%</span>
            <span className="stat-label">Growth</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-info">
            <span className="stat-number">$45.2K</span>
            <span className="stat-label">Revenue</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⚡</div>
          <div className="stat-info">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-time">2 hours ago</span>
            <span className="activity-text">New user registered</span>
          </div>
          <div className="activity-item">
            <span className="activity-time">5 hours ago</span>
            <span className="activity-text">System backup completed</span>
          </div>
          <div className="activity-item">
            <span className="activity-time">1 day ago</span>
            <span className="activity-text">New feature deployed</span>
          </div>
        </div>
      </div>
    </div>
  )
}
