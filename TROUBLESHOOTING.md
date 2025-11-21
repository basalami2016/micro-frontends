# Troubleshooting Module Federation Issues

## Common Issue: "Failed to fetch dynamically imported module"

This error typically occurs when:

1. **Remote app is not running**: The remote app must be started BEFORE the host app
2. **Wrong port or URL**: The remote URL in host's vite.config.ts doesn't match the remote server
3. **CORS issues**: Cross-origin requests are blocked

## Solutions Applied

### 1. Fixed Remote URL Path
Changed from `/assets/remoteEntry.js` to `/remoteEntry.js` for dev mode.

### 2. Added CORS Support
Added `server: { cors: true }` to remote's vite.config.ts

### 3. Added Type Declarations
Created `remoteTypes.d.ts` for better TypeScript support

## Steps to Fix

### Step 1: Stop Both Applications
Press `Ctrl+C` in both terminal windows to stop the servers.

### Step 2: Start Remote First
```bash
cd remote
npm run dev
```
Wait until you see: `Local: http://localhost:5001/`

### Step 3: Verify Remote Entry
Open http://localhost:5001/remoteEntry.js in your browser. You should see JavaScript code (not a 404 error).

### Step 4: Start Host
In a separate terminal:
```bash
cd host
npm run dev
```

### Step 5: Test
Open http://localhost:5000 - you should see the host app with the remote button.

## Debugging Tips

### Check if Remote is Running
```bash
curl http://localhost:5001/remoteEntry.js
```
Should return JavaScript code, not an error.

### Check Browser Console
Open DevTools (F12) and look for:
- Network tab: Check if remoteEntry.js is loading (Status 200)
- Console tab: Look for specific error messages

### Verify Ports
Make sure ports 5000 and 5001 are not used by other processes:
```bash
# Linux/Mac
lsof -i :5000
lsof -i :5001

# Windows
netstat -ano | findstr :5000
netstat -ano | findstr :5001
```

## Still Having Issues?

1. Clear browser cache (Ctrl+Shift+Delete)
2. Delete `node_modules` and reinstall:
   ```bash
   cd host && rm -rf node_modules && npm install
   cd ../remote && rm -rf node_modules && npm install
   ```
3. Check that both apps use the same React version
4. Ensure `type: "module"` is in both package.json files
