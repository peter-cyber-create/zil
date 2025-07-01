# 🚀 Step-by-Step: Deploy ZIL to Vercel & Configure zodongo-int.com

## 📋 **PART 1: Push ZIL Repository to GitHub**

### **Step 1: Initialize Git Repository**
```bash
cd "c:\Users\And1\Desktop\zil"
git init
git add .
git commit -m "Zodongo International Limited - Ready for Production"
git branch -M main
```

### **Step 2: Create GitHub Repository**
1. Go to [github.com](https://github.com)
2. Click **"New repository"** (green button)
3. Repository name: **`zil`**
4. Description: "Zodongo International Limited Website"
5. Set to **Public** (so Vercel can access it)
6. Click **"Create repository"**

### **Step 3: Connect Local Repository to GitHub**
```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/zil.git
git push -u origin main
```

---

## 🚀 **PART 2: Deploy to Vercel**

### **Step 1: Sign Up for Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### **Step 2: Import ZIL Repository**
1. In Vercel dashboard, click **"New Project"**
2. Find your **`zil`** repository in the list
3. Click **"Import"** next to the zil repository
4. **Project Settings:**
   - Project Name: `zil` (or `zodongo-international`)
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build` (leave default)
   - Output Directory: `.next` (leave default)

### **Step 3: Configure Environment Variables**
Before deploying, click **"Environment Variables"** and add:

```
Name: DATABASE_URL
Value: mongodb+srv://username:password@cluster.mongodb.net/zodongo

Name: NEXTAUTH_SECRET
Value: your-32-character-random-secret-key

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

### **Step 4: Deploy**
1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `https://zil-abc123.vercel.app`

---

## 🌐 **PART 3: Configure zodongo-int.com Domain**

### **Step 1: Add Domain in Vercel**
1. In your Vercel project dashboard
2. Go to **Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter: `zodongo-int.com`
5. Click **"Add"**
6. Also add: `www.zodongo-int.com`

### **Step 2: Get DNS Configuration from Vercel**
Vercel will show you DNS records to add. You'll see something like:

```
Type: CNAME
Name: @
Value: cname.vercel-dns.com

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### **Step 3: Update DNS at Your Domain Registrar**

#### **If your domain is with:**

**Namecheap:**
1. Login to Namecheap
2. Go to Domain List → Manage
3. Advanced DNS tab
4. Add CNAME records as shown by Vercel

**GoDaddy:**
1. Login to GoDaddy
2. My Products → DNS
3. Add CNAME records as shown by Vercel

**Cloudflare:**
1. Login to Cloudflare
2. Select zodongo-int.com domain
3. DNS → Records
4. Add CNAME records as shown by Vercel

**Generic Steps for Any Registrar:**
1. Login to your domain registrar
2. Find DNS Management/DNS Records section
3. Add these records:
   ```
   Type: CNAME | Host: @ | Points to: cname.vercel-dns.com
   Type: CNAME | Host: www | Points to: cname.vercel-dns.com
   ```
4. Save changes

### **Step 4: Verify Domain Configuration**
1. DNS changes take 5-60 minutes to propagate
2. In Vercel, you'll see domain status change to "Valid"
3. Your site will be live at https://zodongo-int.com

---

## 🔧 **PART 4: Setup Required Services**

### **MongoDB Atlas (Database)**
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Sign up for FREE account
3. Create cluster
4. Create database user
5. Whitelist IP addresses (or allow all: 0.0.0.0/0)
6. Get connection string
7. Update DATABASE_URL in Vercel environment variables

### **Email Configuration**
Contact your hosting provider to set up:
- Email account: `noreply@zodongo-int.com`
- SMTP credentials
- Update SMTP variables in Vercel

---

## ✅ **VERIFICATION CHECKLIST**

After deployment, verify:
- [ ] https://zodongo-int.com loads correctly
- [ ] https://www.zodongo-int.com redirects properly
- [ ] All pages work (Home, About, Services, Contact)
- [ ] Contact forms send emails
- [ ] Mobile responsive design
- [ ] SSL certificate active (https://)
- [ ] Fast loading speeds

---

## 🚨 **TROUBLESHOOTING**

### **Common Issues:**

**Build Fails:**
- Check environment variables are set correctly
- Ensure DATABASE_URL is valid

**Domain Not Working:**
- Wait up to 24 hours for DNS propagation
- Double-check DNS records with your registrar
- Verify domain spelling in Vercel

**Contact Forms Not Working:**
- Check SMTP credentials
- Verify email server settings
- Test email account manually

---

## 📞 **SUPPORT CONTACTS**

- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **MongoDB Atlas:** Support chat in dashboard
- **Domain Issues:** Contact your domain registrar
- **DNS Help:** [whatsmydns.net](https://whatsmydns.net) to check propagation

---

**🎉 Following these steps will have your Zodongo International Limited website live at zodongo-int.com within 30-60 minutes!**
