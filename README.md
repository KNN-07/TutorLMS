
#### **Project Title:**

**TutorLMS – Digital SAT Learning Management System**

#### **Project Goal:**

To develop a robust web-based LMS platform tailored for Digital SAT preparation. The system will provide interactive practice modules, adaptive tests, and performance tracking using a Python backend.

---

### **Core Features to Develop:**

#### 1. **Authentication System**

* Student and admin roles
* JWT-based secure login/register
* Password reset flow

#### 2. **Course and Content Delivery**

* Sectioned SAT topics (Reading, Writing, Math)
* Support for multimedia content (videos, text, PDFs)
* Markdown-enabled lesson editor (admin only)

#### 3. **Practice Engine**

* Question bank with tagging (difficulty, topic, skill)
* Timed practice mode with question randomizer
* Save and resume test sessions

#### 4. **Adaptive Full-Length Tests**

* Section-adaptive logic mimicking the real SAT
* Auto-scoring and answer explanations
* Visual feedback on time and accuracy

#### 5. **Analytics Dashboard**

* User performance stats (accuracy, time per question, topic mastery)
* Progress graphs using Chart.js or Recharts
* Historical scores and performance trends

---

### **Tech Stack**

* **Frontend:** React.js + Tailwind CSS
* **Backend:** Python (FastAPI preferred for speed & async support)
* **Database:** PostgreSQL (relational, good for structured SAT content)
* **Authentication:** JWT + OAuth (optional)
* **Cloud/File Storage:** AWS S3 or Firebase Storage (for videos, PDFs)
* **Deployment:** Docker + Nginx + Gunicorn (for FastAPI)
* **Hosting:** AWS EC2 / Render / Railway (depending on scale)

---

### **Stretch Goals (Post-MVP)**

* AI question recommendation engine
* Chatbot tutor assistant (e.g., RAG with LangChain)
* Mobile app using React Native or Flutter

