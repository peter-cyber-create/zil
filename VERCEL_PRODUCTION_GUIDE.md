# 🚀 VERCEL PRODUCTION DEPLOYMENT GUIDE

# Domain: zodongo-int.com (Already secured)

## 📋 **VERCEL ENVIRONMENT VARIABLES**

Add these EXACT variables in your Vercel Dashboard:

### **Database**

```
DATABASE_URL=file:./prod.db
```

### **Authentication**

```
NEXTAUTH_SECRET=generate-a-32-character-random-string-here
NEXTAUTH_URL=https://zodongo-int.com
SESSION_SECRET=generate-another-32-character-random-string
```

### **Email (Optional)**

```
SMTP_HOST=mail.zodongo-int.com
SMTP_PORT=587
SMTP_USER=noreply@zodongo-int.com
SMTP_PASSWORD=your-actual-email-password
```

## 🔐 **SECURITY: Generate Strong Secrets**

Run these commands to generate secure secrets:

```bash
# For NEXTAUTH_SECRET
openssl rand -hex 32

# For SESSION_SECRET
openssl rand -hex 32
```

Or use online generator: https://generate-secret.vercel.app/32

## 🚀 **DEPLOYMENT STEPS**

1. **Add Environment Variables**:

   - Go to Vercel Dashboard → zodongo-int.com project
   - Settings → Environment Variables
   - Add all variables above with REAL values

2. **Deploy**:

   - Push to GitHub (triggers auto-deploy)
   - Or manually trigger deploy in Vercel

3. **Test**:

   ```bash
   curl https://zodongo-int.com/api/health
   ```

4. **Verify**:
   - Visit: https://zodongo-int.com
   - Test login/register
   - Test contact forms
   - Test dashboard (after login)

## ✅ **PRODUCTION CHECKLIST**

- [ ] Domain secured: zodongo-int.com ✅
- [ ] Environment variables added to Vercel
- [ ] NEXTAUTH_SECRET generated (32 chars)
- [ ] SESSION_SECRET generated (32 chars)
- [ ] SMTP credentials configured
- [ ] Deploy triggered
- [ ] Health check passes
- [ ] Site loads correctly
- [ ] Forms work
- [ ] Dashboard accessible

## 🎯 **EXPECTED RESULTS**

- **Homepage**: https://zodongo-int.com ✅
- **Health Check**: https://zodongo-int.com/api/health ✅
- **Login**: https://zodongo-int.com/login ✅
- **Dashboard**: https://zodongo-int.com/dashboard ✅
- **Contact**: https://zodongo-int.com/contact ✅

The site should work perfectly with SQLite on Vercel! 🚀
