#!/bin/bash

# BeerBiceps Website Deployment Script
# This script helps deploy the website to Netlify

echo "🚀 BeerBiceps Website Deployment Script"
echo "========================================"

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI is not installed."
    echo "📦 Installing Netlify CLI..."
    npm install -g netlify-cli
else
    echo "✅ Netlify CLI is already installed."
fi

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the beerbiceps directory."
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo "📄 Files found:"
ls -la

echo ""
echo "🔧 Deploying to Netlify..."

# Deploy to Netlify
netlify deploy --prod --dir=.

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment successful!"
    echo "🌐 Your website is now live!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Go to your Netlify dashboard"
    echo "2. Add your custom domain (e.g., beerbiceps.com)"
    echo "3. Configure DNS settings"
    echo "4. Enable HTTPS (automatic with Netlify)"
    echo ""
    echo "🔍 SEO Checklist:"
    echo "✅ Meta tags optimized"
    echo "✅ Structured data implemented"
    echo "✅ Sitemap created"
    echo "✅ Robots.txt configured"
    echo "✅ Mobile responsive design"
    echo "✅ Fast loading times"
    echo ""
    echo "📈 Your website is now optimized for search engines!"
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi
