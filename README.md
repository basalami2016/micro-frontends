# Micro-Frontend Setup with Vite Plugin Federation

This project demonstrates a micro-frontend architecture using `vite-plugin-federation`, React, and TypeScript.

## Project Structure

```
micro-fronteds/
├── host/          # Host application (port 5000)
└── remote/        # Remote application (port 5001)
```

## Features

- **Host App**: Main application that consumes remote modules
- **Remote App**: Provides a shared Button component to the host
- **Module Federation**: Uses `@originjs/vite-plugin-federation` for runtime module sharing
- **Shared Dependencies**: React and React-DOM are shared between applications

## Setup Instructions

### 1. Install Dependencies

Navigate to each application directory and install dependencies:

```bash
# Install host dependencies
cd host
npm install

# Install remote dependencies
cd ../remote
npm install
```

### 2. Run the Applications

**IMPORTANT**: `@originjs/vite-plugin-federation` requires the remote app to be **built** first, then served.

#### Option A: Use the startup script (Easiest)

```bash
cd /home/../micro-fronteds
./start.sh
```

#### Option B: Manual startup

**Terminal 1 - Remote App:**
```bash
cd remote

# Build the remote app first
npm run build

# Then serve it
npm run dev:serve
```

Wait until you see: `http://localhost:5001/`

**Terminal 2 - Host App:**
```bash
cd host
npm run dev
```

### 3. View the Applications

- **Host App**: http://localhost:5000 - Shows the main application with the remote button
- **Remote App**: http://localhost:5001 - Shows the built remote application

### 4. Development Workflow

When you make changes to the remote app:

1. The remote will rebuild automatically (watch mode is enabled via `npm run dev`)
2. Refresh the host app in your browser to see changes

For the host app, Vite's HMR will work normally.

## How It Works

### Remote App Configuration

The remote app (`remote/vite.config.ts`) exposes the Button component:

```typescript
federation({
  name: 'remote_app',
  filename: 'remoteEntry.js',
  exposes: {
    './Button': './src/components/Button.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true }
  }
})
```

### Host App Configuration

The host app (`host/vite.config.ts`) consumes the remote module:

```typescript
federation({
  name: 'host_app',
  remotes: {
    remote_app: 'http://localhost:5001/assets/remoteEntry.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true }
  }
})
```

### Loading Remote Components

In the host app, remote components are loaded dynamically:

```typescript
const RemoteButton = lazy(() => import('remote_app/Button'))

<Suspense fallback={<div>Loading...</div>}>
  <RemoteButton />
</Suspense>
```

## Building for Production

```bash
# Build remote app first
cd remote
npm run build

# Then build host app
cd ../host
npm run build
```

## Key Points

- The **remote app must be running** before the host app can load remote components
- Both apps share React and React-DOM to avoid duplication
- Components are loaded lazily at runtime
- Each app can run independently during development
- The `@ts-ignore` comment in the host's App.tsx is needed because TypeScript doesn't know about the remote module types

## Troubleshooting

- If you get errors about remote modules not found, ensure the remote app is running first
- Check that ports 5000 and 5001 are available
- Clear browser cache if you see stale content after changes
