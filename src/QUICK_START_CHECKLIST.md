# ✅ Quick Start Checklist

## Before You Begin

Print this checklist or keep it open while setting up the project.

---

## Step 1: System Requirements ✓

Check each item:

- [ ] I have a computer (Windows, Mac, or Linux)
- [ ] I have an internet connection
- [ ] I have extracted the project ZIP file
- [ ] I know where the project folder is located

---

## Step 2: Install Node.js ✓

- [ ] Go to: https://nodejs.org/
- [ ] Download LTS version (recommended)
- [ ] Run the installer
- [ ] Complete installation (click Next → Next → Install)
- [ ] Restart computer
- [ ] Open terminal/command prompt
- [ ] Type: `node --version` and press Enter
- [ ] See version number (like v16.x.x or higher) ✅
- [ ] Type: `npm --version` and press Enter
- [ ] See version number (like 7.x.x or higher) ✅

**If both commands show version numbers, you're ready! ✓**

---

## Step 3: Navigate to Project ✓

### Windows:
- [ ] Press `Windows Key + R`
- [ ] Type: `cmd`
- [ ] Press Enter
- [ ] Type: `cd C:\path\to\hire-camp-recruiting-services`
- [ ] Press Enter

### Mac:
- [ ] Press `Command + Space`
- [ ] Type: `Terminal`
- [ ] Press Enter
- [ ] Type: `cd ~/path/to/hire-camp-recruiting-services`
- [ ] Press Enter

### Linux:
- [ ] Press `Ctrl + Alt + T`
- [ ] Type: `cd ~/path/to/hire-camp-recruiting-services`
- [ ] Press Enter

**💡 Tip:** Drag folder into terminal to auto-fill the path!

---

## Step 4: Install Dependencies ✓

