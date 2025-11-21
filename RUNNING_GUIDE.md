# 🚀 Complete System Running Guide

## 📦 System Overview

You now have **3 micro-frontend applications**:

1. **Host** (Port 5000) - Main orchestrator
2. **SSCS App** (Port 5001) - Software Supply Chain Security
3. **OSS App** (Port 5002) - Open Source License Review

## ⚡ Quick Start (Copy & Paste)

### Option 1: Run Everything (3 Terminal Windows)

```bash
# Terminal 1 - SSCS App
cd /home/.../micro-fronteds/sscs-app
npm run dev:serve

# Terminal 2 - OSS App
cd /home/../micro-fronteds/oss-app
npm run dev:serve

# Terminal 3 - Host App
cd /home/.../micro-fronteds/host
npm run dev
```

### Option 2: One-Line Starter (Background)

```bash
cd /home/.../micro-fronteds && \
(cd sscs-app && npm run dev:serve &) && \
(cd oss-app && npm run dev:serve &) && \
(cd host && npm run dev)
```

## 🌐 Access Points

| Application | URL | Description |
|-------------|-----|-------------|
| **Host Dashboard** | http://localhost:5000 | Main application entry point |
| **SSCS Standalone** | http://localhost:5001 | Direct access to SSCS app |
| **OSS Standalone** | http://localhost:5002 | Direct access to OSS app |
| **SSCS in Host** | http://localhost:5000/sscs | Integrated SSCS experience |
| **OSS in Host** | http://localhost:5000/oss-license | Integrated OSS experience |

## 📋 Step-by-Step Guide

### Step 1: Verify Dependencies

Make sure all apps have dependencies installed:

```bash
# Check Host
cd /.../micro-fronteds/host
npm list react react-dom react-router-dom

# Check SSCS App
cd /home/../micro-fronteds/sscs-app
npm list react react-dom react-router-dom

# Check OSS App
cd /home/.../micro-fronteds/oss-app
npm list react react-dom react-router-dom
```

If any errors, run `npm install` in that directory.

### Step 2: Build Remote Apps

**IMPORTANT**: Remote apps must be built before serving!

```bash
# Build SSCS App
cd /home/.../micro-fronteds/sscs-app
npm run build

# Build OSS App
cd /home/.../micro-fronteds/oss-app
npm run build
```

### Step 3: Start SSCS App

```bash
cd /home/.../micro-fronteds/sscs-app
npm run dev:serve
```

**Expected output**:
```
  ➜  Local:   http://localhost:5001/
  ➜  Network: use --host to expose
```

**Keep this terminal open!**

### Step 4: Start OSS App

Open a **new terminal**:

```bash
cd /home/.../micro-fronteds/oss-app
npm run dev:serve
```

**Expected output**:
```
  ➜  Local:   http://localhost:5002/
  ➜  Network: use --host to expose
```

**Keep this terminal open!**

### Step 5: Start Host App

Open a **new terminal**:

```bash
cd /home/.../micro-fronteds/host
npm run dev
```

**Expected output**:
```
  VITE v5.0.8  ready in 523 ms

  ➜  Local:   http://localhost:5000/
  ➜  Network: use --host to expose
```

**Keep this terminal open!**

### Step 6: Access Applications

Open your browser and navigate to:

**http://localhost:5000**

## 🎯 Navigation Guide

### From Host Dashboard

**Header Navigation**:
- **Home** → Dashboard
- **Analytics** → Analytics page
- **Reports** → Reports page
- **SSCS** → Software Supply Chain Security ⬅️ NEW!
- **OSS License** → License review app

**Sidebar Navigation**:
- 📊 Dashboard
- 📈 Analytics
- 📋 Reports
- ⚙️ Settings
- 🛡️ SSCS ⬅️ NEW!
- 📜 OSS License

### SSCS App Features

When you click **SSCS**, you'll see:

1. **Vulnerability Dashboard Header**
   - Title and scan information
   - "Run New Scan" button

2. **Summary Stats** (5 cards)
   - Critical vulnerabilities (red)
   - High severity (orange)
   - Medium severity (amber)
   - Low severity (blue)
   - Total issues (purple)

3. **Filter Bar**
   - Dropdown to filter by severity
   - Result count

4. **Main Content**
   - **Left**: Scrollable vulnerability list
   - **Right**: Detailed information panel

**Try this**:
- Click any vulnerability card to see details
- Use the filter dropdown to show only "Critical" items
- Scroll through the remediation commands

### OSS App Features

Click **OSS License** to access:

1. **Submission** - Submit new licenses
2. **Review** - Review and approve licenses
3. **Pending** - View pending reviews

## 🔧 Troubleshooting

### Port Already in Use

```bash
# Kill all processes on ports 5000, 5001, 5002
lsof -ti:5000,5001,5002 | xargs kill -9
```

Then restart the apps.

