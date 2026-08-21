# AI-Powered Mock Interview Platform

An AI-powered mock interview platform designed to bridge the gap between **knowing an answer and performing under interview conditions**.

The platform simulates realistic technical interviews by generating personalized questions from a candidate's resume, conducting voice-based interviews, supporting live coding challenges, and providing detailed AI-generated performance feedback.

## 🎯 Problem

Preparing for interviews often focuses on reading questions and studying concepts, but interviews require candidates to **think, communicate, and perform in real time**.

Traditional approaches have limitations:

* Practicing with friends may not provide industry-relevant questions.
* Watching interview videos does not provide speaking practice.
* Reading Q&A lists encourages memorization rather than explanation.
* Paid mock interviews can be expensive and difficult to schedule.

This platform provides an AI interviewer that is available **24/7**, allowing candidates to repeatedly practice realistic interviews and receive immediate feedback.

## 🚀 Key Features

### Resume-Based Interview Questions

* Upload a PDF resume.
* Extract resume text automatically.
* Generate personalized interview questions using Google Gemini.
* Questions are tailored to the selected role and candidate experience.

### 🎙️ Voice-Based Interviews

* AI interviewer named **Natalie**.
* AI questions can be converted to speech using Murf AI.
* Candidates can record verbal answers.
* AssemblyAI converts recorded answers into text.
* Contextual follow-up questions are generated from the conversation.

### 💻 Live Coding

* Built-in Monaco code editor.
* Coding questions are included in technical interviews.
* Submitted code is evaluated using Gemini.
* Code submissions and evaluations are stored with the interview.

### 📊 AI-Powered Feedback

After completing an interview, Gemini generates a detailed performance report containing scores across five categories, strengths, improvement areas, and a final assessment.

### 📚 Interview History

* View previous interviews.
* Paginated interview history.
* View feedback for completed interviews.
* Resume interviews that are still in progress.
* Delete individual interviews.
* Clear interview history.

### 📈 Dashboard

The dashboard provides:

* Total interviews
* Completed interviews
* Average score
* Three most recent interviews
* Quick access to start a new interview

### 🎯 Multi-Role Support

The platform supports interview preparation for roles such as:

* Frontend Developer
* Backend Developer
* Full Stack Developer
* Data Analyst
* DevOps
* And more

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* Axios
* Monaco Editor

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### AI & Voice

* Google Gemini
* AssemblyAI
* Murf AI

### Authentication & Utilities

* JWT authentication
* Multer for file uploads
* PDF.js for resume text extraction

---

## 🏗️ Architecture

```text
                         AI Mock Interview Platform
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
             React Frontend              Node.js Backend
                    │                           │
          ┌─────────┴─────────┐        ┌───────┴────────┐
          │                   │        │                │
      Setup Page         Interview     Controllers     Services
          │                   │        │                │
      Feedback            Voice/Code   Routes       Business Logic
      History                 │        │                │
          │                   │        └────────┬───────┘
          └───────────┬───────┘                 │
                      │                         │
                 Axios API                     │
                                                │
                 ┌──────────────────────────────┼─────────────────┐
                 │                              │                 │
             MongoDB                         Gemini          Voice APIs
                                                     ┌────────────┴────────────┐
                                                     │                         │
                                                AssemblyAI                  Murf AI
                                               Speech → Text              Text → Speech
```

## 🔄 Interview Flow

```text
Resume Upload
      ↓
PDF Text Extraction
      ↓
Interview Setup
(Role + Difficulty)
      ↓
Gemini Generates Personalized Questions
      ↓
AI Interviewer
      ↓
Voice / Text Answer
      ↓
AssemblyAI Speech-to-Text
      ↓
Gemini Evaluates Answer
      ↓
Contextual Follow-Up
      ↓
Coding Challenge
      ↓
Gemini Code Evaluation
      ↓
Final AI Feedback
      ↓
Interview History
      ↓
Dashboard Statistics
```

---

## 📁 Project Structure

```text
AI-Powered Mock Interview Platform/
│
├── client/
│   └── src/
│       ├── components/
│       │   ├── AudioPlayer/
│       │   ├── VoiceRecorder/
│       │   ├── ConversationalMic/
│       │   ├── CodeEditor/
│       │   ├── ScoreCard/
│       │   └── InterviewCard/
│       │
│       ├── pages/
│       │   ├── LoginPage/
│       │   ├── HomePage/
│       │   ├── InterviewSetupPage/
│       │   ├── InterviewPage/
│       │   ├── FeedbackPage/
│       │   └── HistoryPage/
│       │
│       └── services/
│           ├── api.js
│           ├── interviewService.js
│           └── historyService.js
│
├── server/
│   └── src/
│       ├── config/
│       ├── constants/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       ├── services/
│       └── utils/
│
└── README.md
```

