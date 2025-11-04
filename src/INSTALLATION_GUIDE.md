# Installation Guide - Hire Camp Recruiting Services

This guide will walk you through setting up and running the Hire Camp Recruiting Services website on your local machine.

## 📋 Table of Contents

1. [System Requirements](#system-requirements)
2. [Step-by-Step Installation](#step-by-step-installation)
3. [Running the Application](#running-the-application)
4. [Building for Production](#building-for-production)
5. [Troubleshooting](#troubleshooting)
6. [Project Structure](#project-structure)

---

## 📌 System Requirements

Before you begin, ensure your system has:

### Required Software

- **Node.js**: Version 16.x or higher (LTS recommended)
  - Download from: https://nodejs.org/
- **npm**: Version 7.x or higher (comes with Node.js)
  - Or **yarn**: Version 1.22.x or higher (alternative to npm)

### System Specifications (Recommended)

- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB free space
- **OS**: Windows 10/11, macOS 10.15+, or Linux

### Verify Installation

Open your terminal/command prompt and run:

```bash
node --version
# Should show v16.x.x or higher

npm --version
# Should show 7.x.x or higher
```

---

## 🚀 Step-by-Step Installation

### Step 1: Extract the Project

If you received the project as a ZIP file:

1. **Windows**: Right-click the ZIP file → "Extract All"
2. **Mac**: Double-click the ZIP file
3. **Linux**: Use `unzip hire-camp-recruiting.zip`

### Step 2: Open Terminal/Command Prompt

1. **Windows**: 
   - Press `Win + R`, type `cmd`, press Enter
   - Or use PowerShell or Windows Terminal
   
2. **Mac**: 
   - Press `Cmd + Space`, type "Terminal", press Enter
   
3. **Linux**: 
   - Press `Ctrl + Alt + T`

### Step 3: Navigate to Project Directory

```bash
cd path/to/hire-camp-recruiting-services
```

**Example:**
```bash
# Windows
cd C:\Users\YourName\Desktop\hire-camp-recruiting-services

# Mac/Linux
cd ~/Desktop/hire-camp-recruiting-services
```

### Step 4: Install Dependencies

This will download all required packages:

```bash
npm install
```

**This may take 2-5 minutes depending on your internet speed.**

You should see output like:
```
added 234 packages in 3m
```

**Alternative (using Yarn):**
```bash
yarn install
```

### Step 5: Verify Installation

Check if all files are in place:

```bash
# Windows
dir

# Mac/Linux
ls -la
```

You should see folders like: `components`, `styles`, and files like `App.tsx`, `package.json`

---

## 🎮 Running the Application

### Start Development Server

```bash
npm run dev
```

**Or with Yarn:**
```bash
yarn dev
```

### Expected Output

You should see:
```
  VITE v5.4.11  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Open in Browser

1. Open your web browser (Chrome, Firefox, Safari, Edge)
2. Go to: **http://localhost:5173**
3. You should see the Hire Camp Recruiting Services website!

### Making Changes

- The development server supports **Hot Module Replacement (HMR)**
- Any changes you make to files will automatically refresh in the browser
- No need to restart the server

### Stopping the Server

Press `Ctrl + C` in the terminal to stop the development server.

---

## 📦 Building for Production

### Create Production Build

```bash
npm run build
```

**Or with Yarn:**
```bash
yarn build
```

### Output

The build files will be created in the `dist` folder:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── ...
```

### Preview Production Build

To test the production build locally:

```bash
npm run preview
```

This will start a local server at: **http://localhost:4173**

---

## 🔧 Troubleshooting

### Issue 1: "npm: command not found"

**Solution**: Node.js is not installed or not in PATH
- Install Node.js from https://nodejs.org/
- Restart your terminal after installation

### Issue 2: "Port 5173 is already in use"

**Solution**: Another application is using that port
```bash
# Find and kill the process (Windows)
netstat -ano | findstr :5173
taskkill /PID <process_id> /F

# Find and kill the process (Mac/Linux)
lsof -ti:5173 | xargs kill -9
```

**Or change the port:**

Create/edit `vite.config.ts`:
```typescript
export default defineConfig({
  server: {
    port: 3000  // Use different port
  }
})
```

### Issue 3: Installation Errors

**Solution 1**: Clear npm cache
```bash
npm cache clean --force
npm install
```

**Solution 2**: Delete node_modules and reinstall
```bash
# Windows
rmdir /s node_modules
del package-lock.json

# Mac/Linux
rm -rf node_modules
rm package-lock.json

# Then reinstall
npm install
```

### Issue 4: TypeScript Errors

**Solution**: Ensure TypeScript is installed
```bash
npm install typescript --save-dev
```

### Issue 5: Missing Dependencies

**Solution**: Install missing packages
```bash
npm install
```

If specific package is missing:
```bash
npm install <package-name>
```

---

## 📁 Project Structure

```
hire-camp-recruiting-services/
│
├── 📄 index.html                    # Main HTML entry point
├── 📄 main.tsx                      # React application entry
├── 📄 App.tsx                       # Main App component
│
├── 📁 components/
│   ├── 📄 ProgramCard.tsx           # Program display card
│   ├── 📁 figma/
│   │   └── 📄 ImageWithFallback.tsx
│   └── 📁 ui/                       # Shadcn UI components
│       ├── 📄 button.tsx
│       ├── 📄 card.tsx
│       ├── 📄 tabs.tsx
│       ├── 📄 input.tsx
│       └── ...
│
├── 📁 styles/
│   └── 📄 globals.css               # Global styles
│
├── 📄 package.json                  # Project dependencies
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 vite.config.ts                # Vite build configuration
│
└── 📁 Documentation/
    ├── 📄 README.md                 # Main documentation
    ├── 📄 INSTALLATION_GUIDE.md     # This file
    ├── 📄 SETUP_GUIDE.md
    ├── 📄 DEPLOYMENT_GUIDE.md
    └── 📄 PROJECT_SUMMARY.md
```

---

## 🎯 Key Files Explained

### App.tsx
- Main application component
- Contains all program data
- Manages navigation and sections

### components/ProgramCard.tsx
- Displays individual training programs
- Handles WhatsApp enrollment redirect
- Shows program details and pricing

### styles/globals.css
- Global CSS styles
- Tailwind CSS configuration
- Custom color schemes

### package.json
- Lists all project dependencies
- Defines npm scripts (dev, build, preview)
- Project metadata

---

## 🔐 WhatsApp Integration

The "Enroll Now" button redirects to WhatsApp with pre-filled message:

**Format:**
```
Hi, I'm interested in enrolling for the *[Program Name]* program.

*Program Details:*
- Duration: [X Months]
- Fee: ₹[Amount]
- Mode: [Online/Offline]
- Technologies: [Tech Stack]

Please provide me with more information about the enrollment process.
```

**WhatsApp Number:** +91 9063166195

---

## 📞 Support

If you encounter any issues:

1. **Check this guide's troubleshooting section**
2. **Contact Hire Camp:**
   - Phone: +91 9063166195
   - Email: info@hirecamp.in
   - Email: hirecamp.info@gmail.com

---

## ✅ Quick Checklist

- [ ] Node.js installed (v16+)
- [ ] npm installed (v7+)
- [ ] Project extracted/cloned
- [ ] Terminal opened in project directory
- [ ] `npm install` completed successfully
- [ ] `npm run dev` running without errors
- [ ] Website opens at http://localhost:5173
- [ ] All features working (filters, search, enrollment)

---

**Last Updated:** November 2025  
**Version:** 1.0.0  
**Maintained by:** Hire Camp Recruiting Services
