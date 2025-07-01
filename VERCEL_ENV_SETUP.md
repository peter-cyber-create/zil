# 🔧 VERCEL ENVIRONMENT VARIABLES SETUP

## ❗ CRITICAL: Your 404 Error Fix

The 404 error is caused by missing environment variables on Vercel. Your local `.env` file is NOT automatically uploaded to Vercel for security reasons.

## 🚀 SOLUTION: Add These to Vercel Dashboard

### Step 1: Go to Vercel Dashboard

1. Visit [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your **zil** project
3. Go to **Settings** → **Environment Variables**

### Step 2: Add These Exact Variables

Copy and paste these into Vercel:

```
Variable Name: DATABASE_URL
Value: mongodb+srv://peterpaulwagidoso:T8tcc2uKSZ1kMiKL@cluster0.xjiutih.mongodb.net/zodongo?retryWrites=true&w=majority&appName=Cluster0
Environment: Production, Preview, Development
```

```
Variable Name: SESSION_SECRET
Value: a-super-secret-32-char-key-for-auth
Environment: Production, Preview, Development
```

```
Variable Name: NEXTAUTH_SECRET
Value: a-super-secret-32-char-key-for-auth
Environment: Production, Preview, Development
```

```
Variable Name: NEXTAUTH_URL
Value: https://zodongo-int.com
Environment: Production, Preview, Development
```

```
Variable Name: SMTP_HOST
Value: mail.zodongo-int.com
Environment: Production, Preview, Development
```

```
Variable Name: SMTP_PORT
Value: 587
Environment: Production, Preview, Development
```

```
Variable Name: SMTP_USER
Value: noreply@zodongo-int.com
Environment: Production, Preview, Development
```

```
Variable Name: SMTP_PASSWORD
Value: your-email-password-here
Environment: Production, Preview, Development
```

### Step 3: Redeploy

After adding all variables, click **"Redeploy"** in the Deployments tab.

## 🎯 Expected Result

After setting environment variables and redeploying:

- ✅ `/api/health` should return success
- ✅ `/login` should work
- ✅ `/dashboard/contacts` should work after login
- ❌ No more 404 errors

## 🔒 Security Note

**IMPORTANT**: Change your MongoDB password since it's been exposed in this conversation!

1. Go to MongoDB Atlas
2. Database Access → Users
3. Edit your user and generate a new password
4. Update the `DATABASE_URL` with the new password

This will protect your database from unauthorized access.
