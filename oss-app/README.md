# OSS License Review App

A micro-frontend application for managing Open Source Software (OSS) license submissions, reviews, and approvals.

## Features

### 📝 License Submission
- Submit new OSS licenses for review
- Provide detailed license information (name, SPDX ID, type, URL)
- Indicate OSI and FSF approval status
- Include submitter information
- Form validation and guidelines

### 🔍 License Review
- Review submitted licenses in detail
- Compliance checklist for validation
- Add review notes and comments
- Approve or reject licenses
- Access to licensing resources

### ⏳ Pending Review
- View all licenses awaiting review
- Filter by license type
- Statistics dashboard
- Detailed license information
- Timeline tracking

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router v6** - Client-side routing with `createBrowserRouter`
- **Vite** - Build tool
- **Module Federation** - Micro-frontend architecture
- **CSS Grid & Flexbox** - Professional responsive layouts

## Project Structure

```
oss-app/
├── src/
│   ├── pages/
│   │   ├── SubmissionPage.tsx      # License submission form
│   │   ├── LicenseReviewPage.tsx   # Review and approval page
│   │   └── PendingReviewPage.tsx   # Pending licenses dashboard
│   ├── App.tsx                     # Router configuration
│   ├── App.css                     # Application styles
│   ├── index.css                   # Global styles
│   └── main.tsx                    # Entry point
├── vite.config.ts                  # Vite & Module Federation config
├── package.json
└── tsconfig.json
```

## Setup & Installation

### 1. Install Dependencies

```bash
cd oss-app
npm install
```

### 2. Build the Application

```bash
npm run build
```

This generates the federated module at `dist/assets/remoteEntry.js`

### 3. Serve the Application

```bash
npm run dev:serve
```

The app will be available at **http://localhost:5002**

### 4. Development Mode

For active development with auto-rebuild:

```bash
# Terminal 1 - Watch and rebuild
npm run dev

# Terminal 2 - Serve built files
npm run dev:serve
```

## Module Federation

The OSS app is configured as a remote module that can be consumed by other applications:

### Exposed Module

```typescript
exposes: {
  './App': './src/App.tsx'
}
```

### Shared Dependencies

- React (singleton)
- React-DOM (singleton)
- React-Router-DOM (singleton)

## Integration with Host App

The OSS app is integrated into the host application at the route `/oss-license`.

### Host Configuration

Add to host's `vite.config.ts`:

```typescript
remotes: {
  oss_app: 'http://localhost:5002/assets/remoteEntry.js'
}
```

### Usage in Host

```typescript
import { lazy, Suspense } from 'react'

const OSSApp = lazy(() => import('oss_app/App'))

function OSSLicensePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OSSApp />
    </Suspense>
  )
}
```

## Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | SubmissionPage | Submit new licenses |
| `/review` | LicenseReviewPage | Review and approve licenses |
| `/pending` | PendingReviewPage | View pending licenses |

## UI Components & Layouts

### CSS Grid Layouts

- **Submission Container**: 2-column grid (form + sidebar)
- **Pending Container**: 2-column grid (licenses grid + details)
- **Review Container**: 2-column grid (main + sidebar)
- **License Grid**: Responsive auto-fill grid
- **Stats Dashboard**: Auto-fit grid for metrics

### Flexbox Components

- Navigation bar
- Form rows
- Button groups
- Timeline
- Compliance checklist
- Card headers

## Styling Highlights

- **Professional color scheme**: Purple gradient (#667eea, #764ba2)
- **Responsive design**: Adapts to mobile, tablet, and desktop
- **Interactive elements**: Hover effects, transitions, and animations
- **Status badges**: Color-coded for different states
- **Form styling**: Clean, accessible inputs with focus states
- **Cards**: Elevated design with shadows and rounded corners

## Running the Complete Micro-Frontend Setup

### Step 1: Build & Serve Remote App

```bash
cd remote
npm run build
npm run dev:serve  # Port 5001
```

### Step 2: Build & Serve OSS App

```bash
cd oss-app
npm run build
npm run dev:serve  # Port 5002
```

### Step 3: Run Host App

```bash
cd host
npm run dev  # Port 5000
```

### Access Points

- **Host App**: http://localhost:5000
- **Remote App**: http://localhost:5001
- **OSS App**: http://localhost:5002
- **OSS in Host**: http://localhost:5000/oss-license

## Features by Page

### Submission Page

- Multi-section form with validation
- License type selection (Permissive, Copyleft, etc.)
- OSI/FSF approval checkboxes
- Submission guidelines sidebar
- Review process timeline
- Success/error alerts

### Review Page

- Detailed license information display
- 5-point compliance checklist
- Review notes textarea
- Approve/Reject/Request Changes actions
- Submission info sidebar
- Licensing resources links
- Review guidelines

### Pending Review Page

- Statistics dashboard (4 metrics)
- License type filter
- Grid of pending licenses
- Card-based license display
- Click to view details
- Timeline visualization
- Status indicators

## Development Notes

- TypeScript errors before `npm install` are expected
- All routes use React Router v6's `createBrowserRouter`
- Module Federation requires build step (not dev server)
- Shared dependencies prevent duplication
- CSS uses modern features (Grid, Flexbox, custom properties)

## Future Enhancements

- [ ] Real API integration
- [ ] User authentication
- [ ] Email notifications
- [ ] License version tracking
- [ ] Advanced search and filtering
- [ ] Export to PDF/CSV
- [ ] Automated compliance checks
- [ ] Comment threads
- [ ] Audit log

## License Type Categories

- **Permissive**: MIT, Apache, BSD
- **Copyleft**: GPL, AGPL
- **Weak Copyleft**: LGPL, MPL
- **Public Domain**: Unlicense, CC0
- **Proprietary**: Custom licenses

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Requires modern JavaScript (ES2020+) and CSS Grid/Flexbox support.
