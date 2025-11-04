# Hire Camp Recruiting Services

A modern, responsive web application for Hire Camp Recruiting Services - a technology training and placement company based in Hyderabad, India.

## 🚀 Features

- **12+ Training Programs** across Full Stack, Frontend, Backend, Cloud, Data Science, and Mobile Development
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **WhatsApp Integration** - Direct enrollment through WhatsApp with pre-filled program details
- **Program Filtering** - Filter programs by category and search by technology
- **Modern UI** - Built with React, TypeScript, and Tailwind CSS
- **Shadcn/ui Components** - Beautiful, accessible UI components

## 📋 Programs Offered

### Full Stack Development
- MERN Stack Development - ₹32,000
- Java Full Stack Development - ₹35,000

### Frontend Development
- Advanced React & Next.js - ₹28,000
- Angular Enterprise Development - ₹29,000

### Backend Development
- Node.js Backend Development - ₹30,000
- Python Backend Development - ₹29,000

### Cloud Engineering
- AWS Cloud Engineering - ₹33,000
- Azure Cloud Solutions - ₹32,000

### Data Science
- Data Science & Machine Learning - ₹35,000
- Big Data & Analytics - ₹34,000

### Mobile Development
- React Native Mobile Development - ₹30,000
- Flutter Mobile Development - ₹25,000

## 🛠️ Technology Stack

- **Frontend Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS v4.0
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Language:** TypeScript

## 📁 Project Structure

```
hire-camp-recruiting/
├── App.tsx                          # Main application component
├── components/
│   ├── ProgramCard.tsx              # Individual program card component
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Image component with fallback
│   └── ui/                          # Shadcn UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── tabs.tsx
│       ├── input.tsx
│       ├── badge.tsx
│       └── ... (other UI components)
├── styles/
│   └── globals.css                  # Global styles and Tailwind config
├── package.json                     # Project dependencies
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16.x or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone or extract the project:**
   ```bash
   # If you have a zip file, extract it
   unzip hire-camp-recruiting.zip
   cd hire-camp-recruiting
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   Or if you use yarn:
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Or with yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📱 Contact Information

**Hire Camp Recruiting Services**

- **Phone:** +91 9063166195
- **Email:** 
  - info@hirecamp.in
  - hirecamp.info@gmail.com
- **Address:** 
  Plot No 38&39/1 Jyothipuram colony,
  Thattiannaram, Opposite Sreyas Engineering College,
  Nagole Bandlaguda, GSI Post,
  Hyderabad, Rangareddy, Telangana - 500068

## 💬 WhatsApp Integration

When users click the "Enroll Now" button, they are redirected to WhatsApp with a pre-filled message containing:
- Program name
- Duration
- Fee
- Mode (Online/Offline)
- Technologies covered

This makes the enrollment process seamless and convenient for prospective students.

## 🎨 Customization

### Changing Colors

The primary color scheme uses red/maroon. To change colors, update the Tailwind classes in:
- `App.tsx` - Main application colors
- `components/ProgramCard.tsx` - Card colors
- `styles/globals.css` - Global color tokens

### Adding New Programs

To add new programs, edit the `programs` array in `App.tsx`:

```typescript
{
  id: 13,
  category: "Your Category",
  title: "Program Title",
  description: "Program description",
  duration: "X Months",
  fee: "₹XX,000",
  technologies: ["Tech1", "Tech2"],
  mode: "Online/Offline",
  batchSize: "Max XX",
  level: "Skill Level",
  popular: false
}
```

### Updating Contact Information

Update contact details in the Footer and Contact sections of `App.tsx`.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Dependencies

Main dependencies include:
- `react` - UI library
- `react-dom` - React DOM renderer
- `lucide-react` - Icon library
- `tailwindcss` - Utility-first CSS framework
- `typescript` - Type safety

For a complete list, see `package.json`.

## 🌐 Browser Support

This application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025 Hire Camp Recruiting Services. All rights reserved.

## 🤝 Support

For technical support or inquiries:
- Email: info@hirecamp.in
- WhatsApp: +91 9063166195

---

**Built with ❤️ for Hire Camp Recruiting Services**
