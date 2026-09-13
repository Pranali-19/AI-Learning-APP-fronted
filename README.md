# 🤖 AI Learning Platform

An AI-powered full-stack learning platform that transforms study documents into interactive **flashcards and quizzes using Google Gemini AI**, helping learners study smarter, test their knowledge, and track their learning progress.

## 🚀 Live Demo

### 🌐 Frontend

**[Open AI Learning Platform](https://ai-learning-app-frontend.vercel.app/)**

### ⚙️ Backend API

**[Backend API](https://ai-learning-app-p4y6.onrender.com)**

> The application may require users to register or log in to access protected learning features.

---

## 📌 About the Project

The **AI Learning Platform** is a full-stack web application designed to make self-learning more interactive and efficient.

Users can upload learning documents and use **Generative AI** to automatically create educational resources such as flashcards and quizzes. Users can then review flashcards, test their knowledge, and track their learning activity.

The project demonstrates practical experience in:

* Full-stack web development
* Generative AI integration
* REST API development
* Document processing
* MongoDB database management
* JWT authentication
* Interactive React development
* Learning progress tracking
* Cloud deployment

The application was developed with a focus on **automation, usability, and real-world application of AI**.

---

## ✨ Features

### 📄 Document-Based Learning

* Upload learning documents
* Store and manage documents
* Generate learning content from uploaded material

### 🤖 AI-Powered Flashcards

* Automatically generate flashcards using Gemini AI
* Interactive flashcard review
* Previous/Next card navigation
* Star important flashcards
* Track flashcard review activity

### 🧠 AI-Generated Quizzes

* Generate quizzes from uploaded learning content
* Multiple-choice questions
* Automatic answer evaluation
* Score calculation
* Quiz completion tracking

### 📊 Learning Progress

* Track learning activity
* Monitor quiz performance
* Record completed activities
* Review learning progress

### 🔐 Authentication

* User registration and login
* JWT-based authentication
* Protected API routes
* User-specific learning data

### ⚡ Modern UI

* Responsive React interface
* Reusable components
* Interactive learning experience
* Loading and error states
* Toast notifications

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* React Router
* Tailwind CSS
* Lucide React
* React Hot Toast

### Backend

* Node.js
* Express.js
* REST APIs
* JWT
* Multer

### Database

* MongoDB
* Mongoose
* MongoDB Atlas

### AI

* Google Gemini API
* Generative AI
* AI-powered flashcard generation
* AI-powered quiz generation

### Deployment & Tools

* Git
* GitHub
* VS Code
* Vercel
* Render
* MongoDB Atlas

---

## 🔄 How It Works

```text
User
  │
  ▼
React + Vite Frontend
  │
  │ REST API
  ▼
Node.js + Express Backend
  │
  ├──────────────► MongoDB Atlas
  │
  └──────────────► Google Gemini AI
                         │
                         ▼
                  AI Generated Content
                   ┌───────────────┐
                   │  Flashcards   │
                   │  Quizzes      │
                   └───────────────┘
                         │
                         ▼
                  Learning Progress
```

### Application Flow

**1. Authentication**

Users create an account or log in using the authentication system.

**2. Upload Document**

The user uploads a study document through the React frontend.

**3. Backend Processing**

The document is sent to the Node.js/Express backend and associated with the authenticated user.

**4. AI Processing**

The backend communicates with Google Gemini AI to generate educational content based on the uploaded document.

**5. Generate Learning Materials**

The application creates flashcards and quizzes from the generated content.

**6. Interactive Learning**

Users review flashcards and complete quizzes to test their understanding.

**7. Progress Tracking**

Quiz results and learning activities are stored so users can monitor their progress.

---

## 📂 Project Structure

```text
AI-Learning-Platform/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🎯 Key Learning Outcomes

This project provided hands-on experience with:

* Building and deploying a full-stack application
* Integrating Generative AI into a real-world product
* Designing and consuming REST APIs
* Working with MongoDB and Mongoose
* Implementing JWT authentication
* Handling document uploads
* Managing asynchronous API operations
* Building reusable React components
* Connecting frontend and backend services
* Managing environment variables securely
* Debugging production and deployment issues
* Deploying applications using Vercel and Render

---

## 🔮 Future Improvements

* Personalized AI learning recommendations
* Adaptive quizzes based on performance
* AI explanations for incorrect answers
* Spaced-repetition flashcard scheduling
* Advanced learning analytics
* Support for additional document formats
* Improved mobile experience
* Voice-based learning assistance

---

## 👩‍💻 Developer

### Pranali Parteti

**Computer Science Engineering Graduate | Full-Stack & AI Enthusiast**

Interested in building practical applications using **AI, web technologies, and problem-solving**.

### 🔗 Connect

* 💼 LinkedIn: [Pranali Parteti](https://www.linkedin.com/in/pranali-parteti-86727026b/)
* 🐙 GitHub: [Pranali-19](https://github.com/Pranali-19)

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub!
