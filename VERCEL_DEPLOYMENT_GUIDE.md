# Zodongo International Limited - Vercel Production Deployment Guide

## Prerequisites

1. **GitHub Repository**: Ensure your code is pushed to GitHub
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Domain**: You mentioned hosting on `zodongo-int.com`

## Step 1: Environment Variables Setup

In your Vercel dashboard, add these environment variables:

### Required Environment Variables

```env
# Database (SQLite file will be created automatically)
DATABASE_URL="file:./dev.db"

# Authentication
NEXTAUTH_SECRET="your-nextauth-secret-here"
NEXTAUTH_URL="https://zodongo-int.com"

# Google OAuth (if using Google login)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email Configuration
SMTP_HOST="your-smtp-host"
SMTP_PORT="587"
SMTP_USER="your-smtp-username"
SMTP_PASS="your-smtp-password"
MAIL_RECEIVER_ADDRESS="info@zodongo-int.com"
```

### How to Generate NEXTAUTH_SECRET

Run this command locally:

```bash
openssl rand -base64 32
```

## Step 2: Deploy to Vercel

### Option A: Via Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Next.js
   - **Build Command**: `pnpm build`
   - **Output Directory**: `.next`
   - **Install Command**: `pnpm install`
5. Add all environment variables listed above
6. Click "Deploy"

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Step 3: Domain Configuration

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain: `zodongo-int.com`
4. Configure DNS records as instructed by Vercel

## Step 4: Database Setup

Since we're using SQLite with Prisma:

1. The database file will be created automatically on first deployment
2. To initialize with your schema:
   ```bash
   # This is automatically handled by the build process
   npx prisma db push
   ```

## Step 5: Post-Deployment Verification

### Test these URLs after deployment:

- `https://zodongo-int.com` - Homepage
- `https://zodongo-int.com/api/health` - Health check
- `https://zodongo-int.com/login` - Authentication
- `https://zodongo-int.com/dashboard` - Dashboard (after login)
- `https://zodongo-int.com/contact` - Contact form
- `https://zodongo-int.com/location` - Location page (Uganda only)

### Test Features:

- [ ] Contact form submission
- [ ] Quotation form submission
- [ ] Feedback form submission
- [ ] User registration/login
- [ ] Dashboard functionality
- [ ] Email notifications

## Step 6: Monitoring and Logs

- **Vercel Dashboard**: Check function logs and build logs
- **Real-time Logs**: `vercel logs --follow`
- **Analytics**: Enable Vercel Analytics in project settings

## Troubleshooting

### Common Issues:

1. **Database Connection Errors**

   - Ensure `DATABASE_URL` is set correctly
   - SQLite files are created automatically on Vercel

2. **Build Failures**

   - Check that all dependencies are in `package.json`
   - Ensure Prisma client is generated: `npx prisma generate`

3. **Environment Variables**

   - Verify all required env vars are set in Vercel dashboard
   - Check variable names match exactly

4. **Email Issues**
   - Verify SMTP credentials
   - Test email configuration locally first

## Production Checklist

- [ ] All environment variables configured
- [ ] Domain DNS configured
- [ ] SSL certificate active (automatic with Vercel)
- [ ] Database schema deployed
- [ ] Email functionality tested
- [ ] Forms working correctly
- [ ] Authentication working
- [ ] Only Ugandan address displayed
- [ ] Error monitoring setup
- [ ] Backup strategy in place

## Security Considerations

1. **Environment Variables**: Never commit secrets to Git
2. **Database**: SQLite is suitable for small to medium applications
3. **Authentication**: NEXTAUTH_SECRET should be unique and secure
4. **CORS**: Configure properly for your domain
5. **Rate Limiting**: Consider implementing for API routes

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Prisma Documentation**: [prisma.io/docs](https://prisma.io/docs)

---

**Note**: This deployment is optimized for the Uganda-focused version of Zodongo International Limited website with all non-Ugandan addresses removed.
