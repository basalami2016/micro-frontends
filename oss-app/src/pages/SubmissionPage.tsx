import { useState } from 'react'

interface LicenseFormData {
  licenseName: string
  licenseType: string
  spdxId: string
  url: string
  description: string
  osiApproved: boolean
  fsfApproved: boolean
  submitterName: string
  submitterEmail: string
}

export default function SubmissionPage() {
  const [formData, setFormData] = useState<LicenseFormData>({
    licenseName: '',
    licenseType: 'permissive',
    spdxId: '',
    url: '',
    description: '',
    osiApproved: false,
    fsfApproved: false,
    submitterName: '',
    submitterEmail: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting license:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div className="oss-page">
      <div className="page-header">
        <h2>📝 Submit New OSS License</h2>
        <p className="page-description">
          Submit a new open source license for review and approval
        </p>
      </div>

      {submitted && (
        <div className="alert alert-success">
          ✅ License submitted successfully! It will be reviewed shortly.
        </div>
      )}

      <div className="submission-container">
        <form onSubmit={handleSubmit} className="license-form">
          <div className="form-section">
            <h3>License Information</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="licenseName">License Name *</label>
                <input
                  type="text"
                  id="licenseName"
                  name="licenseName"
                  className="form-control"
                  value={formData.licenseName}
                  onChange={handleChange}
                  required
                  placeholder="e.g., MIT License"
                />
              </div>

              <div className="form-group">
                <label htmlFor="spdxId">SPDX Identifier</label>
                <input
                  type="text"
                  id="spdxId"
                  name="spdxId"
                  className="form-control"
                  value={formData.spdxId}
                  onChange={handleChange}
                  placeholder="e.g., MIT"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="licenseType">License Type *</label>
                <select
                  id="licenseType"
                  name="licenseType"
                  className="form-control"
                  value={formData.licenseType}
                  onChange={handleChange}
                  required
                >
                  <option value="permissive">Permissive</option>
                  <option value="copyleft">Copyleft</option>
                  <option value="weak-copyleft">Weak Copyleft</option>
                  <option value="public-domain">Public Domain</option>
                  <option value="proprietary">Proprietary</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="url">License URL *</label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  className="form-control"
                  value={formData.url}
                  onChange={handleChange}
                  required
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                className="form-control textarea"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Describe the license, its terms, and use cases..."
              />
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="osiApproved"
                  checked={formData.osiApproved}
                  onChange={handleChange}
                />
                <span>OSI Approved</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="fsfApproved"
                  checked={formData.fsfApproved}
                  onChange={handleChange}
                />
                <span>FSF Approved</span>
              </label>
            </div>
          </div>

          <div className="form-section">
            <h3>Submitter Information</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="submitterName">Your Name *</label>
                <input
                  type="text"
                  id="submitterName"
                  name="submitterName"
                  className="form-control"
                  value={formData.submitterName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="submitterEmail">Your Email *</label>
                <input
                  type="email"
                  id="submitterEmail"
                  name="submitterEmail"
                  className="form-control"
                  value={formData.submitterEmail}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Submit License
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => setFormData({
              licenseName: '',
              licenseType: 'permissive',
              spdxId: '',
              url: '',
              description: '',
              osiApproved: false,
              fsfApproved: false,
              submitterName: '',
              submitterEmail: ''
            })}>
              Reset Form
            </button>
          </div>
        </form>

        <aside className="submission-sidebar">
          <div className="info-card">
            <h4>📋 Submission Guidelines</h4>
            <ul>
              <li>Provide accurate license information</li>
              <li>Include the official license URL</li>
              <li>Specify the correct license type</li>
              <li>Add a clear description</li>
              <li>Indicate OSI/FSF approval status</li>
            </ul>
          </div>

          <div className="info-card">
            <h4>⏱️ Review Process</h4>
            <ol>
              <li>Submission received</li>
              <li>Initial validation</li>
              <li>Expert review</li>
              <li>Community feedback</li>
              <li>Final approval</li>
            </ol>
            <p className="info-note">Typical review time: 5-7 business days</p>
          </div>
        </aside>
      </div>
    </div>
  )
}
