import { lazy, Suspense } from 'react';

// @ts-ignore
const SSCSApp = lazy(() => import('sscs_app/App'));

const SSCSPage = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Suspense fallback={
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '400px',
          fontSize: '1.2rem',
          color: '#667eea'
        }}>
          🔄 Loading Software Supply Chain Security App...
        </div>
      }>
        <SSCSApp />
      </Suspense>
    </div>
  );
};

export default SSCSPage;
