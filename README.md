# Zodongo International Limited - Corporate Website

A modern, responsive corporate website built with Next.js, showcasing the services and expertise of Zodongo International Limited, based in Kampala, Uganda.

## 🌟 Features

- **Modern Design**: Clean, professional interface with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Authentication**: Secure user authentication with NextAuth.js
- **Dashboard**: Admin dashboard for managing inquiries and feedback
- **Contact Forms**: Multiple contact forms for different services
- **Email Integration**: Automated email notifications for form submissions
- **Database**: SQLite database with Prisma ORM
- **Production Ready**: Optimized for Vercel deployment

## 🚀 Live Website

**Production URL**: [https://zodongo-int.com](https://zodongo-int.com)

## 🛠️ Technology Stack

- **Framework**: Next.js 15.2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js
- **Email**: Nodemailer
- **Deployment**: Vercel
- **Package Manager**: pnpm

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (frontend)/        # Public pages
│   ├── actions/           # Server actions
│   └── api/               # API routes
├── components/            # React components
├── lib/                   # Utility functions
├── prisma/               # Database schema
├── public/               # Static assets
└── types/                # TypeScript types
```

## 🔧 Development Setup

1. **Clone the repository**

   ```bash
   git clone [your-repo-url]
   cd zil
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**

   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment to Vercel

This project is optimized for Vercel deployment. See the comprehensive deployment guide:

📖 **[VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)**

### Quick Deploy Steps:

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. **Deploy to Vercel**

   - Import your GitHub repository on [Vercel](https://vercel.com)
   - Add environment variables
   - Deploy!

3. **Configure Domain**
   - Add `zodongo-int.com` in Vercel dashboard
   - Update DNS records as instructed

## 📧 Email Configuration

For production email functionality:

```env
SMTP_HOST="your-smtp-host"
SMTP_PORT="587"
SMTP_USER="your-smtp-username"
SMTP_PASS="your-smtp-password"
MAIL_RECEIVER_ADDRESS="info@zodongo-int.com"
```

## 🔐 Authentication

The site uses NextAuth.js for authentication. Configure Google OAuth in your environment:

```env
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
NEXTAUTH_SECRET="your-32-character-secret"
NEXTAUTH_URL="https://zodongo-int.com"
```

## 📊 Database

- **Development**: SQLite file (`dev.db`)
- **Production**: SQLite on Vercel (automatically managed)
- **ORM**: Prisma for type-safe database operations

### Database Schema:

- Users (authentication)
- Contacts (contact form submissions)
- Quotations (quotation requests)
- Feedback (user feedback)

## 🔧 Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run linting (disabled)

# Database
pnpm db:generate      # Generate Prisma client
pnpm db:push          # Push schema to database
pnpm db:studio        # Open Prisma Studio
```

## 🌍 Location Focus

This website is specifically configured for Zodongo International Limited's Uganda operations:

- **Head Office**: Kampala, Uganda
- **Address**: P.O.Box 149549 Athina club house Kololo, Kampala, Uganda
- **Contact**: +256 779 201 606, +256 779 933 268, +256 772 255 109
- **Email**: info@zodongo-int.com

_Note: All non-Ugandan addresses have been removed as requested._

## 🚨 Important Notes

- ✅ MongoDB completely removed
- ✅ Migrated to SQLite + Prisma
- ✅ ESLint removed for cleaner build
- ✅ Production-ready for Vercel
- ✅ Only Ugandan address retained
- ✅ Optimized for zodongo-int.com domain

## 📞 Support

For technical support or questions about this website:

- **Email**: info@zodongo-int.com
- **Website**: [https://zodongo-int.com](https://zodongo-int.com)

---

Built with ❤️ for Zodongo International Limited
