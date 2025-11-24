# 📝 Todo App (Backend with MongoDB)

A simple backend for a Todo application built using:

- **Node.js + Express**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **Bcrypt Password Hashing**
- **CORS for frontend communication**

This project demonstrates full backend development with clean API routes and MongoDB integration, ready to connect to any frontend.

---

## 🚀 Features

### 🔐 Authentication
- Signup
- Signin
- Password hashing (bcrypt)
- JWT token-based protected routes

### 🗒️ Todo Management
- Add todo
- Delete todo
- View all todos (protected route)
- User-specific data isolation

---

## 📦 Project Structure

todo-backend/
├─ models/
│ ├─ User.js
│ └─ Todo.js
├─ routes/
│ ├─ authRoutes.js
│ └─ todoRoutes.js
├─ middleware/
│ └─ authMiddleware.js
├─ .env
├─ .gitignore
├─ server.js
├─ package.json
└─ README.md


---

## ▶️ Running the Project

### 1️⃣ Install dependencies
``` bash
cd todo-backend
npm install
```
---

### 2️⃣ Create your .env file
```
MONGO_URL=your-mongodb-connection-string
JWT_SECRET=yourSecretKey
PORT=3000
```

Important: Do not commit .env to GitHub.

---

### 3️⃣ Start Backend
```bash
node server.js
```

The backend will run on:
http://localhost:3000

## 🧪 API Endpoints

Auth
| Method | Endpoint     | Description           |
| ------ | ------------ | --------------------- |
| POST   | /auth/signup | Create account        |
| POST   | /auth/signin | Login & get JWT token |

Todos (Protected)
| Method | Endpoint  | Description     |
| ------ | --------- | --------------- |
| GET    | /todos    | Get all todos   |
| POST   | /todo     | Create new todo |
| DELETE | /todo/:id | Delete a todo   |

Send JWT token in the Authorization header for protected routes.

## 📌 What You Learn Here
-Connecting Express to MongoDB using Mongoose
-User authentication with JWT
-Password security using bcrypt
-Protecting routes with middleware
-Structuring a backend project professionally
-Performing CRUD operations with MongoDB

## 📜 License

This project is licensed under the MIT License.

Happy Coding! 🎉

