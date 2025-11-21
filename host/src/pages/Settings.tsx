import '../App.css'

export default function Settings() {
  return (
    <div className="App">
      <h2>⚙️ Settings</h2>
      <p className="intro-text">
        Configure your application preferences and account settings.
      </p>

      <div className="card">
        <h3>Profile Settings</h3>
        <div className="settings-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" className="form-control" defaultValue="John Doe" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="form-control" defaultValue="john.doe@example.com" />
          </div>
          <div className="form-group">
            <label>Role</label>
            <select className="form-control">
              <option>Administrator</option>
              <option>Manager</option>
              <option>User</option>
            </select>
          </div>
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>

      <div className="card">
        <h3>Notification Preferences</h3>
        <div className="settings-toggles">
          <div className="toggle-item">
            <div className="toggle-info">
              <h4>Email Notifications</h4>
              <p>Receive email updates about your account</p>
            </div>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
          <div className="toggle-item">
            <div className="toggle-info">
              <h4>Push Notifications</h4>
              <p>Get push notifications on your device</p>
            </div>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
          <div className="toggle-item">
            <div className="toggle-info">
              <h4>Weekly Reports</h4>
              <p>Receive weekly summary reports</p>
            </div>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Application Settings</h3>
        <div className="settings-form">
          <div className="form-group">
            <label>Theme</label>
            <select className="form-control">
              <option>Light</option>
              <option>Dark</option>
              <option>Auto</option>
            </select>
          </div>
          <div className="form-group">
            <label>Language</label>
            <select className="form-control">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
          <div className="form-group">
            <label>Timezone</label>
            <select className="form-control">
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC+0 (GMT)</option>
              <option>UTC+1 (Central European Time)</option>
            </select>
          </div>
          <button className="btn btn-primary">Apply Settings</button>
        </div>
      </div>

      <div className="card danger-zone">
        <h3>Danger Zone</h3>
        <p>Irreversible actions that affect your account</p>
        <div className="danger-actions">
          <button className="btn btn-danger">Clear All Data</button>
          <button className="btn btn-danger">Delete Account</button>
        </div>
      </div>
    </div>
  )
}
