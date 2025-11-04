# Complete Setup Guide - Hire Camp Recruiting Services

This guide will walk you through setting up and running the Hire Camp Recruiting Services website from scratch.

## 📋 Table of Contents

1. [System Requirements](#system-requirements)
2. [Installation Steps](#installation-steps)
3. [Running the Application](#running-the-application)
4. [Building for Production](#building-for-production)
5. [Deployment Options](#deployment-options)
6. [Troubleshooting](#troubleshooting)
7. [Customization Guide](#customization-guide)

---

## 🖥️ System Requirements

### Required Software

1. **Node.js** (v16.x or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`
   - Should display: v16.x.x or higher

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`
   - Should display: 8.x.x or higher

### Optional Software

- **Git** (for version control)
- **VS Code** (recommended code editor)
- **Chrome/Firefox** (for development and testing)

---

## 🚀 Installation Steps

### Step 1: Extract the Project

If you received a ZIP file:

```bash
# Windows
1. Right-click the ZIP file
2. Select "Extract All"
3. Choose destination folder
4. Click "Extract"

# Mac
1. Double-click the ZIP file
2. It will extract automatically

# Linux
unzip hire-camp-recruiting.zip
```

### Step 2: Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter
- Navigate to project folder: `cd path\to\hire-camp-recruiting`

**Mac/Linux:**
- Open Terminal
- Navigate to project folder: `cd path/to/hire-camp-recruiting`

### Step 3: Install Dependencies

Run the following command in the project directory:

```bash
npm install
```

This will install all required packages. It may take 2-5 minutes depending on your internet speed.

**What gets installed:**
- React and React DOM
- Tailwind CSS
- TypeScript
- Vite (build tool)
- UI component libraries
- Icon libraries

### Step 4: Verify Installation

Check if installation was successful:

```bash
npm list --depth=0
```

You should see a list of installed packages without any errors.

---

## ▶️ Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

**Expected Output:**
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/
➜  press h to show help
```

### Accessing the Application

1. **Automatically:** Browser should open automatically
2. **Manually:** Open your browser and go to `http://localhost:5173`

### What You Should See

✅ Red and white header with "HIRE CAMP" branding
✅ Hero section with "TALENT HAS NO BORDERS!"
✅ 12 program cards with details
✅ Search and filter functionality
✅ Contact section with Hyderabad address
✅ Footer with company information

---

## 🏗️ Building for Production

### Create Production Build

```bash
npm run build
```

**What happens:**
- TypeScript files are compiled
- React components are bundled
- CSS is optimized and minified
- Code is optimized for performance
- Output is created in `dist` folder

### Preview Production Build

Before deploying, preview the production build locally:

```bash
npm run preview
```

This starts a local server to preview the production build at `http://localhost:4173`

---

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Free)

1. **Sign up at** https://netlify.com
2. **Drag and drop** the `dist` folder to Netlify
3. **Your site is live!**

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 2: Vercel (Free)

1. **Sign up at** https://vercel.com
2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```
3. **Deploy:**
   ```bash
   vercel --prod
   ```

### Option 3: GitHub Pages (Free)

1. **Create GitHub repository**
2. **Push your code**
3. **Enable GitHub Pages** in repository settings
4. **Set build directory** to `dist`

### Option 4: Traditional Web Hosting

1. **Build the project:** `npm run build`
2. **Upload `dist` folder** to your web hosting via FTP
3. **Configure domain** to point to the uploaded files

---

## 🔧 Troubleshooting

### Issue: "npm: command not found"

**Solution:**
- Install Node.js from https://nodejs.org/
- Restart your terminal after installation
- Verify: `node --version`

### Issue: "Port 5173 already in use"

**Solution:**
```bash
# Kill the process using the port
# Windows
netstat -ano | findstr :5173
taskkill /PID <process_id> /F

# Mac/Linux
lsof -ti:5173 | xargs kill -9
```

### Issue: "Module not found" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: WhatsApp link not working

**Solution:**
- Make sure phone number format is correct: `919063166195` (with country code)
- Test the WhatsApp link in a browser that has WhatsApp Web access
- On mobile, WhatsApp app should be installed

### Issue: Styles not loading

**Solution:**
```bash
# Clear cache and rebuild
rm -rf dist
npm run build
npm run dev
```

---

## 🎨 Customization Guide

### Changing Colors

**Primary Color (Red/Maroon):**

Edit these files:
- `App.tsx` - Look for `bg-red-600`, `text-red-600`, etc.
- `components/ProgramCard.tsx` - Card styling
- `styles/globals.css` - Global color variables

**Example: Change to Blue**
```tsx
// Replace all instances of:
bg-red-600 → bg-blue-600
text-red-600 → text-blue-600
hover:bg-red-700 → hover:bg-blue-700
```

### Adding/Editing Programs

Edit `App.tsx`, find the `programs` array:

```typescript
{
  id: 13, // New unique ID
  category: "Full Stack", // Category for filtering
  title: "Your Program Name",
  description: "Program description here",
  duration: "6 Months",
  fee: "₹30,000",
  technologies: ["Tech1", "Tech2", "Tech3"],
  mode: "Online & Offline",
  batchSize: "Max 25",
  level: "Beginner to Advanced",
  popular: true // Shows "Most Popular" badge
}
```

### Changing Contact Information

Edit `App.tsx`, find the Contact Section and Footer:

```typescript
// Phone
<a href="tel:YOUR_PHONE">+91 YOUR_PHONE</a>

// Email
<a href="mailto:YOUR_EMAIL">YOUR_EMAIL</a>

// WhatsApp
const whatsappUrl = `https://wa.me/91YOUR_PHONE?text=...`;
```

### Modifying WhatsApp Message

Edit `components/ProgramCard.tsx`, find `handleEnrollClick`:

```typescript
const message = `Your custom message here
*Program:* ${title}
Add any fields you want...`;
```

---

## 📱 Testing WhatsApp Integration

### Desktop Testing
1. Open WhatsApp Web in your browser
2. Click "Enroll Now" on any program
3. New tab opens with WhatsApp Web
4. Message is pre-filled with program details

### Mobile Testing
1. Access the site on mobile browser
2. Click "Enroll Now"
3. WhatsApp app opens automatically
4. Message is pre-filled

---

## 📊 Understanding the Project Structure

```
hire-camp-recruiting/
│
├── index.html              # Entry HTML file
├── main.tsx                # React app entry point
├── App.tsx                 # Main application component
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
│
├── components/
│   ├── ProgramCard.tsx     # Program card component
│   ├── figma/
│   │   └── ImageWithFallback.tsx  # Image component
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── tabs.tsx
│       └── ...
│
└── styles/
    └── globals.css         # Global styles + Tailwind
```

---

## 🔑 Key Features Explained

### 1. Program Filtering
- Users can filter by category (Full Stack, Frontend, etc.)
- Search by technology name
- Implemented in `App.tsx` using React state

### 2. WhatsApp Integration
- Click "Enroll Now" → Opens WhatsApp
- Pre-filled message with program details
- Works on desktop (WhatsApp Web) and mobile (WhatsApp app)

### 3. Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Tailwind CSS breakpoints: `sm:`, `md:`, `lg:`

### 4. SEO Optimized
- Meta tags in `index.html`
- Semantic HTML structure
- Accessible components

---

## 🆘 Getting Help

### Documentation
- **React:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/
- **Vite:** https://vitejs.dev/

### Contact Support
- **Email:** info@hirecamp.in
- **Phone:** +91 9063166195
- **WhatsApp:** +91 9063166195

---

## ✅ Launch Checklist

Before going live, verify:

- [ ] All contact information is correct
- [ ] WhatsApp link works on mobile and desktop
- [ ] All program details are accurate
- [ ] Pricing is correct (₹25,000 - ₹35,000)
- [ ] Images load properly
- [ ] Site is responsive on mobile
- [ ] Search and filters work
- [ ] No console errors in browser
- [ ] Site loads quickly
- [ ] All links work

---

## 🎉 You're All Set!

Your Hire Camp Recruiting Services website is ready to launch. If you followed this guide, you should have a fully functional website running locally.

**Next Steps:**
1. ✅ Test all features
2. ✅ Customize as needed
3. ✅ Deploy to production
4. ✅ Share with the world!

Good luck! 🚀

---

**Last Updated:** November 2025
**Version:** 1.0.0
