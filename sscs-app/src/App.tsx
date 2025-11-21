import VulnerabilityPage from './pages/VulnerabilityPage';
import './App.css';

function App() {
  return (
    <div className="sscs-layout">
      <nav className="sscs-nav">
        <h2>🛡️ SSCS</h2>
        <span className="nav-link">Software Supply Chain Security</span>
      </nav>
      <main className="sscs-main">
        <VulnerabilityPage />
      </main>
    </div>
  );
}

export default App;