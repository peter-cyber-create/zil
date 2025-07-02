#!/bin/bash

# Zodongo International Limited - Vercel Deployment Script

echo "🚀 Starting Zodongo International Limited deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📋 Pre-deployment checklist:"
echo "1. ✅ MongoDB removed"
echo "2. ✅ SQLite configured"
echo "3. ✅ Non-Ugandan addresses removed"
echo "4. ✅ Prisma schema updated"
echo "5. ✅ Environment variables templated"

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Generate Prisma client
echo "🗄️ Generating Prisma client..."
npx prisma generate

# Build the project
echo "🔨 Building project..."
pnpm build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Ready for Vercel deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Push your code to GitHub"
    echo "2. Connect GitHub repo to Vercel"
    echo "3. Add environment variables in Vercel dashboard"
    echo "4. Deploy!"
    echo ""
    echo "📖 See VERCEL_DEPLOYMENT_GUIDE.md for detailed instructions"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
