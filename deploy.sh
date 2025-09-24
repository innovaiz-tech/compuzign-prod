#!/bin/bash

# CompuZign GitHub Deployment Script
echo "🚀 Starting CompuZign GitHub deployment process..."

# Step 1: Clean previous builds
echo "🧹 Cleaning previous builds..."
npm run clean

# Step 2: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 3: Build for production
echo "🔨 Building for production..."
npm run build

# Step 4: Verify build
if [ -d "dist" ]; then
    echo "✅ Build completed successfully!"
    echo "📊 Build size:"
    du -sh dist/
else
    echo "❌ Build failed!"
    exit 1
fi

# Step 5: Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "🎉 Deployment process completed!"
echo "🌐 Website will be available at: https://innovaiz-tech.github.io"
echo "🔗 Custom domain: https://compuzign.com (after DNS setup)"
