# 🛍️ NextMart

**NextMart** is your one‑stop destination for quality digital products, premium gadgets, and unbeatable deals delivered instantly.  
We connect innovation, convenience, and trust to bring you a smarter way to shop online.  
From tech gear to software essentials, NextMart makes finding what you need simple, secure, and fast.

---

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 3  
- **Authentication:** Firebase Auth (Google + Email/Password)  
- **UI Enhancements:** React Toastify + React Hot Toast for notifications  
- **Carousel:** Swiper JS 12  
- **HTTP Client:** Axios  
- **State Handling / Hooks:** React 19 hooks  
- **Deployment:** Vercel  

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/next-mart.git
cd next-mart
2️⃣ Install dependencies
npm install
3️⃣ Configure Firebase
Create a project in Firebase Console,
enable Email/Password and Google sign‑in, then add your credentials to a local environment file:
.env.local
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_API_URL=https://your-deployed-backend.vercel.app

4️⃣ Run locally
Bash
npm run dev
App will be available at:
   http://localhost:3000


**Route Summary**
Route	Description	Access
/	Hero section, Features, Products preview, Testimonials – home page	Public
/about	Overview of NextMart’s mission & values	Public
/product	Product list page (fetched from backend API or Firebase)	Public
/product/[id]	Individual product details	Public
/login	Firebase Google / Email login	Guest only
/register	Firebase registration (page)	Guest only
/AddProduct	Add new product via form (API POST)	Authenticated
/ManageProducts	View / delete your added products	Authenticated
/api/products	API route for fetching products (JSON response)	Server
/api/auth/[...nextauth]	NextAuth /Firebase authentication integration	Server