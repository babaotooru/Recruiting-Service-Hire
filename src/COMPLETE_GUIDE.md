# 📚 Complete Guide - Hire Camp Recruiting Services

## Table of Contents
- [Quick Start](#-quick-start-5-minutes)
- [What This Project Is](#-what-this-project-is)
- [How to Run](#-how-to-run-step-by-step)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [How to Edit](#-how-to-edit)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contact](#-contact)

---

## 🚀 Quick Start (5 Minutes)

```bash
# 1. Make sure Node.js is installed
node --version

# 2. Navigate to project folder
cd hire-camp-recruiting-services

# 3. Install dependencies (first time only)
npm install

# 4. Start the website
npm run dev

# 5. Open browser to:
http://localhost:5173
```

**Done! Your website is running! 🎉**

---

## 🎯 What This Project Is

**Hire Camp Recruiting Services** is a modern, responsive website for a technology training and recruitment company based in Hyderabad, India.

### Key Information

| Detail | Information |
|--------|-------------|
| **Company** | Hire Camp Recruiting Services |
| **Type** | Single Page Application (SPA) |
| **Purpose** | Display training programs & enable enrollment |
| **Location** | Hyderabad, Telangana, India |
| **Programs** | 12+ technology training courses |
| **Price Range** | ₹25,000 - ₹35,000 |
| **Contact** | +91 9063166195 |
| **Emails** | info@hirecamp.in, hirecamp.info@gmail.com |

---

## 📋 How to Run (Step by Step)

### Prerequisites

✅ **Node.js** (v16 or higher)  
✅ **npm** (comes with Node.js)  
✅ **Web browser** (Chrome, Firefox, Safari, Edge)  
✅ **Text editor** (VS Code recommended)

### Installation Steps

#### Step 1: Install Node.js

1. Go to https://nodejs.org/
2. Download the LTS version (recommended)
3. Install it (just click Next → Next → Install)
4. Restart your computer

**Verify installation:**
```bash
node --version
# Should show: v16.x.x or higher

npm --version
# Should show: 7.x.x or higher
```

#### Step 2: Extract Project

- Extract the ZIP file to a location you can easily find
- Example: `Desktop/hire-camp-recruiting-services`

#### Step 3: Open Terminal/Command Prompt

**Windows:**
- Press `Windows Key + R`
- Type `cmd` and press Enter

**Mac:**
- Press `Command + Space`
- Type `Terminal` and press Enter

**Linux:**
- Press `Ctrl + Alt + T`

#### Step 4: Navigate to Project

```bash
# Replace with your actual path
cd C:\Users\YourName\Desktop\hire-camp-recruiting-services
```

**💡 Tip:** Drag the folder into terminal to auto-fill the path!

#### Step 5: Install Dependencies

```bash
npm install
```

**Wait 2-5 minutes.** You'll see packages being downloaded.

#### Step 6: Start Development Server

```bash
npm run dev
```

**Look for this output:**
```
  VITE v5.4.11  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
```

#### Step 7: Open in Browser

Go to: **http://localhost:5173**

**🎉 Success! Your website is now running!**

---

## 📁 Project Structure

```
hire-camp-recruiting-services/
│
├── 📄 START_HERE.txt              ← Read this first!
├── 📄 README.md                   ← Main documentation
├── 📄 HOW_TO_RUN.md              ← Running instructions
├── 📄 INSTALLATION_GUIDE.md       ← Detailed installation
├── 📄 COMPLETE_GUIDE.md          ← This file
├── 📄 PROJECT_INFO.md            ← Technical details
│
├── 📄 App.tsx                     ← Main application code
│   • Contains all program data
│   • Main layout and sections
│   • Navigation and routing
│
├── 📁 components/
│   ├── 📄 ProgramCard.tsx         ← Program card component
│   │   • Displays individual programs
│   │   • WhatsApp enrollment handler
│   │   • Technology badges
│   │
│   ├── 📁 figma/
│   │   └── ImageWithFallback.tsx  ← Image component
│   │
│   └── 📁 ui/                     ← 40+ UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── tabs.tsx
│       ├── input.tsx
│       └── ...
│
├── 📁 styles/
│   └── 📄 globals.css             ← Global styles
│       • Tailwind configuration
│       • Custom CSS variables
│       • Typography settings
│
├── 📄 package.json                ← Dependencies & scripts
├── 📄 tsconfig.json              ← TypeScript config
├── 📄 vite.config.ts             ← Build configuration
├── 📄 index.html                 ← HTML entry point
├── 📄 main.tsx                   ← React bootstrap
│
└── 📁 dist/                       ← Production build (after build)
    • Created when you run: npm run build
    • Upload this folder to web host
```

---

## ✨ Features

### 1. 🎓 Training Programs Display

**12 Programs Across 6 Categories:**

| Category | Programs | Price Range |
|----------|----------|-------------|
| **Full Stack** | MERN, Java | ₹32,000 - ₹35,000 |
| **Frontend** | React/Next.js, Angular | ₹28,000 - ₹29,000 |
| **Backend** | Node.js, Python | ₹29,000 - ₹30,000 |
| **Cloud** | AWS, Azure | ₹32,000 - ₹33,000 |
| **Data Science** | ML, Big Data | ₹34,000 - ₹35,000 |
| **Mobile** | React Native, Flutter | ₹25,000 - ₹30,000 |

### 2. 🔍 Search & Filter

- **Search Box:** Find programs by name or technology
- **Category Tabs:** Filter by program type
- **Real-time Filtering:** Instant results as you type

### 3. 💬 WhatsApp Integration

**When user clicks "Enroll Now":**

1. Pre-filled message is created with:
   - Program name
   - Duration
   - Fee
   - Technologies
   - Mode (Online/Offline)

2. Redirects to WhatsApp Web/App
3. Opens chat with: +91 9063166195
4. User can send or modify message

**Example Message:**
```
Hi, I'm interested in enrolling for the *Full Stack Development with MERN* program.

*Program Details:*
- Duration: 6 Months
- Fee: ₹32,000
- Mode: Online & Offline
- Technologies: React, Node.js, MongoDB, Express.js, JavaScript, HTML/CSS

Please provide me with more information about the enrollment process.
```

### 4. 📱 Responsive Design

- **Mobile:** Single column layout, hamburger menu
- **Tablet:** 2 column grid for programs
- **Desktop:** 3 column grid, full navigation
- **Large Desktop:** Optimized spacing

### 5. 🎨 Modern UI

- **Color Theme:** Red/Maroon (#DC2626)
- **Typography:** Clean, readable fonts
- **Cards:** Shadow effects, hover animations
- **Icons:** Lucide React icons
- **Badges:** Technology tags

---

## 🛠️ How to Edit

### Change Program Details

**File:** `App.tsx` (Line 8 onwards)

```typescript
{
  id: 1,
  category: "Full Stack",
  title: "Full Stack Development with MERN",
  description: "Master MongoDB, Express.js, React, and Node.js",
  duration: "6 Months",
  fee: "₹32,000",                // Change fee here
  technologies: ["React", "Node.js", "MongoDB"],  // Add/remove tech
  mode: "Online & Offline",
  batchSize: "Max 25",
  level: "Beginner to Advanced",
  popular: true
}
```

### Change Contact Information

**File:** `App.tsx` (Search for these sections)

**Phone Number:**
```typescript
// Find and replace:
+91 9063166195
```

**Email:**
```typescript
// Find and replace:
info@hirecamp.in
hirecamp.info@gmail.com
```

**Address:**
```typescript
// Find and replace the address section
```

### Change WhatsApp Number

**File:** `components/ProgramCard.tsx` (Line ~30)

```typescript
const whatsappUrl = `https://wa.me/919063166195?text=${encodedMessage}`;
// Change: 919063166195 to your number (include country code)
```

### Change Colors

**Find and replace these Tailwind classes:**

**Current (Red/Maroon):**
- `bg-red-600` → Primary background
- `bg-red-700` → Darker red
- `text-red-600` → Red text
- `hover:bg-red-700` → Hover state

**Example Change to Blue:**
- `bg-red-600` → `bg-blue-600`
- `bg-red-700` → `bg-blue-700`
- `text-red-600` → `text-blue-600`

### Add New Program

**File:** `App.tsx` (Add to programs array)

```typescript
{
  id: 13,                        // Increment ID
  category: "Your Category",     // Must match existing tab
  title: "New Program Title",
  description: "Program description here",
  duration: "X Months",
  fee: "₹XX,000",
  technologies: ["Tech1", "Tech2", "Tech3"],
  mode: "Online/Offline/Both",
  batchSize: "Max XX",
  level: "Beginner/Intermediate/Advanced",
  popular: false                 // Set true for "Most Popular" badge
}
```

---

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

**Output:** `dist` folder with optimized files

### Preview Production Build

```bash
npm run preview
```

**Opens at:** http://localhost:4173

### Deployment Options

#### 1. Netlify (Easiest) ⭐

**Steps:**
1. Go to https://netlify.com
2. Sign up (free)
3. Drag & drop the `dist` folder
4. Get your URL: `yoursite.netlify.app`

**Deploy Command:**
```bash
npm run build
# Upload dist folder to Netlify
```

#### 2. Vercel

**Steps:**
1. Go to https://vercel.com
2. Sign up (free)
3. Import project or upload `dist` folder
4. Get your URL: `yoursite.vercel.app`

#### 3. GitHub Pages

**Steps:**
1. Push code to GitHub
2. Enable GitHub Pages in settings
3. Point to `dist` folder
4. Get URL: `username.github.io/repo`

#### 4. Traditional Web Hosting

**Upload these files from `dist` folder:**
- index.html
- assets/ folder
- All other files

**Via FTP:**
- Use FileZilla or similar
- Upload to `public_html` or `www` folder

---

## 🔧 Available Commands

| Command | Description | When to Use |
|---------|-------------|-------------|
| `npm install` | Install dependencies | First time, or after updating |
| `npm run dev` | Start dev server | During development |
| `npm run build` | Build for production | Before deployment |
| `npm run preview` | Preview production | Test production build |
| `npm run lint` | Check code quality | Before committing code |

---

## 🐛 Troubleshooting

### Problem 1: "npm: command not found"

**Cause:** Node.js not installed or not in PATH

**Solution:**
```bash
# 1. Install Node.js from https://nodejs.org/
# 2. Restart computer
# 3. Try again
```

### Problem 2: "Port 5173 already in use"

**Cause:** Another app using that port

**Solution 1:** Kill the process
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <pid> /F

# Mac/Linux
lsof -ti:5173 | xargs kill -9
```

**Solution 2:** Change port in `vite.config.ts`
```typescript
export default defineConfig({
  server: {
    port: 3000  // Use different port
  }
})
```

### Problem 3: Installation errors

**Solution 1:** Clear cache
```bash
npm cache clean --force
npm install
```

**Solution 2:** Delete and reinstall
```bash
# Windows
rmdir /s node_modules
del package-lock.json

# Mac/Linux
rm -rf node_modules
rm package-lock.json

# Then
npm install
```

### Problem 4: White screen / not loading

**Solution:**
```bash
# 1. Check console for errors (F12 in browser)
# 2. Ensure dev server is running
# 3. Clear browser cache (Ctrl+F5)
# 4. Try different browser
```

### Problem 5: Changes not showing

**Cause:** Browser cache or HMR issue

**Solution:**
```bash
# 1. Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
# 2. Stop server (Ctrl+C) and restart (npm run dev)
# 3. Clear browser cache
```

---

## 💡 Development Tips

### 1. Use a Good Code Editor

**Recommended: Visual Studio Code**
- Download: https://code.visualstudio.com/
- Free and powerful
- Built-in terminal
- Extensions for React, TypeScript, Tailwind

**Useful VS Code Extensions:**
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features
- Prettier - Code formatter

### 2. Browser DevTools

**Open DevTools:** Press `F12` or `Ctrl+Shift+I`

**Useful tabs:**
- **Console:** View errors and logs
- **Elements:** Inspect HTML/CSS
- **Network:** Check loading times
- **Application:** View storage/cache

### 3. Hot Module Replacement

**The dev server auto-refreshes when you save files!**
- No need to manually refresh
- Changes appear instantly
- Preserves component state

### 4. Testing Different Devices

**Chrome DevTools Device Mode:**
1. Press `F12`
2. Click device icon (top-left)
3. Select device from dropdown
4. Test responsive design

---

## 📊 Performance Tips

### Optimization Checklist

- ✅ Minimize image sizes
- ✅ Use lazy loading for images
- ✅ Remove unused dependencies
- ✅ Enable compression on server
- ✅ Use CDN for static assets
- ✅ Minimize CSS/JS (automatic in build)
- ✅ Enable browser caching

### Production Build Size

**Typical sizes:**
- JavaScript: ~100-150KB
- CSS: ~10-20KB
- HTML: ~5-10KB
- **Total:** ~150-200KB (gzipped)

**Load time:** < 2 seconds (good connection)

---

## 📞 Contact & Support

### Hire Camp Recruiting Services

**📱 Phone:** +91 9063166195  
**📧 Email:** info@hirecamp.in  
**📧 Email:** hirecamp.info@gmail.com  

**📍 Address:**
```
Plot No 38&39/1 Jyothipuram colony,
Thattiannaram,
Opposite Sreyas Engineering College,
Nagole Bandlaguda, GSI Post,
Hyderabad, Rangareddy,
Telangana - 500068
```

**🌐 WhatsApp:** https://wa.me/919063166195

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `START_HERE.txt` | First file to read, simple instructions |
| `README.md` | Main documentation with overview |
| `HOW_TO_RUN.md` | Detailed running instructions |
| `INSTALLATION_GUIDE.md` | Step-by-step installation guide |
| `COMPLETE_GUIDE.md` | This file - comprehensive guide |
| `PROJECT_INFO.md` | Technical specifications |
| `SETUP_GUIDE.md` | Development environment setup |
| `DEPLOYMENT_GUIDE.md` | Deployment instructions |
| `PROJECT_SUMMARY.md` | Quick project summary |

---

## ✅ Pre-Launch Checklist

Before deploying, verify:

- [ ] All programs display correctly
- [ ] Search functionality works
- [ ] Category tabs filter properly
- [ ] WhatsApp redirect works with correct number
- [ ] Contact information is correct
- [ ] All links work (test each one)
- [ ] Responsive on mobile (resize browser)
- [ ] Responsive on tablet
- [ ] Responsive on desktop
- [ ] No console errors (F12 → Console)
- [ ] Images load properly
- [ ] Colors match brand (red/maroon theme)
- [ ] Production build successful (`npm run build`)
- [ ] Preview works (`npm run preview`)

---

## 🎯 Quick Reference

### File to Edit For...

| Task | File |
|------|------|
| Change program details | `App.tsx` |
| Change contact info | `App.tsx` |
| Change WhatsApp number | `components/ProgramCard.tsx` |
| Change colors | `App.tsx`, `ProgramCard.tsx` |
| Change global styles | `styles/globals.css` |
| Add new program | `App.tsx` (programs array) |

### Common Terminal Commands

```bash
# Navigate to project
cd hire-camp-recruiting-services

# Install dependencies
npm install

# Start development
npm run dev

# Stop server
Ctrl + C

# Build production
npm run build

# Preview production
npm run preview

# Check Node.js version
node --version

# Check npm version
npm --version
```

---

## 🔑 Key Technologies

- **React 18.3.1** - UI framework
- **TypeScript 5.6.3** - Type safety
- **Tailwind CSS 4.0** - Styling
- **Vite 5.4.11** - Build tool
- **Lucide React** - Icons

---

## 📈 Next Steps After Setup

1. **Customize Content**
   - Update program details
   - Change contact information
   - Modify branding

2. **Test Thoroughly**
   - All features work
   - Responsive on all devices
   - WhatsApp integration functions

3. **Deploy**
   - Build production version
   - Choose hosting platform
   - Upload and test live site

4. **Maintain**
   - Update programs regularly
   - Keep dependencies updated
   - Monitor user feedback

---

**Version:** 1.0.0  
**Last Updated:** November 2025  
**Built for:** Hire Camp Recruiting Services  

---

**Need more help? Read the other documentation files or contact Hire Camp directly!** 📞
