# AI-Powered Mock Interview Platform

An AI-powered mock interview platform that helps users practice technical interviews through personalized questions, resume-based interview preparation, voice interviews, live coding, and AI-generated performance feedback.

## 🚀 Live Demo

Frontend: https://ai-mock-interview-frontend-jade.vercel.app

Backend API: https://ai-mock-interview-api.vercel.app

## ✨ Features

- 🔐 User registration and login
- 📄 Resume upload and PDF text extraction
- 🤖 AI-generated personalized interview questions
- 🎯 Interview configuration based on role and difficulty
- 🎤 Voice-based interviews
- 🗣️ Speech-to-text using AssemblyAI
- 🔊 Text-to-speech using Murf AI
- 💻 Live coding interview environment
- 📊 AI-powered interview scoring
- 💬 Personalized feedback after interviews
- 📜 Interview history
- 📈 Dashboard with interview statistics
- ☁️ Cloud deployment using Vercel
- 🗄️ MongoDB-based data persistence

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router
- Axios
- React Icons
- Monaco Editor
- React Hot Toast
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- PDF parsing
- CORS

### AI & External Services

- Google Gemini API — AI interview question generation and feedback
- AssemblyAI — Speech-to-text
- Murf AI — Text-to-speech

### Deployment

- Vercel
- GitHub

## 🏗️ Project Structure

    ai-powered-mock-interview-platform/
    │
    ├── client/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── pages/
    │   │   ├── services/
    │   │   ├── context/
    │   │   ├── hooks/
    │   │   ├── App.jsx
    │   │   └── main.jsx
    │   ├── public/
    │   ├── package.json
    │   └── vite.config.js
    │
    ├── server/
    │   ├── src/
    │   │   ├── controllers/
    │   │   ├── middleware/
    │   │   ├── models/
    │   │   ├── routes/
    │   │   ├── services/
    │   │   └── app.js
    │   ├── server.js
    │   └── package.json
    │
    ├── .gitignore
    └── README.md

## 🧩 System Architecture

    ┌──────────────────────────────┐
    │          React Client        │
    │                              │
    │  Dashboard                   │
    │  Interview Setup             │
    │  Voice Interview             │
    │  Live Coding                 │
    │  Resume Analysis             │
    │  AI Scoring                 │
    │  Interview History           │
    └──────────────┬───────────────┘
                   │
                   │ Axios API Requests
                   ▼
    ┌──────────────────────────────┐
    │       Express.js Server      │
    │                              │
    │  Authentication             │
    │  Interview Routes            │
    │  Resume Routes               │
    │  History Routes              │
    │  Business Logic              │
    │  Error Handling              │
    └───────┬──────────┬───────────┘
            │          │
            │          │
            ▼          ▼
       ┌─────────┐  ┌──────────────┐
       │ MongoDB │  │ Gemini API   │
       │         │  │              │
       │ Users   │  │ Questions    │
       │ Resume  │  │ Feedback     │
       │ History │  │ Scoring      │
       └─────────┘  └──────────────┘
                         │
             ┌───────────┴───────────┐
             │                       │
             ▼                       ▼
       ┌─────────────┐        ┌─────────────┐
       │ AssemblyAI  │        │   Murf AI   │
       │             │        │             │
       │ Speech →    │        │ Text →      │
       │ Text        │        │ Speech      │
       └─────────────┘        └─────────────┘

## 🔄 Interview Flow

    Resume Upload
          ↓
    PDF Text Extraction
          ↓
    Interview Setup
    (Role + Difficulty)
          ↓
    Gemini Generates
    Personalized Questions
          ↓
    User Answers
          ↓
    Voice / Text / Coding
          ↓
    AI Evaluation
          ↓
    Score + Feedback
          ↓
    Interview Result
          ↓
    Interview History

## 📄 Resume Analysis Flow

    User uploads PDF resume
             ↓
    Backend receives file
             ↓
    PDF text extraction
             ↓
    Extracted resume content
             ↓
    Resume stored in MongoDB
             ↓
    Resume information used
    for personalized interviews

