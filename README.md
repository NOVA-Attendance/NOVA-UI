# NOVA – Smart Attendance and Monitoring System (UI)

This repository contains the **frontend interface** for NOVA, a smart attendance and monitoring dashboard built using **React + Vite + Material UI (MUI)**.

It provides a modern, responsive, and dark-themed analytics dashboard for administrators to visualize attendance data, monitor sessions, and manage student insights in real-time.

---

##  Tech Stack

- **React 18 + Vite** for fast development and hot module reload (HMR)
- **Material UI (MUI 6)** for component library and theming
- **Recharts** for charts and analytics visualization
- **Firebase (Planned Integration)** for authentication and data storage
- **Custom NOVA Theme** for consistent branding (see `/src/theme/AppTheme.jsx`)

---

##  Quick Start

### Requirements
- Node.js **v18+**
- npm **v9+**

###  Clone the Repository
```bash
1 git clone https://github.com/NOVA-Attendance/NOVA-UI.git
cd NOVA-UI

2️ Install Dependencies  (required before running dev)
npm install

3️ (Optional) Local Environment Setup
cp .env.example .env.local

4️ Run Development Server
npm run dev