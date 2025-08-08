#!/bin/bash
# Build script for Render deployment

echo "Installing dependencies..."
npm install

echo "Setting permissions..."
chmod +x node_modules/.bin/vite

echo "Building the application..."
npm run build

echo "Build completed successfully!" 