# 🔐 Environment Variables Setup for ZIL Project

## 📁 **Environment Files Created:**

### **`.env.local`** - For local development

- Use this file when running `npm run dev` locally
- Already created in your project folder
- Contains placeholder values that need to be updated

### **⚠️ IMPORTANT SECURITY NOTE:**

The `.env.local` file contains sensitive information and should NEVER be uploaded to GitHub. It's already excluded by your `.gitignore` file.

---

## 🔧 **Required Environment Variables:**

### **1. Database (MongoDB)**

```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/zodongo"
```

**Get this from:** MongoDB Atlas (see MONGODB_SETUP.md)

### **2. Authentication**

```env
NEXTAUTH_SECRET="your-32-character-random-secret-key"
NEXTAUTH_URL="https://zodongo-int.com"
```

**Generate secret:** Use [generate-secret.vercel.app](https://generate-secret.vercel.app)

### **3. Email Configuration**

```env
SMTP_HOST="mail.zodongo-int.com"
SMTP_PORT="587"
SMTP_USER="noreply@zodongo-int.com"
SMTP_PASSWORD="your-email-password"
```

**Get this from:** Your hosting provider or email service

---

## 🚀 **For Vercel Deployment:**

### **Don't upload .env.local to Vercel!**

Instead, add these variables in Vercel dashboard:

1. Go to your Vercel project
2. Settings → Environment Variables
3. Add each variable one by one:

```
Name: DATABASE_URL
Value: mongodb+srv://username:password@cluster.mongodb.net/zodongo

Name: NEXTAUTH_SECRET
Value: your-32-character-random-secret

Name: NEXTAUTH_URL
Value: https://zodongo-int.com

Name: SMTP_HOST
Value: mail.zodongo-int.com

Name: SMTP_PORT
Value: 587

Name: SMTP_USER
Value: noreply@zodongo-int.com

Name: SMTP_PASSWORD
Value: your-email-password
```

---

## 📝 **How to Fill in the Values:**

### **DATABASE_URL:**

1. Follow `MONGODB_SETUP.md` to create MongoDB Atlas account
2. Get connection string
3. Replace placeholder in .env.local

### **NEXTAUTH_SECRET:**

1. Go to [generate-secret.vercel.app](https://generate-secret.vercel.app)
2. Copy the generated secret
3. Replace placeholder in .env.local

### **SMTP Settings:**

1. Contact your domain registrar or hosting provider
2. Set up email account: `noreply@zodongo-int.com`
3. Get SMTP server details
4. Replace placeholders in .env.local

---

## 🔍 **Testing Locally:**

1. Update `.env.local` with real values
2. Run your development server:
   ```bash
   npm run dev
   ```
3. Test contact forms and authentication
4. Fix any issues before deploying to Vercel

---

## ✅ **File Locations:**

```
zil/
├── .env.local          # ← Environment variables (LOCAL ONLY)
├── .env.example        # ← Template with placeholder values
├── .gitignore          # ← Excludes .env.local from Git
└── Other project files
```

---

## 🚨 **Security Checklist:**

- ✅ `.env.local` created
- ✅ `.env.local` in `.gitignore` (won't be uploaded to GitHub)
- ✅ Real values only in Vercel dashboard
- ✅ Use strong passwords for all accounts
- ✅ Don't share environment variables publicly

---

**🎯 Next Steps:**

1. Update `.env.local` with real values
2. Test locally with `npm run dev`
3. Add same values to Vercel environment variables
4. Deploy to production

**Your environment variables are now properly configured for the Zodongo International Limited website!**
