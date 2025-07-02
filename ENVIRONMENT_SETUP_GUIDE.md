# 🔐 Environment Variables Setup Guide - Zodongo International Limited

## 🎯 **How to Generate Secure Secrets**

### 1. **NEXTAUTH_SECRET** (REQUIRED)

This is used for JWT token encryption and session security.

**Generate using one of these methods:**

#### Option A: OpenSSL (Recommended)

```bash
openssl rand -base64 32
```

#### Option B: Node.js

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

#### Option C: Online Generator

Visit: [generate-secret.vercel.app/32](https://generate-secret.vercel.app/32)

**Example output:** `zB97m0xc9y8iifuZqWzchbNJY/lqe+An6Rk4BEkI89o=`

---

## 📧 **Email Configuration (Optional)**

### For Production Email:

```env
SMTP_HOST="smtp.gmail.com"              # or your email provider
SMTP_PORT="587"                         # TLS port
SMTP_USER="your-email@gmail.com"        # your email
SMTP_PASS="your-app-password"           # Gmail: use App Password
MAIL_RECEIVER_ADDRESS="info@zodongo-int.com"
```

### Popular SMTP Providers:

#### Gmail:

```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
# Note: Enable 2FA and use App Password
```

#### Outlook/Hotmail:

```env
SMTP_HOST="smtp-mail.outlook.com"
SMTP_PORT="587"
```

#### Custom Domain:

```env
SMTP_HOST="mail.zodongo-int.com"
SMTP_PORT="587"
# Contact your hosting provider for settings
```

---

## 🌐 **Complete .env Template**

```env
# 🗄️ Database Configuration
DATABASE_URL="file:./dev.db"

# 🔐 Authentication (GENERATE THESE!)
NEXTAUTH_SECRET="zB97m0xc9y8iifuZqWzchbNJY/lqe+An6Rk4BEkI89o="
NEXTAUTH_URL="https://zodongo-int.com"
SESSION_SECRET="zB97m0xc9y8iifuZqWzchbNJY/lqe+An6Rk4BEkI89o="

# 🔍 Google OAuth (Optional - for Google login)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# 📧 Email Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
MAIL_RECEIVER_ADDRESS="info@zodongo-int.com"
```

---

## 🚀 **For Vercel Deployment**

### Add these in Vercel Dashboard → Settings → Environment Variables:

| Variable                | Value                     | Notes                    |
| ----------------------- | ------------------------- | ------------------------ |
| `DATABASE_URL`          | `file:./dev.db`           | SQLite database          |
| `NEXTAUTH_SECRET`       | `[generated-secret]`      | Use the generated secret |
| `NEXTAUTH_URL`          | `https://zodongo-int.com` | Your domain              |
| `SMTP_HOST`             | `smtp.gmail.com`          | Your email provider      |
| `SMTP_PORT`             | `587`                     | Standard TLS port        |
| `SMTP_USER`             | `your-email@gmail.com`    | Your email               |
| `SMTP_PASS`             | `your-app-password`       | Email password           |
| `MAIL_RECEIVER_ADDRESS` | `info@zodongo-int.com`    | Where to receive emails  |

---

## 🔒 **Security Best Practices**

### ✅ **DO:**

- Generate unique secrets for each environment
- Use strong, random passwords
- Enable 2FA for email accounts
- Keep secrets in environment variables only
- Use different secrets for dev/staging/production

### ❌ **DON'T:**

- Commit secrets to Git (use .gitignore)
- Share secrets in plain text
- Reuse secrets across projects
- Use weak/predictable passwords

---

## 🧪 **Testing Your Configuration**

### 1. **Test Authentication:**

```bash
pnpm dev
# Visit: http://localhost:3000/login
```

### 2. **Test Email:**

```bash
# Submit contact form and check if email arrives
# Check Vercel function logs for errors
```

### 3. **Test Database:**

```bash
# Register a user, check if data persists
npx prisma studio  # View database
```

---

## 🆘 **Troubleshooting**

### Common Issues:

1. **"Invalid NEXTAUTH_SECRET"**

   - Regenerate with: `openssl rand -base64 32`
   - Ensure no extra quotes or spaces

2. **Email not sending**

   - Check SMTP credentials
   - Enable "Less secure apps" or use App Password
   - Verify port (587 for TLS, 465 for SSL)

3. **Database errors**
   - Run: `npx prisma generate && npx prisma db push`
   - Check DATABASE_URL format

---

**🎯 Your environment is now properly configured for production deployment!**
