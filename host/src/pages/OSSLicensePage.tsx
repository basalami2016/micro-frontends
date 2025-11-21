import { lazy, Suspense } from 'react'

const OSSApp = lazy(() => import('oss_app/App'))

export default function OSSLicensePage() {
  return (
    <div className="App">
      <Suspense fallback={
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading OSS License Review App...</p>
        </div>
      }>
        <OSSApp />
      </Suspense>
    </div>
  )
}
