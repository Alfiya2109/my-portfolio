# 🌟 3D Developer Portfolio - Alfiya Khan

🔗 **Live Website Demo**: [https://alfiya-portfolio.vercel.app/](https://alfiya-portfolio.vercel.app/)

A modern, interactive 3D developer portfolio website built with **React 19, Three.js, React Three Fiber, GSAP, and Tailwind CSS**.

---

## 🛠️ Languages & Technologies Used

- **Languages**: 
  - **JavaScript (ES6+)** / **JSX (React 19)**
  - **HTML5**
  - **CSS3** (with Tailwind CSS v4)
- **3D & Graphics**:
  - **Three.js** (WebGL 3D Engine)
  - **@react-three/fiber** (React renderer for Three.js)
  - **@react-three/drei** (Useful helpers & abstractions for R3F)
  - **@react-three/postprocessing** & **postprocessing** (Selective Bloom and Visual Effects)
- **Animations**:
  - **GSAP** & **@gsap/react** (ScrollTrigger, Timeline, smooth reveal animations)
  - **Framer Motion** (Modern UI transitions)
- **Styling**:
  - **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Build Tool**:
  - **Vite 6** (Fast, modern frontend build tool)
- **Email Service**:
  - **@emailjs/browser** (Contact form email delivery)

---

## 📦 Prerequisites

Before running this project, ensure you have:
- **Node.js** installed (Version 18.x or 20.x or higher recommended)
- **npm** (comes automatically with Node.js)

Check if Node is installed by running in your terminal:
```bash
node -v
npm -v
```

---

## 🚀 Quick Setup & Installation Guide

To run this project on any computer, follow these simple steps:

### Step 1: Open the Project Directory
Open your terminal / command prompt and navigate to the project folder:
```bash
cd "3D-portfolio"
```

### Step 2: Install All Dependencies
Run this single command. It will automatically read `package.json` and install all required libraries and packages:
```bash
npm install
```
*(Alternative if using yarn/pnpm: `yarn install` or `pnpm install`)*

---

### Step 3: Run the Development Server
Start the local development server:
```bash
npm run dev
```

Once running, open your browser and go to:
👉 **`http://localhost:5173/`**

---

## 🏗️ Production Build

To create an optimized production build:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```text
3D-portfolio/
├── public/                 # Static assets (3D GLTF models, images, textures)
│   ├── images/
│   └── models/
├── src/
│   ├── components/         # Reusable React components & 3D models
│   │   ├── HeroModels/     # 3D Room, Particles, and Lighting
│   │   ├── Models/         # 3D Tech Logos & Computer models
│   │   ├── NavBar.jsx
│   │   ├── GlowCard.jsx
│   │   └── AnimatedCounter.jsx
│   ├── constants/          # Site content, project links, tech stack data
│   │   └── index.js
│   ├── sections/           # Page sections (Hero, Experience, Showcase, TechStack, Contact)
│   ├── App.jsx             # Main App layout
│   ├── index.css           # Global styles and Tailwind CSS imports
│   └── main.jsx            # React root entry point
├── package.json            # Dependencies & scripts manifest
└── vite.config.js          # Vite & Tailwind configuration
```

---

## 📬 Contact Setup (EmailJS)
If you want to configure your own contact form to receive emails directly:
1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Create an `.env` file in the root folder with your credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
