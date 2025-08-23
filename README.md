# 🕒 Clock Store - Next.js 15 App

A simple e-commerce style application built with **Next.js 15 (App Router)** and **NextAuth.js**.  
This app demonstrates **public pages, protected routes, authentication, and product management**.  

🚀 Live Demo: [Clock Store](https://clock-store-eta.vercel.app/)  
📂 GitHub Repo: [clock-store-with-nextjs](https://github.com/islamemon59/clock-store-with-nextjs)

---

## 📌 Features

### ✅ Core Features
1. **Landing Page (`/`)**
   - Includes **Navbar, Hero, Product Highlights, Footer**
   - Navigation to Login and Products
   - Publicly accessible (no auth required)

2. **Login with NextAuth (`/login`)**
   - Social login (Google) or credentials login
   - Redirects to `/products` after successful login

3. **Product List Page (`/products`)**
   - Publicly accessible
   - Fetches and displays product list from a mock backend/file
   - Each product includes:
     - Name, description, price, and a **details button**

4. **Product Details Page (`/products/[id]`)**
   - Displays full details of a single product
   - Publicly accessible

5. **Protected Page: Add Product (`/dashboard/add-product`)**
   - Only accessible when logged in
   - Includes a form to add a new product
   - Stores product data in database (mock or API route)
   - Redirects unauthenticated users to login

---

### 🎁 Optional Enhancements (Implemented/Planned)
- ✅ Loading spinner when submitting forms  
- ✅ Toast notifications on successful product add  
- ✅ Light/Dark theme toggle  

---

## 🛠️ Technologies Used
- **Next.js 15 (App Router)**  
- **NextAuth.js** for authentication  
- **TailwindCSS** for styling  
- **Route Handlers (/api)** for backend APIs  

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/islamemon59/clock-store-with-nextjs.git
   cd clock-store-with-nextjs
