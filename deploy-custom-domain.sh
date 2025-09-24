#!/bin/bash

# CompuZign Custom Domain Deployment Script
echo "🚀 Starting CompuZign custom domain deployment..."

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
    echo ""
    echo "🌐 Ready for deployment to:"
    echo "   - GitHub Pages: https://innovaiz-tech.github.io"
    echo "   - Custom Domain: https://compuzign.com (after DNS setup)"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Push code to GitHub repository"
    echo "   2. Enable GitHub Pages in repository settings"
    echo "   3. Configure custom domain (compuzign.com)"
    echo "   4. Update DNS records in GoDaddy"
    echo "   5. Test deployment"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Deployment preparation completed!"
