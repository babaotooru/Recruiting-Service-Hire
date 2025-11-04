# How to Run - Quick Start Guide

## ⚡ Super Quick Start (For Beginners)

### 1️⃣ Install Node.js

**Download and install Node.js:**
- Go to: https://nodejs.org/
- Click "Download" (LTS version recommended)
- Run the installer
- Click "Next" → "Next" → "Install"
- **Restart your computer after installation**

### 2️⃣ Extract the Project

- Find the ZIP file: `hire-camp-recruiting-services.zip`
- Right-click → "Extract All" (Windows) or Double-click (Mac)
- Remember where you extracted it!

### 3️⃣ Open Command Prompt/Terminal

**Windows:**
- Press `Windows Key + R`
- Type: `cmd`
- Press Enter

**Mac:**
- Press `Command + Space`
- Type: `Terminal`
- Press Enter

**Linux:**
- Press `Ctrl + Alt + T`

### 4️⃣ Go to Project Folder

Type this command (replace with your actual path):

**Windows Example:**
```bash
cd C:\Users\YourName\Desktop\hire-camp-recruiting-services
```

**Mac/Linux Example:**
```bash
cd ~/Desktop/hire-camp-recruiting-services
```

**💡 Tip:** You can drag the folder into the terminal to get the path!

### 5️⃣ Install Everything

Type this command and press Enter:
```bash
npm install
```

**Wait 2-5 minutes.** You'll see lots of text scrolling. This is normal!

### 6️⃣ Start the Website

Type this command and press Enter:
```bash
npm run dev
```

### 7️⃣ Open in Browser

You'll see something like:
```
Local: http://localhost:5173/
```

**Open your browser and go to:** http://localhost:5173

**🎉 DONE! Your website is running!**

---

## 🛑 How to Stop

Press `Ctrl + C` in the terminal window

---

## 🔄 Running Again Later

1. Open Terminal/Command Prompt
2. Go to project folder: `cd path/to/hire-camp-recruiting-services`
3. Run: `npm run dev`
4. Open: http://localhost:5173

---

## 📦 Making a Production Version

### To create files for hosting:

```bash
npm run build
```

This creates a `dist` folder with all files ready to upload to a web server.

### To test the production version:

```bash
npm run preview
```

Open: http://localhost:4173

---

## ❓ Common Problems

### ❌ "npm: command not found"
**Fix:** Node.js is not installed
- Install Node.js from https://nodejs.org/
- Restart your computer
- Try again

### ❌ "Port 5173 already in use"
**Fix:** Something else is using that port
- Close other programs
- Or restart your computer
- Try again

### ❌ Installation taking too long
**Fix:** Slow internet or network issue
- Check your internet connection
- Try again
- Use `npm install --verbose` to see progress

### ❌ Errors during npm install
**Fix 1:** Clear cache and try again
```bash
npm cache clean --force
npm install
```

**Fix 2:** Delete and reinstall
```bash
# Delete node_modules folder and package-lock.json
# Then run:
npm install
```

---

## 📊 All Commands

| Command | What it does |
|---------|-------------|
| `npm install` | Install all required packages (first time only) |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `Ctrl + C` | Stop the server |

---

## 📂 Important Folders

```
hire-camp-recruiting-services/
├── App.tsx              ← Main application file
├── components/          ← UI components
├── styles/              ← CSS styles
├── package.json         ← Project settings
└── dist/                ← Production files (after build)
```

---

## 🔧 Editing the Website

### Change Programs/Prices
Edit: `App.tsx` (line 8 onwards - the `programs` array)

### Change Colors
Edit: `App.tsx` and `components/ProgramCard.tsx` (search for "red-600", "red-700")

### Change Contact Info
Edit: `App.tsx` (search for phone number, email, address)

### Change WhatsApp Number
Edit: `components/ProgramCard.tsx` (line ~30, update phone number)

---

## 💻 Tech Stack Used

- **React** - JavaScript library for building user interfaces
- **TypeScript** - JavaScript with type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **Shadcn/ui** - Beautiful UI components
- **Lucide Icons** - Icon library

---

## 📱 Features

✅ 12+ Training Programs  
✅ WhatsApp Integration for Enrollment  
✅ Search & Filter Programs  
✅ Responsive Design (Mobile, Tablet, Desktop)  
✅ Modern UI with Red/Maroon Theme  
✅ Program Categories (Full Stack, Frontend, Backend, Cloud, Data, Mobile)  
✅ Detailed Program Information  

---

## 🌐 Browser Support

✅ Chrome (Recommended)  
✅ Firefox  
✅ Safari  
✅ Edge  
✅ Mobile Browsers  

---

## 📞 Need Help?

**Hire Camp Recruiting Services**

📧 Email: info@hirecamp.in  
📧 Email: hirecamp.info@gmail.com  
📱 WhatsApp: +91 9063166195  
📍 Location: Hyderabad, Telangana, India

---

## 📝 File Editing Tips

### For Beginners:
- Use **Visual Studio Code** (free editor): https://code.visualstudio.com/
- Or **Notepad++** (Windows): https://notepad-plus-plus.org/
- Or **TextEdit** (Mac) in plain text mode

### Open project in VS Code:
1. Install VS Code
2. Right-click project folder → "Open with Code"
3. Edit files from the sidebar

---

## 🎯 Testing Checklist

After running the website, test:

- [ ] Website opens at localhost:5173
- [ ] All program cards display correctly
- [ ] Search box filters programs
- [ ] Category tabs work
- [ ] "Enroll Now" button opens WhatsApp
- [ ] Contact section shows correct details
- [ ] Responsive on mobile (resize browser)
- [ ] All links work

---

## 🚀 Deployment Options

Once you run `npm run build`, you can deploy the `dist` folder to:

1. **Netlify** (easiest): https://netlify.com
2. **Vercel**: https://vercel.com
3. **GitHub Pages**: https://pages.github.com
4. **Firebase Hosting**: https://firebase.google.com
5. **AWS S3**: https://aws.amazon.com/s3/
6. **Your own web server**

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

---

**Last Updated:** November 2025  
**Version:** 1.0.0  

**Built for Hire Camp Recruiting Services** ❤️
