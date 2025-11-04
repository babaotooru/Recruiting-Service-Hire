# Deployment Guide - Hire Camp Recruiting Services

Complete guide to deploy your Hire Camp website to the internet.

## 🌐 Deployment Options Overview

| Platform | Cost | Difficulty | Build Time | Best For |
|----------|------|------------|------------|----------|
| **Netlify** | Free | Easy | ~2 min | Beginners, Quick setup |
| **Vercel** | Free | Easy | ~2 min | Next-level features |
| **GitHub Pages** | Free | Medium | ~5 min | GitHub users |
| **Traditional Hosting** | Paid | Medium | ~10 min | Full control |

---

## 🚀 Method 1: Netlify (Recommended)

### Why Netlify?
- ✅ Completely free for basic sites
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN (fast worldwide)
- ✅ Automatic deployments
- ✅ Custom domain support

### Step-by-Step Instructions

#### A. Drag & Drop Method (Easiest)

1. **Build your project:**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with your website.

2. **Go to Netlify:**
   - Visit: https://app.netlify.com/drop
   - No account needed for basic deployment!

3. **Deploy:**
   - Drag the entire `dist` folder onto the Netlify drop zone
   - Wait 10-30 seconds
   - Your site is LIVE! 🎉

4. **You'll get a URL like:**
   ```
   https://random-name-12345.netlify.app
   ```

#### B. GitHub Integration Method (Better)