- [ ] In terminal, type: `npm install`
- [ ] Press Enter
- [ ] Wait 2-5 minutes (don't close terminal!)
- [ ] See message: "added XXX packages" ✅
- [ ] No major errors shown ✅

**If installation completed, continue! ✓**

---

## Step 5: Start Development Server ✓

- [ ] In terminal, type: `npm run dev`
- [ ] Press Enter
- [ ] See message like: `Local: http://localhost:5173/` ✅
- [ ] Terminal stays open (don't close it!)

**Server is running! ✓**

---

## Step 6: Open in Browser ✓

- [ ] Open web browser (Chrome, Firefox, Safari, Edge)
- [ ] Type in address bar: `http://localhost:5173`
- [ ] Press Enter
- [ ] See Hire Camp website ✅

**Website is working! 🎉**

---

## Step 7: Test Features ✓

### Header:
- [ ] "HIRE CAMP" logo visible
- [ ] "RECRUITING SERVICES" text visible
- [ ] Navigation menu visible (Programs, About, Contact)

### Hero Section:
- [ ] "TALENT HAS NO BORDERS!" heading visible
- [ ] Description text visible
- [ ] Statistics boxes visible (12+ Courses, 95%+ Placement)
- [ ] Hero image loads

### Programs Section:
- [ ] "Our Training Programs" heading visible
- [ ] Search box present
- [ ] Category tabs visible (All, Full Stack, Frontend, etc.)
- [ ] Program cards display (should see 12 programs)
- [ ] Each card shows:
  - [ ] Program title
  - [ ] Description
  - [ ] Duration
  - [ ] Technologies (badges)
  - [ ] Fee in rupees (₹)
  - [ ] "Enroll Now" button

### Search & Filter:
- [ ] Type "React" in search box
- [ ] See only React-related programs ✅
- [ ] Clear search box
- [ ] See all programs again ✅
- [ ] Click "Frontend" tab
- [ ] See only Frontend programs ✅
- [ ] Click "All Programs" tab
- [ ] See all programs again ✅

### WhatsApp Integration:
- [ ] Click any "Enroll Now" button
- [ ] WhatsApp opens (web or app)
- [ ] See pre-filled message with program details ✅
- [ ] Phone number is: +91 9063166195 ✅
- [ ] Message includes:
  - [ ] Program name
  - [ ] Duration
  - [ ] Fee
  - [ ] Technologies
  - [ ] Request for more information

### Features Section:
- [ ] "100% Job Assistance" visible
- [ ] "Industry Experts" visible
- [ ] "Real Projects" visible

### Contact Section:
- [ ] "Get In Touch" heading visible
- [ ] Phone: +91 9063166195 ✅
- [ ] Email: info@hirecamp.in ✅
- [ ] Email: hirecamp.info@gmail.com ✅
- [ ] Full address visible ✅

### Footer:
- [ ] "HIRE CAMP" branding visible
- [ ] Quick Links section visible
- [ ] Contact section visible
- [ ] Copyright notice visible

---

## Step 8: Test Responsive Design ✓

### Mobile View (< 768px):
- [ ] Press F12 in browser
- [ ] Click device icon (top-left)
- [ ] Select "iPhone 12" or similar
- [ ] Check:
  - [ ] Single column layout ✅
  - [ ] All content visible ✅
  - [ ] Navigation works ✅
  - [ ] Programs stack vertically ✅

### Tablet View (768px - 1024px):
- [ ] Select "iPad" or similar
- [ ] Check:
  - [ ] 2 column grid for programs ✅
  - [ ] All content visible ✅

### Desktop View (> 1024px):
- [ ] Close device mode (click device icon again)
- [ ] Check:
  - [ ] 3 column grid for programs ✅
  - [ ] Full navigation visible ✅

---

## Step 9: Check Colors ✓

Red/Maroon theme should be consistent:

- [ ] Header background is red (gradient)
- [ ] "Enroll Now" buttons are red
- [ ] Technology badges have red theme
- [ ] Active tab has red background
- [ ] Hover effects show darker red
- [ ] Popular badges are red
- [ ] Contact section has red gradient
- [ ] Links are red

**All red/maroon? ✅**

---

## Step 10: Verify Contact Info ✓

Double-check all contact details:

- [ ] Phone: +91 9063166195 (appears in multiple places)
- [ ] Email: info@hirecamp.in (appears in footer and contact)
- [ ] Email: hirecamp.info@gmail.com (appears in contact)
- [ ] Address includes:
  - [ ] Plot No 38&39/1 Jyothipuram colony
  - [ ] Thattiannaram
  - [ ] Opposite Sreyas Engineering College
  - [ ] Nagole Bandlaguda, GSI Post
  - [ ] Hyderabad, Rangareddy, Telangana - 500068

**All correct? ✅**

---

## Step 11: Browser Testing ✓

Test in multiple browsers (if available):

- [ ] Chrome - Works ✅
- [ ] Firefox - Works ✅
- [ ] Safari - Works ✅
- [ ] Edge - Works ✅
- [ ] Mobile browser - Works ✅

---

## Step 12: Performance Check ✓

- [ ] Website loads in < 3 seconds
- [ ] No broken images
- [ ] Scrolling is smooth
- [ ] No visible errors in console (F12 → Console tab)
- [ ] All animations work smoothly
- [ ] Search is responsive (instant results)

---

## Build for Production ✓

When ready to deploy:

- [ ] Stop dev server (Ctrl+C in terminal)
- [ ] Type: `npm run build`
- [ ] Press Enter
- [ ] Wait for build to complete
- [ ] See "dist" folder created ✅
- [ ] No build errors ✅

### Test Production Build:

- [ ] Type: `npm run preview`
- [ ] Press Enter
- [ ] Open: `http://localhost:4173`
- [ ] Test all features again
- [ ] Everything works ✅

---

## Troubleshooting Checklist ✓

If something doesn't work:

### Website won't start:
- [ ] Check Node.js is installed: `node --version`
- [ ] Check npm is installed: `npm --version`
- [ ] Try: `npm install` again
- [ ] Try: `npm cache clean --force` then `npm install`
- [ ] Restart computer

### Port already in use:
- [ ] Close other applications
- [ ] Restart computer
- [ ] Or change port in vite.config.ts

### Changes not showing:
- [ ] Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- [ ] Clear browser cache
- [ ] Stop and restart dev server

### WhatsApp not working:
- [ ] Check phone number format: 919063166195 (no + or -)
- [ ] Test on different device
- [ ] Check WhatsApp is installed (on mobile)

### Build errors:
- [ ] Check all files are present
- [ ] Run: `npm install` again
- [ ] Check TypeScript errors: `npm run lint`

---

## Final Verification ✓

Before considering setup complete:

- [ ] Website runs without errors ✅
- [ ] All 12 programs display ✅
- [ ] Search works ✅
- [ ] Filter tabs work ✅
- [ ] WhatsApp redirect works ✅
- [ ] Contact info is correct ✅
- [ ] Responsive on all devices ✅
- [ ] Colors are correct (red theme) ✅
- [ ] No console errors ✅
- [ ] Production build successful ✅

---

## Documentation Checklist ✓

Read these files for more information:

- [ ] START_HERE.txt - Quick overview
- [ ] README.md - Main documentation
- [ ] HOW_TO_RUN.md - Running instructions
- [ ] INSTALLATION_GUIDE.md - Detailed installation
- [ ] COMPLETE_GUIDE.md - Comprehensive guide
- [ ] PROJECT_INFO.md - Technical details
- [ ] QUICK_START_CHECKLIST.md - This file!

---

## Common Commands Reference

| Task | Command |
|------|---------|
| Install dependencies | `npm install` |
| Start development | `npm run dev` |
| Stop server | `Ctrl + C` |
| Build production | `npm run build` |
| Preview production | `npm run preview` |
| Check Node version | `node --version` |
| Check npm version | `npm --version` |

---

## Quick URLs

| URL | Purpose |
|-----|---------|
| http://localhost:5173 | Development server |
| http://localhost:4173 | Production preview |
| https://nodejs.org | Download Node.js |
| https://code.visualstudio.com | Download VS Code |
| https://wa.me/919063166195 | WhatsApp contact |

---

## Support Contacts

**If you need help:**

📞 Phone: +91 9063166195  
📧 Email: info@hirecamp.in  
📧 Email: hirecamp.info@gmail.com  

---

## Success! 🎉

If all items are checked, your setup is complete!

**Next Steps:**
1. Customize content (programs, contact info)
2. Test thoroughly
3. Build for production (`npm run build`)
4. Deploy to web hosting
5. Share with the world!

---

**Date Completed:** _______________

**Notes:**
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________

---

**Version:** 1.0.0  
**Last Updated:** November 2025  
**Project:** Hire Camp Recruiting Services
