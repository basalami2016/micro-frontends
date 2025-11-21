import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import AppShell from './components/AppShell'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import OSSLicensePage from './pages/OSSLicensePage'

import './App.css'
import SSCSPage from './pages/SSCSPage'

// Layout component that wraps all routes with AppShell
function Layout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  )
}

// Create browser router with all routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'oss-license/*',
        element: <OSSLicensePage />,
      },
      {
        path: 'sscs/*',
        element: <SSCSPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
