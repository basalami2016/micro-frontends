import '../App.css'

export default function Reports() {
  return (
    <div className="App">
      <h2>📋 Reports</h2>
      <p className="intro-text">
        Generate and view comprehensive reports for your application.
      </p>

      <div className="card">
        <h3>Report Generator</h3>
        <div className="report-form">
          <div className="form-group">
            <label>Report Type</label>
            <select className="form-control">
              <option>Monthly Summary</option>
              <option>Quarterly Review</option>
              <option>Annual Report</option>
              <option>Custom Report</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date Range</label>
            <div className="date-range">
              <input type="date" className="form-control" defaultValue="2025-10-01" />
              <span>to</span>
              <input type="date" className="form-control" defaultValue="2025-11-21" />
            </div>
          </div>
          <button className="btn btn-primary">Generate Report</button>
        </div>
      </div>

      <div className="card">
        <h3>Recent Reports</h3>
        <div className="reports-list">
          <div className="report-item">
            <div className="report-info">
              <h4>Monthly Report - October 2025</h4>
              <p>Generated on Nov 1, 2025</p>
            </div>
            <div className="report-actions">
              <button className="btn btn-sm">📥 Download</button>
              <button className="btn btn-sm">👁️ View</button>
            </div>
          </div>
          <div className="report-item">
            <div className="report-info">
              <h4>Quarterly Review - Q3 2025</h4>
              <p>Generated on Oct 1, 2025</p>
            </div>
            <div className="report-actions">
              <button className="btn btn-sm">📥 Download</button>
              <button className="btn btn-sm">👁️ View</button>
            </div>
          </div>
          <div className="report-item">
            <div className="report-info">
              <h4>Custom Report - User Growth</h4>
              <p>Generated on Sep 15, 2025</p>
            </div>
            <div className="report-actions">
              <button className="btn btn-sm">📥 Download</button>
              <button className="btn btn-sm">👁️ View</button>
            </div>
          </div>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h4>Data Export</h4>
          <p>Export your data in CSV, Excel, or PDF format</p>
          <button className="btn btn-secondary">Export Data</button>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📧</div>
          <h4>Scheduled Reports</h4>
          <p>Automatically send reports to your email</p>
          <button className="btn btn-secondary">Schedule</button>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔗</div>
          <h4>Share Reports</h4>
          <p>Create shareable links for your reports</p>
          <button className="btn btn-secondary">Create Link</button>
        </div>
      </div>
    </div>
  )
}
