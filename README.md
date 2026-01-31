# 🚀 TechCrunch '25 — MNNIT Tech Festival Website

TechCrunch '25 is the official digital experience for **MNNIT Allahabad’s premier technical festival**.  
Designed as a **sanctuary for builders, thinkers, and creators**, the website blends modern web engineering with immersive visuals to deliver a high-performance, futuristic interface.

it is an **interactive platform** built to scale for thousands of users, registrations, and real-time exploration of events, tracks, and schedules.

---

## 🌌 Vision & Philosophy

> *“Technology should feel alive.”*

The TechCrunch ’25 website is built around this idea.  
Every scroll, hover, and interaction is intentional — from the physics-based 3D Solar System to the adaptive navigation and smooth micro-animations.

The goal:
- Inspire curiosity
- Reduce cognitive overload
- Make exploration feel natural and exciting

---

## ✨ Key Features

### 🌍 Interactive 3D Solar System
- Built using **Three.js**
- Acts as a living background element
- Users can **click and drag planets** to interact with orbital motion
- Optimized to avoid layout shifts and canvas clipping

### 🧭 Smart Navigation System
- Scroll-aware navbar:
  - Hides on scroll down
  - Reveals on scroll up
- Dynamically adapts **background color and contrast** based on the active section
- Designed to visually “dissolve” into the page instead of feeling boxed

### 🗺️ 7-Day Interactive Agenda
- Entire festival mapped into a **7-day journey**
- Hover-based depth effects to simulate spatial movement
- Events include:
  - Hackathons
  - Robo-Wars
  - DJ Nights
  - Design Sprints
  - Grand Finale

### 🧠 Innovation Tracks
Clearly defined exploration tracks that guide participants:

- **AI & Machine Learning**
- **Web3 & Decentralized Systems**
- **Robotics & Hardware**
- **Cyber Security**
- **Bio-Science & Deep Tech**
- **Open Innovation**

Each track is visually differentiated and designed for clarity at a glance.

### 📝 Integrated Registration System
- Custom registration modal
- Supports **multiple team sizes**
- Input validation per track
- Built to scale with backend integration

### 🎨 High-Performance UI/UX
- Custom cursor using `mix-blend-mode: difference`
- Smooth GSAP animations
- Grid-based background design for visual consistency
- Fully responsive across screen sizes

---

## 🖼️ Site Preview

<div align="center">
<h1>TechCrunch 25 Hero Section</h1>
<img src="https://github.com/ashrith1932/IIC_WEB_NEW/blob/main/iic_web_new_1.png" alt="TechCrunch 25 Hero Section" width="800px" />
<br /><br />
  <h1>Event Tracks</h1>
<img src="https://github.com/ashrith1932/IIC_WEB_NEW/blob/main/IIC_WEB_NEW_5.png" alt="Event Tracks" width="800px" />
<br /><br />
<h1>Schedule View</h1>
<img src="https://github.com/ashrith1932/IIC_WEB_NEW/blob/main/IIC_WEB_NEW_3.png" alt="Schedule View" width="800px" />
<br /><br />
<h1>Register Model</h1>
<img src="https://github.com/ashrith1932/IIC_WEB_NEW/blob/main/IIC_WEB_NEW_2.png" alt="register model" width="800px" />

</div>

---

## 🛠️ Tech Stack

| Category | Technology |
|--------|-----------|
| **Framework** | React 19 (Functional Components & Hooks) |
| **Bundler** | Vite |
| **Styling** | Tailwind CSS 4.0 |
| **3D Engine** | Three.js |
| **Animations** | GSAP + CSS Keyframes |
| **Icons** | Lucide React |
| **State & Logic** | React Hooks & Refs |
| **Rendering** | Canvas + DOM Hybrid |

---

## ⚙️ Architecture Highlights

- **Canvas isolated from layout flow** to avoid clipping
- Refs used for:
  - Renderer
  - Camera
  - Scene lifecycle control
- Resize & DPR handling for performance
- Page-level positioning for 3D elements (not component-locked)

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### Clone the Repository
```bash
git clone https://github.com/ashrith1932/iic_web_new.git