## 🎤 Voice Interview Flow

    Interview Question
            ↓
       Murf AI
            ↓
       Audio Output
            ↓
       User Response
            ↓
       AssemblyAI
            ↓
     Speech-to-Text
            ↓
       Gemini AI
            ↓
      AI Evaluation

## 💻 Live Coding

The platform provides an interactive coding environment using Monaco Editor.

Users can:

- Read coding questions
- Write code inside the browser
- Modify and test their solutions
- Practice technical coding interviews
- Receive AI-based evaluation as part of the interview experience

## 🤖 AI Interview Engine

Google Gemini is used as the core AI engine.

The AI system supports:

- Personalized interview question generation
- Resume-aware questions
- Technical interview questions
- Difficulty-based questioning
- Candidate answer evaluation
- Performance feedback
- Interview scoring

## 🔐 Authentication

The backend provides authentication for users.

Authentication includes:

- User registration
- User login
- Password protection
- JWT-based authentication
- Protected API routes
- Authenticated interview history

## 🗄️ Database

MongoDB is used for persistent application data.

The database stores information such as:

- User accounts
- Resume information
- Interview sessions
- Interview answers
- Scores
- Feedback
- Interview history

## ⚙️ Environment Variables

### Client

Create a `.env` file inside the `client` directory.

    VITE_API_URL=your_backend_api_url

### Server

Create a `.env` file inside the `server` directory.

    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLIENT_URL=your_frontend_url
    GEMINI_API_KEY=your_gemini_api_key
    ASSEMBLYAI_API_KEY=your_assemblyai_api_key
    MURF_API_KEY=your_murf_api_key

Do not commit `.env` files or API keys to GitHub.

## 💻 Local Setup

### 1. Clone the repository

    git clone https://github.com/manikanta-2310/ai-powered-mock-interview-platform.git

    cd ai-powered-mock-interview-platform

### 2. Install frontend dependencies

    cd client
    npm install

### 3. Install backend dependencies

    cd ../server
    npm install

### 4. Configure environment variables

Add the required environment variables to the `.env` files in the client and server directories.

### 5. Start the backend

    cd server
    npm run dev

### 6. Start the frontend

Open another terminal:

    cd client
    npm run dev

The frontend will normally run on:

    http://localhost:5173

The backend will normally run on:

    http://localhost:5000

## 📡 Backend API

The backend API is organized under the `/api` prefix.

    /api/auth
    /api/interview
    /api/resume
    /api/history

The API handles authentication, interviews, resume processing, interview history, and related business logic.

## ☁️ Deployment

The application is deployed using Vercel.

### Frontend

The React/Vite application is deployed separately with the `client` directory configured as the root directory.

### Backend

The Express API is deployed separately with the `server` directory configured for the backend deployment.

Environment variables are configured through Vercel rather than being committed to the repository.

## 🧪 Build

To create a production build of the frontend:

    cd client
    npm run build

To preview the production build locally:

    npm run preview

## 📊 Main User Journey

    Register / Login
           ↓
       Dashboard
           ↓
    Upload Resume
           ↓
    Select Interview
    Role + Difficulty
           ↓
    Start Interview
           ↓
    AI Questions
           ↓
    Answer Questions
           ↓
    Coding / Voice / Text
           ↓
    AI Evaluation
           ↓
    Score & Feedback
           ↓
    View History

## 🎯 Project Objective

The goal of this project is to simulate a realistic technical interview environment using AI.

Instead of practicing generic interview questions, the platform combines:

- Candidate resume information
- Job/interview role
- Difficulty level
- AI-generated questions
- Voice interaction
- Coding practice
- Automated evaluation
- Personalized feedback

This creates a more interactive and personalized interview preparation experience.

## 🔮 Future Improvements

- Real-time AI conversational interviews
- More programming languages for live coding
- Automated code execution and test cases
- Advanced resume-job description matching
- Detailed skill-wise performance analytics
- Adaptive interview difficulty
- Interview recommendations based on previous performance
- More AI voice providers
- Real-time interview transcription
- Advanced recruiter/admin dashboard

## 👨‍💻 Author

Manikanta

GitHub: https://github.com/manikanta-2310

## 📜 License

This project is developed for educational and portfolio purposes.