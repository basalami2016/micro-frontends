# SSCS App Quick Start Guide

## 🚀 What is SSCS App?

**SSCS** (Software Supply Chain Security) is a micro-frontend application designed to scan, track, and manage vulnerabilities in your software dependencies using OSV scanner integration.

## ✨ Key Features

- 🔍 **Vulnerability Dashboard** - Real-time view of all security issues
- 🎯 **Severity Filtering** - Filter by Critical, High, Medium, Low
- 📊 **CVSS Scores** - Industry-standard vulnerability scoring
- 📦 **Package Tracking** - Monitor vulnerable packages and versions
- 🔧 **Auto-Fix Commands** - One-click remediation guidance
- 🎨 **Professional UI** - CSS Grid + Flexbox layouts

## 📦 Quick Setup (3 Steps)

### 1. Install Dependencies
```bash
cd sscs-app
npm install
```

### 2. Build the Application
```bash
npm run build
```

### 3. Start the Server
```bash
npm run dev:serve
```

Access at: **http://localhost:5001**

## 🎯 Using in Host Application

### Integration Steps

The SSCS app is already integrated into the host application. To use it:

1. **Start SSCS App** (Terminal 1):
```bash
cd sscs-app
npm run dev:serve  # Port 5001
```

2. **Start Host App** (Terminal 2):
```bash
cd host
npm run dev  # Port 5000
```

3. **Access SSCS in Host**:
   - Navigate to: http://localhost:5000/sscs
   - Or click "SSCS" in the navigation

## 📋 Features Overview

### Vulnerability Dashboard

**Summary Stats Grid** (Top):
- Critical vulnerabilities count (Red)
- High severity issues (Orange)
- Medium severity issues (Amber)
- Low severity issues (Blue)
- Total vulnerabilities (Purple)

**Filter Bar**:
- Dropdown to filter by severity level
- Real-time result count

**Two-Panel Layout**:
- **Left**: Scrollable list of vulnerability cards
- **Right**: Detailed information panel (sticky)

### Vulnerability Cards

Each card displays:
- 🔴 Severity badge (color-coded)
- 📊 CVSS score
- 🔢 CVE identifier
- 📦 Package name
- ⚠️ Current version → Fixed version
- 📝 Description preview

**Click any card** to see full details in the right panel.

### Details Panel

When you select a vulnerability:

**Identification Section**:
- CVE ID
- Advisory ID (GitHub)
- CVSS Score (large display)
- Publication date

**Package Information**:
- Package name
- Vulnerable version (red)
- Fixed version (green)

**Full Description**:
- Complete vulnerability explanation
- Attack vectors
- Impact details

**Affected Paths**:
- List of all affected files
- `node_modules` paths
- Lock files

**Remediation**:
- Fix command (ready to copy)
- Update instructions
- Testing notes

**Action Buttons**:
- 🔄 Auto-Fix
- 📋 Export Report
- 🔗 View on GitHub

## 🎨 UI Elements

### Color Coding

- **Critical** - Red (#dc2626) - Immediate action required
- **High** - Orange (#ea580c) - Priority fix
- **Medium** - Amber (#f59e0b) - Schedule fix
- **Low** - Blue (#3b82f6) - Monitor

### Layout System

```
┌─────────────────────────────────────────────┐
│  Header: Title + Scan Info                  │
├─────────────────────────────────────────────┤
│  Stats Grid: 5 cards (auto-fit)            │
├─────────────────────────────────────────────┤
│  Filter Bar: Dropdown + Count              │
├──────────────────────┬──────────────────────┤
│  Vulnerability List  │   Details Panel      │
│  (scrollable)        │   (sticky, 500px)    │
│                      │                      │
│  [Card 1]           │   Selected Vuln      │
│  [Card 2] ← selected│   Details Here       │
│  [Card 3]           │                      │
│  ...                │   [Action Buttons]   │
└──────────────────────┴──────────────────────┘
```

## 📊 Sample Data

The app includes 6 simulated vulnerabilities:

1. **axios** - CVE-2023-45857 (CRITICAL)
2. **tough-cookie** - CVE-2023-26136 (HIGH)
3. **word-wrap** - CVE-2023-26115 (HIGH)
4. **postcss** - CVE-2023-44270 (MEDIUM)
5. **semver** - CVE-2023-26118 (MEDIUM)
6. **nodemon** - CVE-2023-39331 (LOW)

## 🔄 Development Workflow

### Make Changes

```bash
# Terminal 1 - Watch mode (auto-rebuild)
npm run dev

# Terminal 2 - Serve built files
npm run dev:serve
```

Changes to the code will auto-rebuild.  
Refresh browser to see updates.

### Production Build

```bash
npm run build
npm run dev:serve
```

## 📁 File Structure

```
sscs-app/
├── src/
│   ├── pages/
│   │   └── VulnerabilityPage.tsx    # Main dashboard
│   ├── App.tsx                       # Router config
│   ├── App.css                       # All styles
│   └── main.tsx                      # Entry point
├── dist/
│   └── assets/
│       └── remoteEntry.js            # Federation bundle
├── vite.config.ts                    # Federation config
├── package.json
└── README.md                         # Full documentation
```

## 🔧 Configuration

**Port**: 5001  
**Federation Name**: `sscs_app`  
**Exposed Module**: `./App` → `./src/App.tsx`

## 🎯 Common Tasks

### Filter Vulnerabilities
Click the "Filter by Severity" dropdown and select:
- All Severities
- Critical Only
- High Only
- Medium Only
- Low Only

### View Details
Click any vulnerability card to see full information.

### Copy Fix Command
Click the code block in the Remediation section to copy.

### Run New Scan
Click "🔍 Run New Scan" button (simulated for demo).

## 🐛 Troubleshooting

**Port 5001 in use?**
```bash
lsof -ti:5001 | xargs kill -9
```

**Module not loading in host?**
1. Check sscs-app is built: `ls dist/assets/remoteEntry.js`
2. Rebuild: `npm run build`
3. Restart serve: `npm run dev:serve`

**TypeScript errors?**
Run `npm install` first.

**Changes not appearing?**
Rebuild and refresh browser.

## 📚 More Information

- Full docs: `sscs-app/README.md`
- Project overview: `PROJECT_OVERVIEW.md`
- Module Federation: `SETUP_GUIDE.md`

## 🎉 What's Next?

Future enhancements:
- Real OSV scanner integration
- Live scanning from command line
- Dependency tree visualization
- Historical tracking
- Export to PDF/CSV
- GitHub auto-fix PRs
- SBOM generation
- Compliance reports

---

**Ready to secure your supply chain!** 🛡️
