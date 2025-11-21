#!/bin/bash

# Kill any existing processes
echo "Stopping any existing processes..."
pkill -9 -f "vite preview.*5001" 2>/dev/null
pkill -9 -f "vite preview.*5002" 2>/dev/null
sleep 2

# Start SSCS App (Port 5001)
echo "Starting SSCS App on port 5001..."
cd /home/basalami/niqflex/micro-fronteds/sscs-app
nohup npm run dev:serve > /tmp/sscs-app.log 2>&1 &
SSCS_PID=$!
echo "SSCS App PID: $SSCS_PID"
sleep 4

# Start OSS App (Port 5002)
echo "Starting OSS App on port 5002..."
cd /home/basalami/niqflex/micro-fronteds/oss-app
nohup npm run dev:serve > /tmp/oss-app.log 2>&1 &
OSS_PID=$!
echo "OSS App PID: $OSS_PID"
sleep 4

# Verify remote apps are running
echo ""
echo "Checking remote apps..."
sleep 2

if lsof -ti:5001 > /dev/null; then
    echo "✅ SSCS App running on port 5001"
else
    echo "❌ SSCS App NOT running on port 5001"
    echo "Check log: tail -f /tmp/sscs-app.log"
fi

if lsof -ti:5002 > /dev/null; then
    echo "✅ OSS App running on port 5002"
else
    echo "❌ OSS App NOT running on port 5002"
    echo "Check log: tail -f /tmp/oss-app.log"
fi

echo ""
echo "Testing endpoints..."
curl -s -o /dev/null -w "SSCS remoteEntry (5001): %{http_code}\n" http://localhost:5001/assets/remoteEntry.js
curl -s -o /dev/null -w "OSS remoteEntry (5002): %{http_code}\n" http://localhost:5002/assets/remoteEntry.js

echo ""
echo "Now run in another terminal:"
echo "cd /home/basalami/niqflex/micro-fronteds/host && npm run dev"
echo ""
echo "To view logs:"
echo "  tail -f /tmp/sscs-app.log"
echo "  tail -f /tmp/oss-app.log"
