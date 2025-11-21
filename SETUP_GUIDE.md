# 🔧 SOLUTION: Module Federation Setup

## Understanding the Error

The error **"Failed to fetch dynamically imported module: http://localhost:5001/remoteEntry.js"** occurred because:

1. **`@originjs/vite-plugin-federation` requires a BUILD step** for the remote app
2. The `vite dev` server doesn't generate the `remoteEntry.js` file
3. You must **build** the remote, then **serve** the built files

## ✅ Correct Setup Process

### Step 1: Build the Remote App
```bash
cd remote
npm run build
```

This generates `dist/assets/remoteEntry.js` which the host app needs.

### Step 2: Serve the Remote App
In the same terminal:
```bash
npm run dev:serve
```

Or open a new terminal and run:
```bash
cd remote
npm run dev:serve
```

The remote will be available at http://localhost:5001

### Step 3: Start the Host App
In a new terminal:
```bash
cd host
npm run dev
```

The host will be available at http://localhost:5000

## 🎯 Quick Start

Use the provided script to do all steps automatically:

```bash
cd /home/../micro-fronteds
./start.sh
```

## 🔄 Development Workflow

### Making Changes to the Remote App

The remote has been configured with **watch mode**, so you have two options:

**Option 1: Auto-rebuild (Recommended)**
```bash
# Terminal 1
cd remote
npm run dev    # This builds in watch mode

# Terminal 2
cd remote
npm run dev:serve

# Terminal 3
cd host
npm run dev
```

When you edit files in `remote/src/`, they'll automatically rebuild.

**Option 2: Manual rebuild**
After making changes:
```bash
cd remote
npm run build
# No need to restart dev:serve, just refresh the browser
```

### Making Changes to the Host App

Vite's HMR works normally - changes appear instantly.

## 📋 Verification Checklist

Before accessing the host app, verify:

1. ✅ Remote is built: `ls remote/dist/assets/remoteEntry.js`
2. ✅ Remote is serving: `curl http://localhost:5001/assets/remoteEntry.js`
3. ✅ Remote returns JavaScript (not HTML 404)
4. ✅ Host can fetch remote: Check browser DevTools Network tab

## 🐛 Troubleshooting

### "Failed to fetch dynamically imported module"
- **Cause**: Remote app not running or not built
- **Fix**: Build remote first, then serve it

### "404 Not Found" for remoteEntry.js
- **Cause**: Wrong path or remote not built
- **Fix**: Verify file exists at `remote/dist/assets/remoteEntry.js`

### Changes in remote not appearing
- **Cause**: Need to rebuild
- **Fix**: Run `npm run build` in remote directory

### Port already in use
```bash
# Find and kill process using port 5001
lsof -ti:5001 | xargs kill -9

# Or use a different port in vite.config.ts
```

## 📁 File Structure After Build

```
remote/
├── dist/
│   ├── assets/
│   │   ├── remoteEntry.js       ← Host fetches this
│   │   ├── __federation_*.js    ← Federation chunks
│   │   └── ...other chunks
│   └── index.html
└── src/
```

## 🎓 Key Concepts

1. **Module Federation needs built files**: Unlike regular Vite dev, federation requires a build step
2. **Remote must run first**: Host can't start without remote being available
3. **Path matters**: Host points to `/assets/remoteEntry.js` (in the dist folder)
4. **Singleton shared deps**: React is shared as singleton to avoid multiple instances
