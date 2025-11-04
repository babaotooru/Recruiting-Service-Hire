# Quick Reference Card - Hire Camp Recruiting Services

## 🚀 Quick Start (3 Steps)

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
http://localhost:5173
```

---

## 📞 Contact Details

| Type | Details |
|------|---------|
| **Phone/WhatsApp** | +91 9063166195 |
| **Email 1** | info@hirecamp.in |
| **Email 2** | hirecamp.info@gmail.com |
| **Address** | Plot No 38&39/1, Jyothipuram Colony, Thattiannaram, Opposite Sreyas Engineering College, Nagole Bandlaguda, Hyderabad - 500068 |

---

## 💻 Essential Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check for code errors |

---

## 💰 Program Pricing Quick View

| Category | Count | Price Range |
|----------|-------|-------------|
| **Full Stack** | 2 | ₹32,000 - ₹35,000 |
| **Frontend** | 2 | ₹28,000 - ₹29,000 |
| **Backend** | 2 | ₹29,000 - ₹30,000 |
| **Cloud** | 2 | ₹32,000 - ₹33,000 |
| **Data Science** | 2 | ₹34,000 - ₹35,000 |
| **Mobile** | 2 | ₹25,000 - ₹30,000 |

**Total Programs:** 12  
**Lowest Price:** ₹25,000 (Flutter)  
**Highest Price:** ₹35,000 (Java Full Stack, Data Science & ML)

---

## 📁 Important Files

| File/Folder | Purpose |
|-------------|---------|
| `App.tsx` | Main application component |
| `components/ProgramCard.tsx` | Program card with WhatsApp |
| `styles/globals.css` | Global styles |
| `package.json` | Project dependencies |
| `README.md` | Quick start guide |
| `SETUP_GUIDE.md` | Detailed setup instructions |
| `DEPLOYMENT_GUIDE.md` | How to deploy |

---

## 🎨 Color Codes

| Element | Color | Hex Code |
|---------|-------|----------|
| **Primary** | Red | `#DC2626` |
| **Primary Dark** | Dark Red | `#B91C1C` |
| **Background** | White | `#FFFFFF` |
| **Text** | Dark Gray | `#1F2937` |
| **Secondary Text** | Gray | `#6B7280` |

---

## 🌐 Deployment (Fastest Method)

**Netlify (2 minutes):**
```bash
# Build
npm run build

# Go to: https://app.netlify.com/drop
# Drag 'dist' folder
# Done! ✅
```

---

## 🔧 Common Issues & Fixes

### Port Already in Use
```bash
# Kill process on port 5173
# Windows: netstat -ano | findstr :5173
# Mac/Linux: lsof -ti:5173 | xargs kill -9
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
npm run build
# Check errors and fix
```

---

## 📱 WhatsApp Integration

**Phone Number:** 919063166195 (with country code)

**Pre-filled Message Format:**
```
Hi, I'm interested in enrolling for the following program:

*Program:* [Program Name]
*Duration:* [X Months]
*Fee:* [₹XX,000]
*Mode:* [Online/Offline]
*Technologies:* [Tech1, Tech2, ...]

Please provide more details about the enrollment process.
```

**Code Location:** `components/ProgramCard.tsx` (Line ~18-28)

---

## 🔄 Quick Customization

### Change Phone Number
**File:** `components/ProgramCard.tsx`
```typescript
const whatsappUrl = `https://wa.me/91YOUR_NUMBER?text=...`;
```

### Add New Program
**File:** `App.tsx` (programs array)
```typescript
{
  id: 13,
  category: "Category",
  title: "Program Name",
  description: "Description",
  duration: "X Months",
  fee: "₹XX,000",
  technologies: ["Tech1", "Tech2"],
  mode: "Online & Offline",
  batchSize: "Max XX",
  level: "Level",
  popular: false
}
```

### Change Colors
**Find and Replace:**
- `bg-red-600` → `bg-YOUR_COLOR-600`
- `text-red-600` → `text-YOUR_COLOR-600`
- `hover:bg-red-700` → `hover:bg-YOUR_COLOR-700`

---

## 📊 File Structure (Simplified)

```
├── index.html              ← Entry point
├── main.tsx                ← React entry
├── App.tsx                 ← Main component ⭐
├── package.json            ← Dependencies
│
├── components/
│   ├── ProgramCard.tsx     ← Program cards ⭐
│   └── ui/                 ← UI components
│
├── styles/
│   └── globals.css         ← Styles
│
└── Documentation/
    ├── README.md           ← Start here
    ├── SETUP_GUIDE.md      ← Full setup
    └── DEPLOYMENT_GUIDE.md ← Deploy help
