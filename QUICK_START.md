# 🎯 Quick Start Guide - Module Federation

## The Problem You Encountered

**Error**: `Uncaught TypeError: Failed to fetch dynamically imported module: http://localhost:5001/remoteEntry.js`

**Root Cause**: `@originjs/vite-plugin-federation` doesn't generate `remoteEntry.js` during `vite dev` - it only generates it during **build**.

## ✅ The Solution

Module federation with Vite requires a **build-then-serve** approach for remote apps:

```bash
# ❌ WRONG (what you tried initially)
cd remote
npm run dev  # This doesn't create remoteEntry.js!

# ✅ CORRECT
cd remote
npm run build        # Creates dist/assets/remoteEntry.js
npm run dev:serve    # Serves the built files on port 5001
```

## 🚀 How to Run Your Apps (Step by Step)

### Terminal 1: Remote App
```bash
cd /home/basalami/niqflex/micro-fronteds/remote

# Build it first
npm run build

# Then serve it
npm run dev:serve
```

Wait for: `➜ Local: http://localhost:5001/`

### Terminal 2: Host App
```bash
cd /home/basalami/niqflex/micro-fronteds/host

npm run dev
```

Wait for: `➜ Local: http://localhost:5000/`

### Open Browser
Go to: **http://localhost:5000**

You should see:
- ✅ Host Application header
- ✅ Local content from host
- ✅ Remote Button loaded from remote app (with click counter)

## 🔄 Development Workflow

### When You Edit Remote Files

**Option 1: Watch Mode (3 terminals)**
```bash
# Terminal 1 - Auto-rebuild on changes
cd remote
npm run dev  # Runs build in watch mode

# Terminal 2 - Serve the built files
cd remote
npm run dev:serve

# Terminal 3 - Host app
cd host
npm run dev
```

**Option 2: Manual Rebuild (2 terminals)**
```bash
# After editing remote files:
cd remote
npm run build

# Refresh browser at localhost:5000
```

### When You Edit Host Files

Changes appear instantly (Vite HMR) - no rebuild needed.

## 📦 What Got Changed

I updated your configuration to work with `@originjs/vite-plugin-federation`:

1. **Remote package.json** - Changed dev script to build in watch mode
2. **Both vite.config.ts** - Fixed module names and paths
3. **Host App.tsx** - Updated import from `remoteApp` to `remote_app`
4. **Added scripts** - Created `start.sh` for easy startup

## 🎓 Key Takeaways

| Aspect | Regular Vite Dev | Module Federation |
|--------|-----------------|-------------------|
| Remote Dev | `vite dev` works | Must **build first** |
| File Generation | Instant | Needs **build step** |
| Hot Reload | Built-in | Manual rebuild needed |
| Entry File | Not needed | **remoteEntry.js required** |

## ✅ Verify Everything Works

Run these commands to verify:

```bash
# 1. Check remote is built
ls -lh remote/dist/assets/remoteEntry.js

# 2. Check remote is serving (after npm run dev:serve)
curl -I http://localhost:5001/assets/remoteEntry.js
# Should return: HTTP/1.1 200 OK

# 3. Check it's JavaScript (not HTML)
curl -s http://localhost:5001/assets/remoteEntry.js | head -c 100
# Should show: JavaScript code with "remote_app"
```

## 🐛 Common Issues

### Issue: "Failed to fetch dynamically imported module"
- **Cause**: Remote not built or not serving
- **Fix**: Run `npm run build` then `npm run dev:serve` in remote

### Issue: "Port 5001 is already in use"
```bash
# Kill existing process
lsof -ti:5001 | xargs kill -9

# Then restart
cd remote && npm run dev:serve
```

### Issue: Changes in remote not appearing
- **Cause**: Need to rebuild
- **Fix**: `cd remote && npm run build` then refresh browser

### Issue: "Cannot find module 'remote_app/Button'"
- **Cause**: TypeScript can't find the type declaration
- **Fix**: Already added in `host/src/remoteTypes.d.ts` - restart TS server

## 📚 Additional Resources

- `README.md` - Full project documentation
- `SETUP_GUIDE.md` - Detailed setup instructions
- `TROUBLESHOOTING.md` - Extended troubleshooting guide
- `start.sh` - Automated startup script

## 🎉 You're All Set!

Your micro-frontend setup is now correctly configured. Just remember:

1. **Build** remote first
2. **Serve** remote on 5001
3. **Start** host on 5000
4. **Enjoy** module federation! 🚀