## 🧠 AI Architecture

Google Gemini acts as the central AI service.

The backend provides different prompt templates for:

* Interview question generation
* Interview greeting
* Contextual follow-up questions
* Final performance feedback
* Code evaluation

Conversation history is provided to Gemini so follow-up questions can consider what the candidate actually said during the interview.

Gemini responses that contain JSON are cleaned and parsed before being used by the application.

---

## 📄 Resume Processing

The resume workflow is:

```text
PDF Upload
    ↓
Multer
    ↓
PDF.js
    ↓
Text Extraction
    ↓
MongoDB
    ↓
Gemini
    ↓
Personalized Interview Questions
```

Each user has a resume record containing the uploaded filename and extracted resume text.

Re-uploading a resume updates the existing resume record for that user.

---

## 🎙️ Voice Interview Architecture

### Candidate Answer

```text
Microphone
    ↓
MediaRecorder API
    ↓
Audio Blob
    ↓
Backend
    ↓
AssemblyAI
    ↓
Transcribed Text
    ↓
Gemini
    ↓
Follow-Up Question
```

### AI Interviewer

```text
Gemini
   ↓
Generated Question
   ↓
Murf AI
   ↓
Audio
   ↓
AudioPlayer
   ↓
Candidate
```

The interview page manages four main states:

```text
Speaking → Listening → Thinking → Speaking
```

The flow continues until the interview is completed.

---

## 💻 Coding Interview Flow

Coding questions are presented using the Monaco Editor.

```text
Coding Question
      ↓
Monaco Editor
      ↓
Candidate Code
      ↓
Backend
      ↓
Gemini Code Evaluation
      ↓
Evaluation Stored
      ↓
Next Question / Final Feedback
```

---

## 📊 Feedback & History

When an interview ends, Gemini generates the final feedback.

The feedback is stored with the interview so that it can be retrieved later without unnecessarily generating the same feedback again.

The history system supports:

* Pagination
* Individual interview retrieval
* Individual deletion
* Clearing all history

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key
ASSEMBLYAI_API_KEY=your_assemblyai_api_key
MURF_API_KEY=your_murf_api_key
```

**Never commit your `.env` file or API keys to GitHub.**

---

## ⚙️ Installation

### Prerequisites

* VS Code
* Node.js
* MongoDB Atlas account
* Google Gemini API key
* AssemblyAI API key
* Murf AI API key

### Backend

```bash
cd server
npm install
```

### Frontend

Open another terminal:

```bash
cd client
npm install
```

### Run the Application

Start the backend and frontend using the project's configured development commands.

---

## 🔌 API Structure

The backend exposes API routes for:

```text
/api/auth/...
/api/resume/...
/api/interview/...
/api/history/...
```

### Resume

```text
POST /api/resume/upload
GET  /api/resume
```

### Interview

```text
POST /api/interview/start
POST /api/interview/:id/answer
POST /api/interview/:id/voice-answer
POST /api/interview/:id/code
POST /api/interview/:id/end
GET  /api/interview/:id
POST /api/interview/transcribe
POST /api/interview/speak
```

### History

```text
GET    /api/history
GET    /api/history/:id
DELETE /api/history/:id
DELETE /api/history/clear
```

---

## 🏆 Core Functionalities

The project was developed around three major functionalities:

### 1. Resume Upload & Interview Setup

* Gemini AI configuration
* Prompt templates
* Resume model
* PDF parsing
* Resume upload
* Interview model
* Interview creation
* Role and difficulty selection

### 2. AI Interview

* AssemblyAI speech-to-text
* Murf AI text-to-speech
* Voice recording
* AI follow-up questions
* Live coding
* Code evaluation
* Interview state management

### 3. Feedback & Interview History

* AI-generated feedback
* Five-category scoring
* Interview history
* Pagination
* Dashboard statistics
* Feedback visualization

---

## 🔮 Future Improvements

Potential future improvements include:

* More adaptive interview questioning
* Additional interview roles
* More coding languages
* Improved coding evaluation
* More detailed performance analytics
* Additional AI interviewer personalities
* Progress tracking across multiple interviews

---

## 📌 Project Goal

The goal of this project is to make interview preparation more realistic by moving beyond passive preparation and giving candidates an opportunity to **practice speaking, coding, responding under pressure, and receiving immediate AI-driven feedback**.

> **Knowing the answer is not enough. The goal is to practice performing the answer.**
