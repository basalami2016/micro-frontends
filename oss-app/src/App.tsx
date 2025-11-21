import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom'
import SubmissionPage from './pages/SubmissionPage'
import LicenseReviewPage from './pages/LicenseReviewPage'
import PendingReviewPage from './pages/PendingReviewPage'
import './App.css'
import './index.css'

// Navigation Layout
function Layout() {
  return (
    <div className="oss-app-container">
      <nav className="oss-nav">
        <div className="oss-nav-brand">
          <h1>📜 OSS License Review</h1>
        </div>
        <div className="oss-nav-links">
          <Link to="/" className="nav-link">Submit License</Link>
          <Link to="/review" className="nav-link">Review</Link>
          <Link to="/pending" className="nav-link">Pending</Link>
        </div>
      </nav>
      <main className="oss-main">
        <Outlet />
      </main>
    </div>
  )
}

// Router configuration with support for micro-frontend basename
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <SubmissionPage />,
      },
      {
        path: 'review',
        element: <LicenseReviewPage />,
      },
      {
        path: 'pending',
        element: <PendingReviewPage />,
      },
    ],
  },
], {
  basename: window.location.pathname.includes('/oss-license') ? '/oss-license' : '/'
})

function App() {
  return <RouterProvider router={router} />
}

export default App
