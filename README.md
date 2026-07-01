# AI Resume Bullet Improver

> Transform simple resume points into professional, ATS-friendly achievements using Artificial Intelligence.

---

## 📖 Overview

AI Resume Bullet Improver is a modern web application that helps users rewrite basic resume bullet points into polished, professional, and ATS-friendly statements using AI. The application provides an intuitive interface where users can select their preferred writing style, experience level, and technology stack before generating an optimized resume bullet.

To protect API credentials, the application uses a **Vercel Serverless Function** that securely communicates with the AI provider. The frontend never exposes the API key.

---

## ✨ Features

- 🤖 AI-powered resume bullet improvement
- 📄 ATS-friendly resume optimization
- ✍️ Multiple writing styles
- 👨‍💻 Experience level selection
- 💻 Technology-specific optimization
- 🌙 Dark & Light theme
- 📱 Fully responsive design
- 📋 One-click copy to clipboard
- 💾 Automatic form persistence using Local Storage
- 🍔 Mobile-friendly navigation
- ⚡ Fast serverless AI integration
- 🔒 Secure API key management with Vercel Functions

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)
- CSS Variables
- Fetch API
- Local Storage API
- Font Awesome
- Google Fonts (Inter)

### Backend

- Vercel Serverless Functions
- Node.js

### Artificial Intelligence

- Groq API
- Llama 3.3 70B Versatile Model

---

## 📂 Project Structure

```text
AI-Resume-Bullet-Improver/
│
├── api/
│   └── improve.js
│
├── assets/
│
├── css/
│   ├── style.css
│   └── responsive.css
│
├── js/
│   ├── app.js
│   ├── api.js
│   ├── storage.js
│   └── ui.js
│
├── index.html
├── package.json
├── vercel.json
├── .gitignore
└── README.md
```

---

## 🚀 How It Works

1. User enters a resume bullet point.
2. User selects:
   - Writing Style
   - Experience Level
   - Technology

3. The frontend sends the request to a Vercel Serverless Function.
4. The serverless function securely communicates with the Groq AI API.
5. The AI generates an improved, ATS-friendly resume bullet.
6. The optimized result is displayed and can be copied with one click.

---

## 🔄 Application Workflow

```text
User Input
      │
      ▼
Resume Form
      │
      ▼
JavaScript Validation
      │
      ▼
POST Request
      │
      ▼
Vercel Serverless Function
      │
      ▼
Groq AI API
      │
      ▼
Optimized Resume Bullet
      │
      ▼
Display Result
      │
      ▼
Copy to Clipboard
```

---

## 💡 Key Features

### Resume Bullet Improvement

Transforms simple resume statements into professional and ATS-friendly achievements.

### ATS Optimization

Uses strong action verbs and professional wording suitable for Applicant Tracking Systems.

### Writing Styles

Supports different writing styles such as:

- Professional
- ATS Friendly
- Technical
- Leadership
- Concise

### Experience Levels

- Student
- Fresher
- Intern
- Junior Developer
- Experienced

### Technology Focus

- General
- Frontend
- Backend
- JavaScript
- Python
- Django
- React
- Angular
- Full Stack

---

## 🔒 Security

This project does **not** expose the AI API key to the browser.

Security is achieved using:

- Vercel Serverless Functions
- Environment Variables
- Backend API communication

---

## 📦 Installation

Clone the repository.

```bash
git clone https://github.com/charanepuri/ai-resume-bullet-improver.git
```

Navigate into the project.

```bash
cd ai-resume-bullet-improver
```

Install dependencies.

```bash
npm install
```

Create an environment file.

```text
.env.local
```

Add your Groq API key.

```env
GROQ_API_KEY=your_api_key_here
```

Run locally using the Vercel development server.

```bash
vercel dev
```

---

## 🌐 Deployment

The project is designed for deployment on **Vercel**.

Deployment includes:

- Static frontend hosting
- Serverless backend
- Secure environment variables
- HTTPS support
- Global CDN

---

## 🎯 Skills Demonstrated

- Responsive Web Design
- Modern UI/UX Development
- Vanilla JavaScript
- DOM Manipulation
- Fetch API
- REST API Integration
- Serverless Functions
- Environment Variable Management
- AI Integration
- Local Storage
- Clipboard API
- Error Handling
- Secure API Architecture

---

## 👨‍💻 Author

**Epuri Charan Teja**

Aspiring Python Full Stack Developer

---

## 🌐 Connect With Me

**GitHub**

[Profile](https://github.com/charanepuri)

**LinkedIn**

[Profile](https://www.linkedin.com/in/charan-teja-972aa9231)

---

## 🚀 Explore My Portfolios

**Django Portfolio**

[Link](https://portfolio-site-django.onrender.com)

**React Portfolio**

[Link](https://charan-react-portfolio.vercel.app)

**Flask Portfolio**

[Link](https://flask-developer-dashboard-portfolio.onrender.com/)

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project helpful, consider giving it a star on GitHub!
