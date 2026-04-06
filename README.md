# 🚀 Finance Dashboard Backend

## 📌 Overview

This project is a backend system for managing financial records with role-based access control.
It allows users to track income and expenses, perform CRUD operations, and view aggregated dashboard insights.

---

## 🧰 Tech Stack

* Node.js
* Express.js
* MongoDB
* JWT Authentication

---

## 👥 User Roles

* **Viewer** → Can only view records
* **Analyst** → Can view records and insights
* **Admin** → Full access (create, update, delete, manage users)

---

## 🔐 Features

* User registration and login (JWT-based authentication)
* Role-based authorization using middleware
* CRUD operations for financial records
* Dashboard summary APIs (income, expense, balance)
* Clean and scalable backend architecture

---

## 📊 API Endpoints

### 🔑 Auth Routes

* `POST /api/auth/register` → Register a user
* `POST /api/auth/login` → Login and get token

### 💰 Record Routes

* `POST /api/records` → Create record (Admin only)
* `GET /api/records` → Get all records
* `PUT /api/records/:id` → Update record (Admin only)
* `DELETE /api/records/:id` → Delete record (Admin only)

### 📈 Dashboard

* `GET /api/records/summary` → Get financial summary

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd finance-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```
MONGO_URI=mongodb://127.0.0.1:27017/financeDB
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the server

```bash
node server.js
```

---

## 🧪 Testing

Use Postman to test APIs:

* Register → Login → Get Token
* Add token in headers
* Perform CRUD operations
* Check summary API

---

## 📌 Assumptions

* Role is manually assigned (default: viewer)
* Single-user financial tracking system
* Basic validation implemented

---

## 🚀 Future Improvements

* Pagination and filtering
* Swagger API documentation
* Unit and integration tests
* Deployment on cloud (Render / AWS)

---

## 🎯 Key Highlights

* Implemented secure authentication using JWT
* Role-based access control using middleware
* Clean MVC architecture
* Aggregated dashboard APIs for financial insights

---

## 👨‍💻 Author

Anshu Kumar Roy