### "Failed to fetch dynamically imported module"

This means the remote app isn't built or serving:

```bash
# For SSCS App
cd sscs-app
npm run build
npm run dev:serve

# For OSS App
cd oss-app
npm run build
npm run dev:serve
```

### Changes Not Appearing

**For Host App**: Just refresh browser (HMR works)

**For Remote Apps** (SSCS/OSS):
```bash
# Rebuild
npm run build
# Refresh browser
```

### TypeScript Errors

If you see TypeScript errors in the editor:

```bash
cd <app-directory>
npm install
```

The errors will resolve once dependencies are installed.

## 🔄 Development Workflow

### Making Changes to Host

1. Edit files in `host/src/`
2. Changes appear instantly (HMR)
3. No rebuild needed

### Making Changes to SSCS or OSS Apps

**Option A: Manual Rebuild**
```bash
npm run build
# Refresh browser
```

**Option B: Watch Mode**
```bash
# Terminal 1 - Auto rebuild on changes
npm run dev

# Terminal 2 - Serve files
npm run dev:serve
```

## 📊 Verifying Everything Works

### Check 1: Remote Apps Are Built

```bash
# SSCS App
ls /home/.../micro-fronteds/sscs-app/dist/assets/remoteEntry.js

# OSS App
ls /home/.../micro-fronteds/oss-app/dist/assets/remoteEntry.js
```

Both should exist.

### Check 2: Servers Are Running

```bash
# Check processes
lsof -ti:5000,5001,5002
```

Should show 3 process IDs.

### Check 3: Federation URLs Are Accessible

```bash
# SSCS App
curl -I http://localhost:5001/assets/remoteEntry.js

# OSS App
curl -I http://localhost:5002/assets/remoteEntry.js
```

Both should return `200 OK`.

### Check 4: Host Can Load Remotes

Open browser console at http://localhost:5000 and check for:
- No federation errors
- No 404s for remoteEntry.js files

## 🎨 What to Explore

### SSCS App Highlights

1. **Click vulnerability cards** to see details
2. **Filter by severity** using the dropdown
3. **Check CVSS scores** for each vulnerability
4. **View remediation commands** in the details panel
5. **Notice the color coding** (red=critical, orange=high, etc.)

### OSS App Highlights

1. **Submit a License** (Submission page)
2. **Review Compliance** (Review page)
3. **Check Pending Items** (Pending page)
4. **Filter by status** on the Pending page

## 📁 Project Structure Quick Reference

```
micro-fronteds/
├── host/                   # Port 5000 - Main app
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── SSCSPage.tsx      ← Loads SSCS
│   │   │   └── OSSLicensePage.tsx ← Loads OSS
│   │   └── components/
│   │       └── AppShell.tsx       ← Navigation
│   └── vite.config.ts             ← Federation config
│
├── sscs-app/               # Port 5001 - Security
│   ├── src/
│   │   ├── pages/
│   │   │   └── VulnerabilityPage.tsx
│   │   └── App.tsx                ← Router
│   └── dist/assets/
│       └── remoteEntry.js         ← Federation bundle
│
└── oss-app/                # Port 5002 - Licenses
    ├── src/
    │   ├── pages/
    │   │   ├── SubmissionPage.tsx
    │   │   ├── LicenseReviewPage.tsx
    │   │   └── PendingReviewPage.tsx
    │   └── App.tsx                ← Router
    └── dist/assets/
        └── remoteEntry.js         ← Federation bundle
```

## 🎯 Common Commands Reference

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start dev server (host only)
npm run dev

# Serve built files (remotes)
npm run dev:serve

# Watch mode (auto-rebuild)
npm run dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## 🆘 Need Help?

Check these files:
- `PROJECT_OVERVIEW.md` - Complete system overview
- `SSCS_APP_GUIDE.md` - SSCS app quick start
- `OSS_APP_GUIDE.md` - OSS app quick start
- `SETUP_GUIDE.md` - Module Federation details
- `TROUBLESHOOTING.md` - Common issues
- `ROUTING_GUIDE.md` - React Router setup

## 🎉 Success Checklist

- ✅ SSCS app built successfully
- ✅ OSS app built successfully
- ✅ SSCS app serving on port 5001
- ✅ OSS app serving on port 5002
- ✅ Host app running on port 5000
- ✅ Can access host at http://localhost:5000
- ✅ Can click "SSCS" in navigation
- ✅ SSCS page loads without errors
- ✅ Can click vulnerability cards
- ✅ Can filter vulnerabilities
- ✅ Can access OSS License page
- ✅ All navigation links work

**You're all set! Enjoy your micro-frontend architecture!** 🚀

---

**Last Updated**: November 21, 2025  
**System**: 3 micro-frontends with Module Federation  
**Total Pages**: 9 pages across 3 apps  
**Ports**: 5000 (host), 5001 (sscs), 5002 (oss)
