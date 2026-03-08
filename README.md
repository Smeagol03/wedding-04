# 💍 Wedding Invitation - Edi & Noviana

<div align="center">

**A beautiful digital wedding invitation built with React & Vite**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://weddingtemp04.netlify.app)
[![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff?style=for-the-badge&logo=vite)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [Credits](#-credits)

---

## 🌸 Overview

This is a **modern, elegant digital wedding invitation** website designed for **Edi Kurniawan & Noviana's** special day on **March 29, 2026**. 

Built with cutting-edge web technologies, it provides a seamless and beautiful experience for guests to:
- View the couple's love story
- Check event details
- RSVP online
- Send wishes and comments
- View the photo gallery
- Explore gift options

---

## ✨ Features

### 🎨 **Design & UX**
- ✅ Elegant and responsive design (mobile-first)
- ✅ Smooth animations powered by **Framer Motion**
- ✅ Beautiful color palette with warm earthy tones
- ✅ SEO optimized with Open Graph & Twitter Cards

### 🎵 **Interactive Elements**
- ✅ Background music control
- ✅ Scroll animations and transitions
- ✅ Interactive gallery section

### 📋 **Sections Included**
| Section | Description |
|---------|-------------|
| **Pembuka** | Welcome screen with couple's names |
| **Acara** | Event details (date, time, location) |
| **Gallery** | Beautiful photo gallery |
| **Story** | Love story timeline |
| **RSVP** | Online attendance confirmation |
| **Hadiah** | Gift/wedding registry information |
| **Komentar** | Guest wishes & messages |
| **Penutup** | Closing message |
| **Footer** | Credits and info |

### 📱 **Responsive & Accessible**
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Touch-friendly interactions
- ✅ Fast loading with optimized images

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI Library |
| **Vite** | 7.2.4 | Build Tool & Dev Server |
| **TailwindCSS** | 4.1.17 | Utility-first CSS |
| **Motion** | 12.23.25 | Animation Library |
| **ESLint** | 9.39.1 | Code Linting |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd wedding-04
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

---

## 📁 Project Structure

```
wedding-04/
├── public/
│   └── musik.mp3              # Background music
├── src/
│   ├── assets/                # Images & static assets
│   ├── undangan/
│   │   ├── Pembuka.jsx        # Welcome section
│   │   ├── Acara.jsx          # Event details
│   │   ├── Gallery.jsx        # Photo gallery
│   │   ├── Story.jsx          # Love story
│   │   ├── RsvpSection.jsx    # RSVP form
│   │   ├── Hadiah.jsx         # Gift info
│   │   ├── Komentar.jsx       # Comments/Wishes
│   │   ├── Penutup.jsx        # Closing section
│   │   ├── Footer.jsx         # Footer
│   │   ├── Tombolbuka.jsx     # Open button & music control
│   │   └── index.css          # Section styles
│   ├── index.css              # Global styles
│   ├── main.jsx               # Entry point
│   └── Undangan.jsx           # Main component
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
└── package.json
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with HMR |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint for code quality |

---

## 🎨 Customization Guide

### 1. **Change Couple Names**
Edit `index.html` and relevant components:
```html
<title>Undangan Pernikahan [Name] & [Name]</title>
```

### 2. **Update Event Details**
Modify the `Acara.jsx` component with your event information.

### 3. **Replace Images**
Add your images to `src/assets/` and update imports.

### 4. **Change Background Music**
Replace `public/musik.mp3` with your preferred track.

### 5. **Customize Colors**
Edit the Tailwind configuration or add custom CSS in `src/index.css`.

### 6. **RSVP Configuration**
Update the RSVP form endpoint in `RsvpSection.jsx`.

---

## 🌐 Deployment

### Deploy to Netlify (Recommended)

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Connect to Netlify**
   - Push to GitHub/GitLab
   - Connect repository to [Netlify](https://netlify.com)
   - Build command: `pnpm build`
   - Publish directory: `dist`

3. **Environment Variables** (if needed)
   - Add any required env vars in Netlify dashboard

### Other Platforms

This project can be deployed to any static hosting:
- **Vercel** - Auto-detects Vite projects
- **GitHub Pages** - Use `gh-pages` package
- **Cloudflare Pages** - Drag & drop `dist` folder
- **Firebase Hosting** - Use Firebase CLI

---

## 📊 Performance

- ⚡ **Fast Development** with Vite HMR
- 📦 **Optimized Production Build** with code splitting
- 🖼️ **Image Optimization** script included (`optimize-images.mjs`)
- 🎯 **SEO Ready** with meta tags

---

## 🤝 Credits

- **Template**: Created with ❤️ for Edi & Noviana
- **Framework**: [React](https://react.dev)
- **Build Tool**: [Vite](https://vite.dev)
- **Styling**: [TailwindCSS](https://tailwindcss.com)
- **Animations**: [Motion](https://motion.dev)

---

## 📄 License

This project is private and for personal use only.

---

<div align="center">

**Made with 💕 for a special day**

*Edi Kurniawan & Noviana — March 29, 2026*

</div>
