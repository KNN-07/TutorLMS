# Project Brief: TutorLMS

## Project Overview
TutorLMS is a comprehensive Digital SAT Learning Management System designed to provide interactive practice modules, adaptive tests, and performance tracking for students preparing for the Digital SAT exam.

## Core Requirements

### Primary Goals
- Develop a robust web-based LMS platform tailored for Digital SAT preparation
- Provide interactive practice modules with adaptive testing capabilities
- Enable comprehensive performance tracking and analytics
- Support multimedia content delivery (videos, text, PDFs)

### Target Users
- **Students**: SAT test-takers seeking structured preparation
- **Administrators**: Content managers and platform administrators

### Success Criteria
- Students can take full-length adaptive SAT practice tests
- Performance analytics provide actionable insights
- Content delivery supports various media formats
- System scales to handle multiple concurrent users

## Technical Scope

### Tech Stack
- **Frontend**: React.js + Tailwind CSS
- **Backend**: Python (FastAPI)
- **Database**: PostgreSQL
- **Authentication**: JWT + OAuth (optional)
- **Storage**: AWS S3 or Firebase Storage
- **Deployment**: Docker + Nginx + Gunicorn
- **Hosting**: AWS EC2 / Render / Railway

### Core Features (MVP)
1. **Authentication System**
   - Student and admin roles
   - JWT-based secure login/register
   - Password reset flow

2. **Course and Content Delivery**
   - Sectioned SAT topics (Reading, Writing, Math)
   - Support for multimedia content (videos, text, PDFs)
   - Markdown-enabled lesson editor (admin only)

3. **Practice Engine**
   - Question bank with tagging (difficulty, topic, skill)
   - Timed practice mode with question randomizer
   - Save and resume test sessions

4. **Adaptive Full-Length Tests**
   - Section-adaptive logic mimicking the real SAT
   - Auto-scoring and answer explanations
   - Visual feedback on time and accuracy

5. **Analytics Dashboard**
   - User performance stats (accuracy, time per question, topic mastery)
   - Progress graphs using Chart.js or Recharts
   - Historical scores and performance trends

### Stretch Goals (Post-MVP)
- AI question recommendation engine
- Chatbot tutor assistant (e.g., RAG with LangChain)
- Mobile app using React Native or Flutter

## Project Constraints
- Must follow Digital SAT format and timing requirements
- Performance must handle concurrent test sessions
- Data privacy and security compliance required
- Scalable architecture for potential growth

## Non-Functional Requirements
- Response times under 2 seconds for standard operations
- 99.9% uptime during peak usage hours
- Support for 100+ concurrent users initially
- Mobile-responsive design
- Cross-browser compatibility

## Out of Scope (Initial Release)
- Physical SAT preparation content
- Live tutoring/video chat features
- Payment processing integration
- Multi-language support