1. **Create GitHub account** (if you don't have one)
   - Go to: https://github.com
   - Sign up for free

2. **Install Git** (if not installed)
   - Windows: https://git-scm.com/download/win
   - Mac: `brew install git`
   - Linux: `sudo apt-get install git`

3. **Initialize Git in your project:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

4. **Create GitHub repository:**
   - Go to: https://github.com/new
   - Name: `hire-camp-recruiting`
   - Click "Create repository"

5. **Push code to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/hire-camp-recruiting.git
   git branch -M main
   git push -u origin main
   ```

6. **Connect to Netlify:**
   - Go to: https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

7. **Auto-deployments enabled!**
   - Every time you push to GitHub, site updates automatically

#### C. Custom Domain Setup

1. **In Netlify Dashboard:**
   - Go to: Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `www.hirecamp.in` (or your domain)

2. **Update DNS settings** (at your domain registrar):
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

3. **Enable HTTPS:**
   - Netlify does this automatically
   - Free SSL certificate included

---

## ⚡ Method 2: Vercel

### Step-by-Step

1. **Sign up at Vercel:**
   - Visit: https://vercel.com/signup
   - Use GitHub account

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Answer the prompts:
     - Set up and deploy? **Y**
     - Which scope? Select your account
     - Link to existing project? **N**
     - Project name? `hire-camp-recruiting`
     - Directory? `./`
     - Want to override settings? **N**

4. **Production deployment:**
   ```bash
   vercel --prod
   ```

5. **Your site is live!**
   ```
   https://hire-camp-recruiting.vercel.app
   ```

### Custom Domain on Vercel

1. **In Vercel Dashboard:**
   - Go to project → Settings → Domains
   - Add your domain
   - Follow DNS instructions

---

## 📄 Method 3: GitHub Pages

### Step-by-Step

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these lines:
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/hire-camp-recruiting",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to: GitHub repository → Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

5. **Access your site:**
   ```
   https://YOUR_USERNAME.github.io/hire-camp-recruiting
   ```

---

## 🖥️ Method 4: Traditional Web Hosting

### For cPanel Hosting

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Connect via FTP:**
   - Use FileZilla or similar
   - Host: Your hosting FTP address
   - Username: Your FTP username
   - Password: Your FTP password

3. **Upload files:**
   - Navigate to `public_html` folder
   - Upload ALL files from `dist` folder
   - Keep folder structure intact

4. **Configure domain:**
   - Point domain to `public_html` directory
   - Enable HTTPS in cPanel (Let's Encrypt)

### For VPS (Ubuntu/Linux)

1. **Connect to server:**
   ```bash
   ssh user@your-server-ip
   ```

2. **Install Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install Nginx:**
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

4. **Upload and build:**
   ```bash
   # Upload code via git or SCP
   git clone https://github.com/YOUR_USERNAME/hire-camp-recruiting.git
   cd hire-camp-recruiting
   npm install
   npm run build
   ```

5. **Configure Nginx:**
   ```bash
   sudo nano /etc/nginx/sites-available/hirecamp
   ```

   Add:
   ```nginx
   server {
       listen 80;
       server_name hirecamp.in www.hirecamp.in;
       root /path/to/hire-camp-recruiting/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

6. **Enable site:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/hirecamp /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **Install SSL:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d hirecamp.in -d www.hirecamp.in
   ```

---

## 🔍 Post-Deployment Checklist

After deploying, verify:

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] All images display properly
- [ ] Navigation links work
- [ ] Search and filter functionality works
- [ ] WhatsApp links open correctly on mobile
- [ ] WhatsApp links open in WhatsApp Web on desktop
- [ ] All program cards display
- [ ] Contact information is correct
- [ ] Footer loads properly

### Mobile Testing
- [ ] Open site on mobile phone
- [ ] Test WhatsApp enrollment on mobile
- [ ] Check responsive design
- [ ] Test touch interactions
- [ ] Verify scrolling is smooth

### Performance Tests
- [ ] Site loads in under 3 seconds
- [ ] Images are optimized
- [ ] No console errors in browser
- [ ] HTTPS is enabled (padlock icon)

### SEO Tests
- [ ] Page title is correct
- [ ] Meta description exists
- [ ] Social media tags work
- [ ] Site is indexed by Google

---

## 📊 Monitoring Your Site

### Google Analytics (Free)

1. **Create account:**
   - Go to: https://analytics.google.com
   - Set up property for your website

2. **Get tracking code**

3. **Add to index.html** (before `</head>`):
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Uptime Monitoring

Use these free services:
- **UptimeRobot:** https://uptimerobot.com
- **Pingdom:** https://www.pingdom.com
- **StatusCake:** https://www.statuscake.com

They'll email you if your site goes down.

---

## 🔄 Updating Your Live Site

### If using Netlify/Vercel with GitHub:

```bash
# Make changes to your code
# Then:
git add .
git commit -m "Updated programs and pricing"
git push

# Site updates automatically!
```

### If using traditional hosting:

```bash
# Build new version
npm run build

# Upload new dist folder via FTP
# Replace old files
```

---

## 🛡️ Security Best Practices

1. **Always use HTTPS**
   - Enabled by default on Netlify/Vercel
   - Use Let's Encrypt for traditional hosting

2. **Keep dependencies updated:**
   ```bash
   npm update
   npm audit fix
   ```

3. **Backup your code:**
   - Use GitHub for version control
   - Keep local backups

4. **Protect sensitive data:**
   - Never commit API keys to GitHub
   - Use environment variables

---

## 💰 Cost Breakdown

### Free Tier Limits

**Netlify Free:**
- 100 GB bandwidth/month
- Unlimited sites
- 300 build minutes/month
- Custom domain support
- Perfect for this project! ✅

**Vercel Free:**
- 100 GB bandwidth/month
- Unlimited sites
- Unlimited builds
- Custom domain support
- Also perfect! ✅

**GitHub Pages Free:**
- 100 GB bandwidth/month
- 1 GB storage
- Public repositories only
- Great option! ✅

### When You Might Need Paid Hosting

- High traffic (>100,000 visitors/month)
- Need server-side processing
- Require databases
- Need advanced analytics

For Hire Camp's initial launch, **free hosting is more than sufficient**.

---

## 🎯 Recommended: Quick Start Deployment

**For fastest deployment (5 minutes):**

```bash
# Step 1: Build
npm run build

# Step 2: Deploy to Netlify
# Visit: https://app.netlify.com/drop
# Drag the 'dist' folder
# Done! ✅
```

**For best long-term setup (15 minutes):**

```bash
# Step 1: Push to GitHub
git init
git add .
git commit -m "Initial commit"
# Create repo on GitHub
git remote add origin YOUR_REPO_URL
git push -u origin main

# Step 2: Connect to Netlify
# Visit: https://app.netlify.com
# Import from GitHub
# Done! ✅ 
# + Auto-deployments enabled!
```

---

## 🆘 Common Deployment Issues

### Issue: Build fails

**Solution:**
```bash
# Check for errors
npm run build

# Common fixes:
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Site shows blank page

**Solution:**
- Check browser console for errors
- Verify `index.html` is in root of `dist`
- Check that all paths are relative (not absolute)

### Issue: Images not loading

**Solution:**
- Verify image paths are correct
- Check images are in `dist` after build
- Ensure ImageWithFallback component is used

### Issue: WhatsApp link not working

**Solution:**
- Verify phone number format: `919063166195`
- Test on actual mobile device
- Check URL encoding in browser

---

## 📞 Support

**Need help with deployment?**
- Email: info@hirecamp.in
- WhatsApp: +91 9063166195

**Technical Resources:**
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- GitHub Pages: https://pages.github.com

---

## ✅ Final Pre-Launch Checklist

- [ ] Build runs successfully (`npm run build`)
- [ ] No errors in browser console
- [ ] All contact info is correct
- [ ] WhatsApp number is correct (+91 9063166195)
- [ ] All email addresses work
- [ ] Physical address is accurate
- [ ] Program prices are correct (₹25K-₹35K)
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS is enabled
- [ ] Site tested on mobile
- [ ] Site tested on desktop
- [ ] WhatsApp integration tested
- [ ] Search functionality works
- [ ] All filters work
- [ ] Social media preview looks good
- [ ] Google Analytics installed (optional)
- [ ] Site speed is acceptable (<3s load time)

---

## 🎉 Congratulations!

You're ready to deploy Hire Camp Recruiting Services to the world!

**Recommended first deployment:** Netlify drag-and-drop method
**Recommended long-term:** Netlify + GitHub integration

Good luck with your launch! 🚀

---

**Document Version:** 1.0
**Last Updated:** November 2025
