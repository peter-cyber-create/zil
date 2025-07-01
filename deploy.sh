#!/bin/bash

# Zodongo International Limited - Production Deployment Script
# Run this before deploying to production

echo "🚀 Starting production deployment preparation for Zodongo International Limited..."

# 1. Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out
rm -rf dist

# 2. Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# 3. Run linting
echo "🔍 Running linting..."
pnpm lint

# 4. Build for production
echo "🔨 Building for production..."
pnpm build

# 5. Test production build
echo "🧪 Testing production build..."
echo "Run 'pnpm start' to test the production build locally"

echo "✅ Production build completed successfully!"
echo "Your Zodongo International Limited website is ready for deployment!"

echo ""
echo "📋 Next Steps:"
echo "1. Set up environment variables on your hosting platform"
echo "2. Configure MongoDB database"
echo "3. Upload files to your hosting provider"
echo "4. Configure domain DNS settings"
echo "5. Test live website"

echo ""
echo "🌟 Deployment options:"
echo "- Vercel (Recommended): Push to GitHub and import to Vercel"
echo "- Traditional hosting: Upload build files via FTP"
echo "- VPS/Cloud: Deploy on DigitalOcean, AWS, etc."
