# 🎨 Mini SaaS Frontend

A modern frontend application built with **React, Vite, and
TailwindCSS**, designed to complement the **Mini SaaS Backend API**.\
This project demonstrates secure authentication flows, role-based
routing, subscription management, and an admin dashboard with a clean,
industrial UI/UX.

---

## ✨ Features

- 🔐 **Authentication**
  - Login, Register, Logout
  - JWT Access & Refresh token handling via Axios interceptors
  - Automatic profile fetching on login or page refresh
- 👤 **User Features**
  - Profile page with subscription details
  - Ability to change subscription plan (Free / Pro)
  - Toastify notifications for success/error feedback
- 🛠️ **Admin Dashboard**
  - Admin-only access with protected routes
  - Manage all users (CRUD operations)
  - Edit user details (name, email, role, plan)
  - Responsive modal for editing users
- 🎨 **UI/UX**
  - Responsive design with TailwindCSS
  - Industrial Navbar with active link highlighting
  - Animated components and modals
  - Gradient background and branding favicon/logo

---

## 🌍 Live Links

### 🔗 Backend API (Working)

**Production Base URL:**\
![Deployment](https://img.shields.io/badge/Hosted%20on-Render-blue)\
https://mini-saas-backend-api.onrender.com

**Local Base URL:**\
http://localhost:5000

✔ Use the production URL for public testing\
✔ Use the local URL for development

### 💻 Frontend Live  
![Deployment](https://img.shields.io/badge/Hosted%20on-Vercel-black)  
https://mini-saa-s-frontend.vercel.app/


---

## 🛠️ Tech Stack

- **Frontend Framework:** React + Vite
- **Styling:** TailwindCSS
- **Routing:** React Router
- **HTTP Client:** Axios (with interceptors)
- **Notifications:** React-Toastify
- **State Management:** React Context API (AuthContext)

---

## 🖼️ Application Preview

<p align="center">
  <img src="https://i.ibb.co/S75Vg4Lz/mini-saa-s-frontend-vercel-app.png" 
       alt="Mini SaaS Frontend Preview" 
       style="max-width:100%; height:auto; border-radius:12px;" />
</p>


## 🚀 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Kunalsahuji/Mini-SaaS-Frontend.git
cd Mini-SaaS-Frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment variables

Create a `.env` file in the root directory:

```env
VITE_BASE_URL=https://mini-saas-backend-api.onrender.com
VITE_BASE_URL=http://localhost:5000
```

✔ Use the production URL for public testing\
✔ Use the local URL for development

---

## 📂 Folder Structure

```bash
Mini-SaaS-Frontend/
├── public/              # Static assets (favicon/logo)
├── src/
│   ├── components/      # Navbar, UserEditModal, etc.
│   ├── pages/           # Home, Login, Register, Profile, Subscription, AdminDashboard
│   ├── context/         # AuthContext for authentication state
│   ├── services/        # Axios instance (api.js)
│   ├── App.jsx          # Main app with routes
│   └── main.jsx         # Entry point
├── index.html           # HTML template with favicon/logo
├── .env                 # Environment variables
├── package.json
└── README.md
```

---

## ▶️ Running the Project

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

---

## 🔑 Frontend Routes

- `/` → Home page
- `/login` → Login page
- `/register` → Register page
- `/profile` → User profile (protected)
- `/subscription` → Change subscription plan (protected)
- `/admin` → Admin Dashboard (protected, admin-only)

---

## 🧪 Testing

1.  **Register** a user → see success toast
2.  **Login** → validate credentials and fetch profile
3.  **Invalid Login** → see error toast (Invalid email or password)
4.  **Profile** → test protected route
5.  **Change Plan** → upgrade Free → Pro
6.  **Admin Dashboard** → login as admin and manage users (CRUD)

---

## 👨‍💻 About the Developer

**Kunal Sahu**\
Full Stack Developer with hands-on experience in **JavaScript, Node.js,
Express, MongoDB, React**, and modern frontend/backend architectures.\
Skilled in building **secure, scalable, and production-grade
applications**, with internship experience in **.NET and Full Stack
Development**.

---

## 🔗 Connect with Me

📦 **GitHub:** https://github.com/Kunalsahuji  
🔗 **LinkedIn:** https://www.linkedin.com/in/kunal-sahu-7688ba1b0  
📌 **Notion:** https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4  
📧 **Email:** ksahu0103@gmail.com

---

⭐ If you found this project helpful, feel free to **star the
repository** and connect with me!
