import { useState } from 'react'

interface License {
  id: number
  name: string
  spdxId: string
  type: string
  url: string
  description: string
  osiApproved: boolean
  fsfApproved: boolean
  submitter: string
  submittedDate: string
  reviewStatus: 'in-review' | 'approved' | 'rejected'
}

const mockLicense: License = {
  id: 1,
  name: 'MIT License',
  spdxId: 'MIT',
  type: 'Permissive',
  url: 'https://opensource.org/licenses/MIT',
  description: 'A permissive license that is short and to the point. It lets people do almost anything they want with your project, like making and distributing closed source versions.',
  osiApproved: true,
  fsfApproved: true,
  submitter: 'John Doe',
  submittedDate: '2025-11-20',
  reviewStatus: 'in-review'
}

export default function LicenseReviewPage() {
  const [license] = useState<License>(mockLicense)
  const [reviewNotes, setReviewNotes] = useState('')
  const [compliance, setCompliance] = useState({
    termsComplete: false,
    urlValid: false,
    typeCorrect: false,
    descriptionClear: false,
    legalReviewed: false
  })
  const [decision, setDecision] = useState<'approved' | 'rejected' | null>(null)

  const handleComplianceChange = (field: keyof typeof compliance) => {
    setCompliance(prev => ({ ...prev, [field]: !prev[field] }))
  }

  const allChecked = Object.values(compliance).every(v => v)

  const handleSubmitReview = (status: 'approved' | 'rejected') => {
    setDecision(status)
    console.log('Review submitted:', { status, reviewNotes, compliance })
  }

  return (
    <div className="oss-page">
      <div className="page-header">
        <h2>🔍 License Review</h2>
        <p className="page-description">
          Review and approve or reject submitted licenses
        </p>
      </div>

      {decision && (
        <div className={`alert ${decision === 'approved' ? 'alert-success' : 'alert-danger'}`}>
          {decision === 'approved' ? '✅ License approved successfully!' : '❌ License rejected'}
        </div>
      )}

      <div className="review-container">
        <main className="review-main">
          <div className="license-details-card">
            <div className="card-header">
              <h3>{license.name}</h3>
              <span className="license-type-badge">{license.type}</span>
            </div>

            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">SPDX Identifier</span>
                <span className="detail-value code">{license.spdxId}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">License Type</span>
                <span className="detail-value">{license.type}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">OSI Approved</span>
                <span className="detail-value">{license.osiApproved ? '✅ Yes' : '❌ No'}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">FSF Approved</span>
                <span className="detail-value">{license.fsfApproved ? '✅ Yes' : '❌ No'}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">License URL</span>
                <a href={license.url} target="_blank" rel="noopener noreferrer" className="detail-value link">
                  {license.url}
                </a>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Description</span>
                <p className="detail-value description">{license.description}</p>
              </div>
            </div>
          </div>

          <div className="compliance-card">
            <h3>Compliance Checklist</h3>
            <div className="checklist">
              <label className="checklist-item">
                <input
                  type="checkbox"
                  checked={compliance.termsComplete}
                  onChange={() => handleComplianceChange('termsComplete')}
                />
                <span>License terms are complete and accurate</span>
              </label>
              <label className="checklist-item">
                <input
                  type="checkbox"
                  checked={compliance.urlValid}
                  onChange={() => handleComplianceChange('urlValid')}
                />
                <span>URL is valid and leads to official license text</span>
              </label>
              <label className="checklist-item">
                <input
                  type="checkbox"
                  checked={compliance.typeCorrect}
                  onChange={() => handleComplianceChange('typeCorrect')}
                />
                <span>License type classification is correct</span>
              </label>
              <label className="checklist-item">
                <input
                  type="checkbox"
                  checked={compliance.descriptionClear}
                  onChange={() => handleComplianceChange('descriptionClear')}
                />
                <span>Description is clear and informative</span>
              </label>
              <label className="checklist-item">
                <input
                  type="checkbox"
                  checked={compliance.legalReviewed}
                  onChange={() => handleComplianceChange('legalReviewed')}
                />
                <span>Legal team has reviewed the license</span>
              </label>
            </div>
            <div className="compliance-status">
              {allChecked ? (
                <span className="status-complete">✅ All checks passed</span>
              ) : (
                <span className="status-incomplete">⚠️ {Object.values(compliance).filter(v => v).length}/5 checks completed</span>
              )}
            </div>
          </div>

          <div className="review-notes-card">
            <h3>Review Notes</h3>
            <textarea
              className="review-textarea"
              placeholder="Add your review notes, comments, or concerns here..."
              value={reviewNotes}
              onChange={(e) => setReviewNotes(e.target.value)}
              rows={6}
            />
          </div>

          <div className="review-actions">
            <button
              className="btn btn-success"
              onClick={() => handleSubmitReview('approved')}
              disabled={!allChecked}
            >
              ✅ Approve License
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleSubmitReview('rejected')}
            >
              ❌ Reject License
            </button>
            <button className="btn btn-secondary">
              💬 Request Changes
            </button>
          </div>
        </main>

        <aside className="review-sidebar">
          <div className="info-card">
            <h4>📋 Submission Info</h4>
            <div className="info-row">
              <span className="info-label">Submitter:</span>
              <span className="info-value">{license.submitter}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Date:</span>
              <span className="info-value">{new Date(license.submittedDate).toLocaleDateString()}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Status:</span>
              <span className="info-value">
                <span className="status-badge status-review">In Review</span>
              </span>
            </div>
          </div>

          <div className="info-card">
            <h4>📚 Resources</h4>
            <ul className="resource-list">
              <li><a href="#" target="_blank">OSI License List</a></li>
              <li><a href="#" target="_blank">SPDX License Registry</a></li>
              <li><a href="#" target="_blank">FSF License List</a></li>
              <li><a href="#" target="_blank">License Compatibility Guide</a></li>
            </ul>
          </div>

          <div className="info-card">
            <h4>⚠️ Review Guidelines</h4>
            <ul className="guidelines-list">
              <li>Verify all license terms</li>
              <li>Check URL accessibility</li>
              <li>Confirm type classification</li>
              <li>Ensure legal compliance</li>
              <li>Document any concerns</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