```

---

## 🎯 Testing Checklist

Quick tests before deployment:

- [ ] Site loads at `localhost:5173`
- [ ] All 12 programs visible
- [ ] Search works
- [ ] Filters work
- [ ] WhatsApp link works
- [ ] Phone number correct: 9063166195
- [ ] Emails correct
- [ ] Address correct
- [ ] Responsive on mobile
- [ ] No console errors

---

## 🚨 Emergency Contacts

| Issue | Solution |
|-------|----------|
| **Site down** | Check hosting platform dashboard |
| **WhatsApp not working** | Verify number: 919063166195 |
| **Build fails** | See SETUP_GUIDE.md troubleshooting |
| **Need help** | Email: info@hirecamp.in |

---

## 📈 Performance Targets

| Metric | Target |
|--------|--------|
| Load Time | < 3 seconds |
| Mobile Score | 90+ |
| Desktop Score | 95+ |
| Accessibility | 90+ |
| SEO | 90+ |

Test at: https://pagespeed.web.dev/

---

## 🔐 Security Notes

- ✅ No API keys in code
- ✅ HTTPS required in production
- ✅ Regular updates: `npm update`
- ✅ Security audit: `npm audit`

---

## 📚 Documentation Map

| When | Read This |
|------|-----------|
| **First Time Setup** | README.md → SETUP_GUIDE.md |
| **Ready to Deploy** | DEPLOYMENT_GUIDE.md |
| **Overview Needed** | PROJECT_SUMMARY.md |
| **Quick Help** | QUICK_REFERENCE.md (this file) |

---

## 🎁 What's Included

✅ Complete source code  
✅ 12 training programs  
✅ WhatsApp enrollment  
✅ Responsive design  
✅ Search & filter  
✅ All documentation  
✅ Production ready  

---

## 💡 Pro Tips

1. **Test WhatsApp on actual phone** before launch
2. **Use Netlify** for easiest deployment
3. **Enable analytics** to track visitors
4. **Backup regularly** via GitHub
5. **Update prices** in one place (App.tsx)
6. **Keep dependencies updated** monthly

---

## 📞 Support Channels

| Channel | Contact |
|---------|---------|
| **Email** | info@hirecamp.in |
| **Phone** | +91 9063166195 |
| **WhatsApp** | +91 9063166195 |

---

## ✅ Pre-Launch Final Check

```bash
# 1. Build successfully
npm run build

# 2. No errors
npm run lint

# 3. Test locally
npm run preview

# 4. All links work
# 5. WhatsApp works
# 6. Contact info correct

# 🚀 Ready to launch!
```

---

## 🎯 One-Line Commands

```bash
# Full reset
rm -rf node_modules package-lock.json && npm install

# Quick deploy (after build)
# Drag 'dist' to https://app.netlify.com/drop

# Check for issues
npm run lint && npm run build

# Start fresh
npm install && npm run dev
```

---

## 📱 Mobile Testing URLs

After deployment, test on:
- **iOS Safari:** Your deployed URL
- **Android Chrome:** Your deployed URL
- **WhatsApp Integration:** Critical on both!

---

## 🎓 Learning Resources

- **React:** https://react.dev
- **TypeScript:** https://typescriptlang.org
- **Tailwind:** https://tailwindcss.com
- **Deployment:** See DEPLOYMENT_GUIDE.md

---

**Quick Reference Version:** 1.0  
**Last Updated:** November 2025  
**Keep this handy!** 📌

---

*Need detailed help? See SETUP_GUIDE.md or DEPLOYMENT_GUIDE.md*
