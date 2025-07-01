# 🗄️ MongoDB Atlas Setup for ZIL Project

## 🚀 **Quick Setup (5 minutes)**

### **Step 1: Create MongoDB Atlas Account**
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Click **"Try Free"**
3. Sign up with email or Google account
4. Choose **"Learn with hands-on experience"**
5. Select **"JavaScript"** as preferred language

### **Step 2: Create Cluster**
1. Choose **"M0 Sandbox"** (FREE tier)
2. Cloud Provider: **AWS** (recommended)
3. Region: Choose closest to your users (e.g., US East, Europe)
4. Cluster Name: `zodongo-cluster`
5. Click **"Create"**

### **Step 3: Create Database User**
1. In the **"Security"** section, click **"Database Access"**
2. Click **"Add New Database User"**
3. Authentication Method: **Password**
4. Username: `zodongo-admin`
5. Password: Generate strong password (save it!)
6. Database User Privileges: **Read and write to any database**
7. Click **"Add User"**

### **Step 4: Configure Network Access**
1. Go to **"Network Access"**
2. Click **"Add IP Address"**
3. Choose **"Allow Access from Anywhere"** (0.0.0.0/0)
   - This allows Vercel to connect from any IP
4. Click **"Confirm"**

### **Step 5: Get Connection String**
1. Go to **"Clusters"**
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Driver: **Node.js**
5. Version: **4.1 or later**
6. Copy the connection string (looks like):
   ```
   mongodb+srv://zodongo-admin:<password>@zodongo-cluster.abc123.mongodb.net/?retryWrites=true&w=majority
   ```
7. Replace `<password>` with your actual password
8. Add database name: `/zodongo` at the end before the `?`

### **Final Connection String Example:**
```
mongodb+srv://zodongo-admin:yourpassword@zodongo-cluster.abc123.mongodb.net/zodongo?retryWrites=true&w=majority
```

---

## 🔧 **Add to Vercel Environment Variables**

1. In Vercel project settings
2. Go to **Environment Variables**
3. Add:
   ```
   Name: DATABASE_URL
   Value: mongodb+srv://zodongo-admin:yourpassword@zodongo-cluster.abc123.mongodb.net/zodongo?retryWrites=true&w=majority
   ```
4. Click **"Save"**
5. **Redeploy** your project for changes to take effect

---

## 📊 **Database Collections (Auto-created)**

Your application will automatically create these collections:
- `users` - User accounts
- `accounts` - OAuth accounts  
- `sessions` - User sessions
- `contacts` - Contact form submissions
- `feedback` - Feedback submissions
- `quotations` - Quotation requests

---

## ✅ **Verification**

Test your database connection:
1. Deploy your application to Vercel
2. Try registering a new user
3. Submit a contact form
4. Check MongoDB Atlas dashboard for data

---

## 🚨 **Security Notes**

- ✅ Keep database password secure
- ✅ Use strong passwords
- ✅ Monitor usage in Atlas dashboard
- ✅ Set up alerts for unusual activity

---

## 💰 **Free Tier Limits**

- **Storage:** 512 MB
- **RAM:** Shared
- **Connections:** 500 concurrent
- **Network:** No data transfer charges

*Perfect for your Zodongo International website!*

---

**🎉 Your MongoDB Atlas database is ready for production!**
