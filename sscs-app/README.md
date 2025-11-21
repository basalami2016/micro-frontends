# SSCS App - Software Supply Chain Security

A micro-frontend application for scanning and managing software supply chain vulnerabilities using OSV scanner integration.

## 🎯 Features

- **Vulnerability Dashboard**: Real-time view of all detected vulnerabilities
- **Severity Filtering**: Filter by CRITICAL, HIGH, MEDIUM, LOW severities
- **Detailed Reports**: Comprehensive CVE information with CVSS scores
- **Package Tracking**: Track vulnerable packages and fixed versions
- **Remediation Guidance**: Auto-generated fix commands and documentation
- **Professional UI**: CSS Grid and Flexbox layouts for optimal UX

## 🏗️ Technology Stack

- **React 18.2.0**: Component framework
- **TypeScript 5.2.2**: Type safety
- **React Router v6**: Client-side routing with `createBrowserRouter`
- **Vite 5.0.8**: Build tool with HMR
- **Module Federation**: Micro-frontend architecture
- **CSS Grid & Flexbox**: Professional responsive layouts

## 📦 Port Configuration

- **Dev Server**: Port 5001
- **Preview Server**: Port 5001

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Development Mode

For development with hot reload:

```bash
# Terminal 1 - Watch mode (rebuilds on changes)
npm run dev

# Terminal 2 - Serve built files
npm run dev:serve
```

### Production Build

```bash
npm run build
npm run dev:serve
```

## 📋 Pages

### Vulnerability Page (`/`)

Comprehensive vulnerability management interface featuring:

- **Summary Stats Grid**: 
  - Critical vulnerabilities count
  - High severity issues
  - Medium severity issues
  - Low severity issues
  - Total vulnerabilities

- **Filter Bar**: 
  - Filter by severity level
  - Result count display
  - Quick actions

- **Vulnerability List** (Left Panel):
  - Card-based display
  - Severity badges with color coding
  - CVSS scores
  - Package information
  - Version comparison (current → fixed)
  - Quick description preview

- **Details Panel** (Right Panel):
  - Full CVE information
  - Advisory IDs
  - CVSS score breakdown
  - Package details
  - Complete vulnerability description
  - Affected file paths
  - Remediation instructions
  - Auto-fix commands
  - Action buttons (Auto-Fix, Export, GitHub)

## 🎨 UI Design

### Layout System

**Main Container**: CSS Grid
```css
grid-template-columns: 1fr 500px;  /* List + Details */
gap: 1.5rem;
```

**Stats Grid**: Auto-fit responsive cards
```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

**Details Grid**: Two-column information layout
```css
grid-template-columns: repeat(2, 1fr);
```

### Color Scheme

- **Critical**: #dc2626 (Red)
- **High**: #ea580c (Orange)
- **Medium**: #f59e0b (Amber)
- **Low**: #3b82f6 (Blue)
- **Primary**: #667eea (Purple)
- **Accent**: #764ba2 (Deep Purple)

### Typography

- **Headers**: Bold, 1.5-2rem
- **Body**: 0.875-1rem
- **Labels**: Uppercase, 0.75rem, letter-spacing

## 🔧 Module Federation

### Exposed Modules

```typescript
exposes: {
  './App': './src/App.tsx'
}
```

### Integration in Host

```typescript
// host/vite.config.ts
remotes: {
  sscs_app: 'http://localhost:5001/assets/remoteEntry.js'
}
```

```tsx
// host/src/pages/SSCSPage.tsx
import SSCSApp from 'sscs_app/App';
```

## 📊 Simulated Data

The app currently uses mock vulnerability data including:

- **6 Sample Vulnerabilities**:
  - axios CVE-2023-45857 (CRITICAL)
  - tough-cookie CVE-2023-26136 (HIGH)
  - word-wrap CVE-2023-26115 (HIGH)
  - postcss CVE-2023-44270 (MEDIUM)
  - semver CVE-2023-26118 (MEDIUM)
  - nodemon CVE-2023-39331 (LOW)

Each includes:
- CVE ID
- Severity level
- CVSS score
- Package name and versions
- Full description
- Affected paths
- Remediation steps

## 🔄 Integration with Host

### Host Configuration

1. **Route Setup** (`/sscs/*`):
```tsx
{
  path: 'sscs/*',
  element: <SSCSPage />,
}
```

2. **Navigation**:
- Header: SSCS link
- Sidebar: 🛡️ SSCS icon + label

3. **Lazy Loading**:
```tsx
const SSCSApp = lazy(() => import('sscs_app/App'));
```

## 🏃 Running the Full System

### Step 1: Build SSCS App
```bash
cd sscs-app
npm run build
```

### Step 2: Serve SSCS App
```bash
npm run dev:serve  # Port 5001
```

### Step 3: Start Host App
```bash
cd ../host
npm run dev  # Port 5000
```

### Access Points

- **Standalone**: http://localhost:5001
- **In Host**: http://localhost:5000/sscs

## 📁 Project Structure

```
sscs-app/
├── src/
│   ├── pages/
│   │   └── VulnerabilityPage.tsx    # Main vulnerability dashboard
│   ├── App.tsx                       # Router configuration
│   ├── App.css                       # All styles (Grid + Flexbox)
│   └── main.tsx                      # Entry point
├── dist/                             # Build output
│   └── assets/
│       └── remoteEntry.js            # Federation entry
├── vite.config.ts                    # Vite + Federation config
├── package.json                      # Dependencies
└── tsconfig.json                     # TypeScript config
```

## 🎯 Key Features Breakdown

### 1. Severity-Based Filtering
- Quick filter dropdown
- Real-time list updates
- Count indicators

### 2. Interactive Vulnerability Cards
- Click to select
- Hover effects
- Active state highlighting
- Smooth transitions

### 3. Detailed Information Panel
- Sticky positioning
- Scrollable content
- Structured data display
- Action buttons

### 4. Responsive Design
- Desktop: Side-by-side panels
- Tablet: Stacked layout
- Mobile: Full-width cards

### 5. Professional Animations
- Smooth hover effects
- Card transformations
- Color transitions
- Loading states

## 🔐 Future Enhancements

- [ ] Real OSV scanner integration
- [ ] Live scanning functionality
- [ ] Dependency tree visualization
- [ ] Historical vulnerability tracking
- [ ] Export to PDF/CSV
- [ ] GitHub integration for auto-fix PRs
- [ ] SBOM (Software Bill of Materials) generation
- [ ] Compliance reporting
- [ ] Multi-project support
- [ ] Notifications and alerts

## 🤝 Contributing

This app is part of a micro-frontend architecture. Ensure:
1. Changes don't break federation exports
2. Build succeeds before committing
3. CSS Grid/Flexbox layouts are maintained
4. TypeScript types are properly defined

## 📄 License

Part of the micro-frontends project.

---

**Last Updated**: November 2025  
**Version**: 1.0.0  
**Port**: 5001
