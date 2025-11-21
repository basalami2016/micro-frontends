import { useState } from 'react'

interface License {
  id: number
  name: string
  spdxId: string
  type: string
  status: 'pending' | 'approved' | 'rejected'
  submittedDate: string
  submitter: string
}

const mockLicenses: License[] = [
  { id: 1, name: 'MIT License', spdxId: 'MIT', type: 'Permissive', status: 'pending', submittedDate: '2025-11-20', submitter: 'John Doe' },
  { id: 2, name: 'Apache License 2.0', spdxId: 'Apache-2.0', type: 'Permissive', status: 'pending', submittedDate: '2025-11-19', submitter: 'Jane Smith' },
  { id: 3, name: 'GNU GPL v3', spdxId: 'GPL-3.0', type: 'Copyleft', status: 'pending', submittedDate: '2025-11-18', submitter: 'Bob Johnson' },
  { id: 4, name: 'BSD 3-Clause', spdxId: 'BSD-3-Clause', type: 'Permissive', status: 'pending', submittedDate: '2025-11-17', submitter: 'Alice Brown' },
]

export default function PendingReviewPage() {
  const [licenses] = useState<License[]>(mockLicenses)
  const [selectedLicense, setSelectedLicense] = useState<License | null>(null)
  const [filterType, setFilterType] = useState<string>('all')

  const filteredLicenses = filterType === 'all' 
    ? licenses 
    : licenses.filter(l => l.type.toLowerCase() === filterType)

  return (
    <div className="oss-page">
      <div className="page-header">
        <h2>⏳ Pending Review</h2>
        <p className="page-description">
          View and manage licenses awaiting review
        </p>
      </div>

      <div className="pending-stats">
        <div className="stat-badge">
          <span className="stat-number">{licenses.length}</span>
          <span className="stat-label">Total Pending</span>
        </div>
        <div className="stat-badge">
          <span className="stat-number">{licenses.filter(l => l.type === 'Permissive').length}</span>
          <span className="stat-label">Permissive</span>
        </div>
        <div className="stat-badge">
          <span className="stat-number">{licenses.filter(l => l.type === 'Copyleft').length}</span>
          <span className="stat-label">Copyleft</span>
        </div>
        <div className="stat-badge">
          <span className="stat-number">{licenses.filter(l => new Date(l.submittedDate) > new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)).length}</span>
          <span className="stat-label">Last 48h</span>
        </div>
      </div>

      <div className="filter-bar">
        <label htmlFor="typeFilter">Filter by Type:</label>
        <select 
          id="typeFilter"
          className="form-control filter-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="permissive">Permissive</option>
          <option value="copyleft">Copyleft</option>
          <option value="weak-copyleft">Weak Copyleft</option>
          <option value="public-domain">Public Domain</option>
        </select>
      </div>

      <div className="pending-container">
        <div className="licenses-grid">
          {filteredLicenses.map(license => (
            <div 
              key={license.id} 
              className={`license-card ${selectedLicense?.id === license.id ? 'selected' : ''}`}
              onClick={() => setSelectedLicense(license)}
            >
              <div className="license-card-header">
                <h3>{license.name}</h3>
                <span className="license-badge">{license.type}</span>
              </div>
              <div className="license-card-body">
                <div className="license-info-row">
                  <span className="info-label">SPDX ID:</span>
                  <span className="info-value">{license.spdxId}</span>
                </div>
                <div className="license-info-row">
                  <span className="info-label">Submitter:</span>
                  <span className="info-value">{license.submitter}</span>
                </div>
                <div className="license-info-row">
                  <span className="info-label">Date:</span>
                  <span className="info-value">{new Date(license.submittedDate).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="license-card-footer">
                <span className="status-badge status-pending">⏳ Pending</span>
              </div>
            </div>
          ))}
        </div>

        {selectedLicense && (
          <aside className="license-details">
            <h3>License Details</h3>
            <div className="detail-section">
              <h4>{selectedLicense.name}</h4>
              <div className="detail-row">
                <span className="detail-label">SPDX Identifier:</span>
                <span className="detail-value">{selectedLicense.spdxId}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Type:</span>
                <span className="detail-value">{selectedLicense.type}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Status:</span>
                <span className="detail-value">
                  <span className="status-badge status-pending">Pending Review</span>
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Submitted:</span>
                <span className="detail-value">{new Date(selectedLicense.submittedDate).toLocaleDateString()}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Submitter:</span>
                <span className="detail-value">{selectedLicense.submitter}</span>
              </div>
            </div>

            <div className="detail-actions">
              <button className="btn btn-primary">Start Review</button>
              <button className="btn btn-secondary">View Full Details</button>
            </div>

            <div className="timeline">
              <h4>Timeline</h4>
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <div className="timeline-content">
                  <strong>Submitted</strong>
                  <span>{new Date(selectedLicense.submittedDate).toLocaleString()}</span>
                </div>
              </div>
              <div className="timeline-item pending">
                <span className="timeline-dot"></span>
                <div className="timeline-content">
                  <strong>Awaiting Review</strong>
                  <span>Current status</span>
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}
