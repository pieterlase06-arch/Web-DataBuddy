<div align="center">
  
# 📊 DataBuddy - Financial AI IDE

**A Radical Responsive Data Analysis Environment built with React, Vite, and Tailwind CSS**

[![React](https://img.shields.io/badge/React-18.3-blue.svg?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple.svg?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Tauri Ready](https://img.shields.io/badge/Tauri-Ready-yellow.svg?style=flat&logo=tauri)](https://tauri.app/)

</div>

<br/>

DataBuddy is a modern, high-performance local IDE specifically tailored for financial data analysis. It features a unique **3-Panel Split Screen Layout** for desktop, seamlessly transforming into a **Bottom Navigation Interface** for mobile/touch devices.

> Designed to be built as a native Desktop application (via Tauri) and an Android APK, featuring **Radical Responsive Design**.

---

## ✨ Key Features

### 🖥️ Native Desktop Experience
- **Custom Title Bar**: A frameless window experience designed for modern OS environments.
- **3-Panel Split Screen**: Simultaneous view of Workspace Tree, Data Grid, and AI Chat.
- **Ultra-Dense Data Grid**: Maximize vertical space with zero-margin borders and compact typography (`text-xs`, `py-0.5`), allowing users to monitor dozens of financial rows at a glance.
- **Absolute Viewport Containment**: Fixed 100vh height-oriented layout with independent scroll zones to mimic a true IDE.

### 📱 Radical Responsive Mobile UI
- **Dynamic Viewport Support**: Utilizes `100dvh` and CSS `safe-area-inset` to perfectly adapt to Android system navigation and camera notches.
- **Touch-Friendly Hit Targets**: The data grid intelligently loosens row padding (`py-3`) on mobile screens to ensure CSV rows are effortlessly tappable.
- **Bottom Navigation Bar**: The 3-panel layout shatters into a focused, single-view app mode navigated via a bottom tab bar (Files / Grid / AI Chat).

### 🤖 Intelligent AI Workspace
- **Context-Aware Assistance**: Local AI companion designed to interpret financial structures.
- **Custom Merging Animation**: Replaces traditional loading spinners with a sophisticated, Framer Motion powered geometric merging animation (using CSS `mix-blend-mode`) representing advanced computation. Responsive scaling ensures it looks great on any screen.

---

## 🛠️ Tech Stack

* **Core**: React 18, TypeScript, Vite
* **Styling**: Tailwind CSS (v3), Lucide React (Icons)
* **Animations**: Framer Motion
* **Target Platforms**: Web, Desktop (.exe / .app via Tauri), Mobile (.apk via Tauri)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and npm installed.

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/databuddy.git
   cd databuddy
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Run the development server
   ```bash
   npm run dev
   ```

### Building for Production
To bundle the application for production deployment:
```bash
npm run build
```

---

## 🎨 UI Showcase

| Desktop View (Dense Mode) | Mobile View (Touch-Friendly) | AI Analyzing State |
| :---: | :---: | :---: |
| 🗂️ 3-Panel Split Screen | 📱 Bottom Nav Tabs | ✨ Merging Geometric Shapes |
| `md:py-0.5` Table Rows | `py-3` Table Rows | Responsive `scale-75` |

<br/>

<div align="center">
  <i>Crafted with precision for analysts and developers alike.</i>
</div>
