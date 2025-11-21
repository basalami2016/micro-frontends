#!/bin/bash

# Script to start both micro-frontend apps in the correct order

echo "🚀 Starting Micro-Frontend Applications"
echo "========================================"
echo ""

# Navigate to remote directory
cd "$(dirname "$0")/remote"

echo "📦 Step 1: Building remote app..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Remote build failed. Please check the errors above."
    exit 1
fi

echo "✅ Remote app built successfully!"
echo ""

echo "🌐 Step 2: Starting remote app on port 5001..."
npm run dev:serve &
REMOTE_PID=$!

# Wait for remote to be ready
echo "⏳ Waiting for remote app to be ready..."
sleep 3

# Check if remote is serving the file
if curl -s http://localhost:5001/assets/remoteEntry.js | grep -q "remote_app"; then
    echo "✅ Remote app is ready at http://localhost:5001"
else
    echo "❌ Remote app failed to start or remoteEntry.js not found"
    kill $REMOTE_PID 2>/dev/null
    exit 1
fi

echo ""
echo "🏠 Step 3: Starting host app on port 5000..."
cd ../host
npm run dev

# Cleanup on exit
trap "kill $REMOTE_PID 2>/dev/null" EXIT
