#!/bin/bash

# Roma Restaurant - Build Verification Script
echo "🍽️ Roma Restaurant - Build Verification"
echo "========================================"

# Check if bun is installed
if ! command -v bun &> /dev/null; then
    echo "❌ Bun is not installed. Please install Bun first."
    exit 1
fi

echo "✅ Bun is installed"

# Install dependencies
echo "📦 Installing dependencies..."
bun install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed"

# Build CSS
echo "🎨 Building CSS..."
bun run css:build

if [ $? -ne 0 ]; then
    echo "❌ Failed to build CSS"
    exit 1
fi

echo "✅ CSS built successfully"

# Build application
echo "🔨 Building application..."
bun run build

if [ $? -ne 0 ]; then
    echo "❌ Failed to build application"
    exit 1
fi

echo "✅ Application built successfully"

# Check if dist directory exists and has content
if [ ! -d "dist" ]; then
    echo "❌ dist directory not found"
    exit 1
fi

if [ ! -f "dist/index.html" ]; then
    echo "❌ index.html not found in dist"
    exit 1
fi

if [ ! -f "dist/static/assets/frontend.js" ]; then
    echo "❌ frontend.js not found in dist/static/assets"
    exit 1
fi

if [ ! -f "dist/static/css/tw.css" ]; then
    echo "❌ tw.css not found in dist/static/css"
    exit 1
fi

echo "✅ All build artifacts present"

# Check file sizes
echo "📊 Build Statistics:"
echo "   - HTML: $(du -h dist/index.html | cut -f1)"
echo "   - JavaScript: $(du -h dist/static/assets/frontend.js | cut -f1)"
echo "   - CSS: $(du -h dist/static/css/tw.css | cut -f1)"
echo "   - Total: $(du -sh dist | cut -f1)"

echo ""
echo "🎉 Build verification completed successfully!"
echo "🚀 Ready for deployment to Vercel!"
echo ""
echo "Next steps:"
echo "1. Set up Google Maps API key"
echo "2. Push to GitHub"
echo "3. Connect to Vercel"
echo "4. Add environment variables"
echo "5. Deploy!"