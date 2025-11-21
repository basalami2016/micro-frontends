import '../App.css'

export default function Analytics() {
  return (
    <div className="App">
      <h2>📈 Analytics</h2>
      <p className="intro-text">
        Deep dive into your application metrics, user behavior, and performance trends.
      </p>

      <div className="card">
        <h3>Traffic Overview</h3>
        <div className="chart-placeholder">
          <div className="chart-bars">
            <div className="bar" style={{ height: '60%' }}>
              <span className="bar-label">Mon</span>
            </div>
            <div className="bar" style={{ height: '75%' }}>
              <span className="bar-label">Tue</span>
            </div>
            <div className="bar" style={{ height: '45%' }}>
              <span className="bar-label">Wed</span>
            </div>
            <div className="bar" style={{ height: '90%' }}>
              <span className="bar-label">Thu</span>
            </div>
            <div className="bar" style={{ height: '70%' }}>
              <span className="bar-label">Fri</span>
            </div>
            <div className="bar" style={{ height: '55%' }}>
              <span className="bar-label">Sat</span>
            </div>
            <div className="bar" style={{ height: '40%' }}>
              <span className="bar-label">Sun</span>
            </div>
          </div>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h4>Page Views</h4>
          <p className="metric-value">45,678</p>
          <p className="metric-change positive">+12.5% from last week</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">👤</div>
          <h4>Unique Visitors</h4>
          <p className="metric-value">12,345</p>
          <p className="metric-change positive">+8.3% from last week</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⏱️</div>
          <h4>Avg. Session</h4>
          <p className="metric-value">4m 32s</p>
          <p className="metric-change negative">-2.1% from last week</p>
        </div>
      </div>

      <div className="card">
        <h3>Top Pages</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Page</th>
              <th>Views</th>
              <th>Bounce Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/dashboard</td>
              <td>15,234</td>
              <td>32%</td>
            </tr>
            <tr>
              <td>/analytics</td>
              <td>8,901</td>
              <td>28%</td>
            </tr>
            <tr>
              <td>/reports</td>
              <td>6,543</td>
              <td>35%</td>
            </tr>
            <tr>
              <td>/settings</td>
              <td>3,210</td>
              <td>42%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
