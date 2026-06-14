# 🤖 Twin AI — Signup Page

A modern, responsive signup page for **Twin AI** — an AI-powered sales twin platform. Built with **React**, **TypeScript**, and **Vite**.

---

## ✨ Features

- 🎨 Split-screen layout — brand panel on the left, signup form on the right
- 💅 Twin brand colors — hot pink gradient theme (`#FF2D6B → #FF6B35`)
- 🔐 Google OAuth button (UI only)
- 📧 Email signup form with live focus highlight
- 🌀 Animated floating orbs on the brand panel
- 📊 Feature pills and social proof section
- 🖱️ Smooth hover micro-interactions on all buttons
- 📱 Clean, professional UI built with inline React styles
- ⚡ Zero external UI libraries — pure React + TypeScript

---

## 🖼️ Page Structure

```
twin-app-login/
├── src/
│   ├── App.tsx              → Root component, renders TwinSignup
│   ├── TwinSignup.tsx       → Main signup page component
│   ├── assets/
│   │   └── twin-logo.png    → Twin brand logo
│   ├── index.css            → Global styles (minimal/reset)
│   └── main.tsx             → App entry point
├── public/                  → Static assets
├── index.html               → HTML entry point
├── package.json             → Project dependencies
├── tsconfig.json            → TypeScript config
├── vite.config.ts           → Vite build config
└── .gitignore               → Excludes node_modules etc.
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

| Tool | Version | Download |
|------|---------|----------|
| Node.js | 18 or above (LTS) | [nodejs.org](https://nodejs.org) |
| npm | comes with Node.js | — |
| Git | any recent version | [git-scm.com](https://git-scm.com) |

To verify your installations, run:
```bash
node --version
npm --version
git --version
```

---

### 🔧 Installation & Running Locally

**Step 1 — Clone the repository**
```bash
git clone https://github.com/AshwiniMurugappan/twin-app-login.git
```

**Step 2 — Navigate into the project folder**
```bash
cd twin-app-login
```

**Step 3 — Install all dependencies**
```bash
npm install
```
> This downloads all required packages listed in `package.json` into a local `node_modules/` folder. This may take 1–2 minutes.

**Step 4 — Start the development server**
```bash
npm run dev
```

**Step 5 — Open in browser**

Visit 👉 `http://localhost:5173`

You should see the Twin AI signup page running live!

---

### 🪟 Windows Users — Important Note

If you get this error when running npm commands:
```
npm : File cannot be loaded because running scripts is disabled on this system.
```

Fix it by opening **PowerShell as Administrator** and running:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Type `Y` and press Enter. Then try `npm run dev` again.

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts local development server at `localhost:5173` |
| `npm run build` | Builds the app for production into the `dist/` folder |
| `npm run preview` | Previews the production build locally |

---

## 🎨 Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Hot Pink | `#FF2D6B` | Primary brand color, buttons, accents |
| Coral Orange | `#FF6B35` | Gradient end color |
| Soft Pink BG | `#fff5f7` | Page background |
| Light Pink | `#FFF0F4` | Badge background |

### Gradient
```css
background: linear-gradient(135deg, #FF2D6B 0%, #FF6B35 100%);
```

### Typography
- Font: `Inter` (system fallback: `-apple-system`, `BlinkMacSystemFont`)
- Heading weight: `800`
- Body weight: `400–600`

---

## 🧠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI component library |
| TypeScript | Type-safe JavaScript |
| Vite | Fast dev server and build tool |
| Inline styles | Scoped, conflict-free styling |

---


## 🤝 Contributing

1. Clone the repository
2. Create a new branch — `git checkout -b feature/your-feature-name`
3. Make your changes
4. Commit — `git commit -m "Add: your feature description"`
5. Push — `git push origin feature/your-feature-name`
6. Open a Pull Request on GitHub

---

## 👨‍💻 Built With ❤️ by

> Ashwini Murugappan Twin AI Internship Team

---

## 📄 License

This project is for internal/internship use only. All rights reserved © Twin AI.

