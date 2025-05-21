#  Auth App

A full-stack authentication application built with:

-  Backend: NestJS, MongoDB, JWT
-  Frontend: React + TypeScript
-  Secure and production-ready

---

##  Setup Instructions

### 1. Clone the Repository

git clone https://github.com/zeyad-elgendi/auth-app.git
cd auth-app

### 2. Start MongoDB with Docker

docker run -d -p 27017:27017 --name mongodb mongo


>  Requires Docker installed on your system.

---

##  Backend Setup (NestJS)

###  Go to the backend folder

cd backend

###  Install dependencies

npm install

###  Create `.env` file

PORT=3000
MONGO_URI=mongodb://localhost:27017/auth-app
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1h

###  Run the server

npm run start:dev

###  Backend API Overview

| Endpoint         | Method | Description                | Auth Required |
|------------------|--------|----------------------------|---------------|
| /auth/signup     | POST   | Create a new user          | No            |
| /auth/signin     | POST   | Login and get JWT token    | No            |
| /protected       | GET    | Protected route            | Yes (JWT)     |

###  Swagger Docs

Once running, open:

http://localhost:3000/api-docs

---

##  Frontend Setup (React)

###  Go to the frontend folder

cd frontend

###  Install dependencies

npm install

###  Create `.env` file

BASE_URL=http://localhost:3000

###  Run the React app

npm run dev

###  Frontend Pages

- /signup – Create account
- /signin – Login to your account
- /       – Protected Home Page

---

##  Nice to Haves

- [x] JWT-based authentication
- [x] MongoDB + Docker support
- [x] Swagger API docs
- [x] Configurable via `.env`
- [x] Modular NestJS & React structure

---

##  Scripts

# Backend
npm run start:dev        # NestJS dev mode
npm run build            # Production build

# Frontend
npm run dev              # React dev server
npm run build            # React production build

---

##  License

MIT 