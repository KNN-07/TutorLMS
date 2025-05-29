# Technical Context: TutorLMS

## Technology Stack

### Frontend Technologies
- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS for utility-first styling
- **State Management**: Redux Toolkit + RTK Query for API state
- **Routing**: React Router v6 for client-side navigation
- **Charts/Analytics**: Chart.js or Recharts for data visualization
- **Forms**: React Hook Form with Zod validation
- **Testing**: Jest + React Testing Library + Cypress for E2E

### Backend Technologies
- **Framework**: FastAPI (Python 3.11+)
- **Database ORM**: SQLAlchemy 2.0 with async support
- **Authentication**: JWT with python-jose
- **Validation**: Pydantic v2 for request/response models
- **Testing**: pytest + pytest-asyncio + httpx
- **Documentation**: Auto-generated OpenAPI/Swagger docs

### Database & Storage
- **Primary Database**: PostgreSQL 15+
- **Caching**: Redis for session storage and caching
- **File Storage**: AWS S3 or Firebase Storage for multimedia content
- **Search**: PostgreSQL full-text search (with potential Elasticsearch upgrade)

### DevOps & Infrastructure
- **Containerization**: Docker + Docker Compose for development
- **Web Server**: Nginx as reverse proxy
- **Application Server**: Gunicorn with Uvicorn workers
- **Monitoring**: Prometheus + Grafana (future)
- **Logging**: Structured logging with JSON format

## Development Environment Setup

### Prerequisites
```bash
# Required software versions
Python 3.11+
Node.js 18+ with npm/yarn
PostgreSQL 15+
Redis 7+
Docker & Docker Compose
Git
```

### Project Structure
```
tutor-lms/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page-level components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── store/          # Redux store configuration
│   │   ├── services/       # API service layer
│   │   ├── utils/          # Utility functions
│   │   └── types/          # TypeScript type definitions
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # FastAPI application
│   ├── app/
│   │   ├── core/           # Core configuration and security
│   │   ├── models/         # SQLAlchemy models
│   │   ├── schemas/        # Pydantic schemas
│   │   ├── repositories/   # Data access layer
│   │   ├── services/       # Business logic layer
│   │   ├── api/           # API route handlers
│   │   └── tests/         # Test files
│   ├── alembic/           # Database migrations
│   └── requirements.txt
├── docker-compose.yml      # Development environment
├── docker-compose.prod.yml # Production environment
└── README.md
```

### Database Schema
```sql
-- Core tables with relationships
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'student',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    content JSONB NOT NULL,
    question_type VARCHAR(50) NOT NULL,
    difficulty_level INTEGER NOT NULL,
    subject VARCHAR(100) NOT NULL,
    topic VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE test_sessions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    session_type VARCHAR(50) NOT NULL,
    status VARCHAR(50) DEFAULT 'active',
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL,
    total_score INTEGER NULL
);

CREATE TABLE answers (
    id SERIAL PRIMARY KEY,
    session_id INTEGER REFERENCES test_sessions(id),
    question_id INTEGER REFERENCES questions(id),
    user_answer JSONB NOT NULL,
    is_correct BOOLEAN NOT NULL,
    time_spent INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Development Workflow

### Local Development Setup
```bash
# Clone repository
git clone <repository-url>
cd tutor-lms

# Backend setup
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Database setup
createdb tutor_lms
alembic upgrade head

# Frontend setup
cd ../frontend
npm install

# Start development servers
# Terminal 1: Backend
cd backend && uvicorn app.main:app --reload --port 8000

# Terminal 2: Frontend
cd frontend && npm start

# Terminal 3: Database & Redis (using Docker)
docker-compose up postgres redis
```

### Environment Variables
```bash
# Backend (.env)
DATABASE_URL=postgresql://user:pass@localhost/tutor_lms
REDIS_URL=redis://localhost:6379
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USERNAME=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
S3_BUCKET_NAME=tutor-lms-content

# Frontend (.env)
REACT_APP_API_URL=http://localhost:8000
REACT_APP_ENVIRONMENT=development
```

## API Design Patterns

### RESTful API Structure
```
/api/v1/
├── /auth/              # Authentication endpoints
│   ├── POST /login
│   ├── POST /register
│   ├── POST /refresh
│   └── POST /logout
├── /users/             # User management
│   ├── GET /me
│   ├── PUT /me
│   └── GET /{user_id}
├── /questions/         # Question management
│   ├── GET /
│   ├── POST /
│   ├── GET /{id}
│   └── PUT /{id}
├── /tests/             # Test sessions
│   ├── POST /start
│   ├── GET /{session_id}
│   ├── POST /{session_id}/answer
│   └── POST /{session_id}/complete
└── /analytics/         # Performance analytics
    ├── GET /user/{user_id}
    ├── GET /session/{session_id}
    └── GET /aggregate
```

### Response Format Standards
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation completed successfully",
  "errors": null,
  "metadata": {
    "timestamp": "2024-01-01T00:00:00Z",
    "version": "v1"
  }
}
```

## Testing Strategy

### Backend Testing
```python
# Unit tests with pytest
pytest app/tests/unit/

# Integration tests
pytest app/tests/integration/

# API tests
pytest app/tests/api/

# Test configuration
[tool.pytest.ini_options]
testpaths = ["app/tests"]
python_files = ["test_*.py"]
python_classes = ["Test*"]
python_functions = ["test_*"]
addopts = "-v --tb=short"
asyncio_mode = "auto"
```

### Frontend Testing
```javascript
// Unit tests with Jest + RTL
npm test

// E2E tests with Cypress
npm run cypress:open

// Test coverage
npm run test:coverage
```

## Security Considerations

### Authentication & Authorization
- JWT tokens with refresh token rotation
- Password hashing with bcrypt
- Role-based access control (RBAC)
- API rate limiting with slowapi
- CORS configuration for frontend domains

### Data Protection
- SQL injection prevention via SQLAlchemy ORM
- XSS protection with proper input sanitization
- CSRF protection for state-changing operations
- Secure headers (HSTS, CSP, etc.)
- Input validation with Pydantic schemas

### Infrastructure Security
- Environment variable management
- Database connection encryption
- Redis password protection
- S3 bucket access policies
- Regular dependency updates

## Performance Considerations

### Database Optimization
- Connection pooling with SQLAlchemy
- Database indexes on frequently queried columns
- Query optimization with EXPLAIN ANALYZE
- Read replicas for analytics queries
- Database connection monitoring

### Caching Strategy
- Redis for session storage
- Application-level caching for static content
- CDN for media files
- Browser caching with proper headers
- Cache invalidation strategies

### Frontend Performance
- Code splitting with React.lazy()
- Bundle optimization with Webpack
- Image optimization and lazy loading
- Service worker for offline functionality
- Performance monitoring with Web Vitals

## Deployment Architecture

### Docker Configuration
```dockerfile
# Backend Dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["gunicorn", "app.main:app", "-w", "4", "-k", "uvicorn.workers.UvicornWorker"]

# Frontend Dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
```

### Production Environment
- Load balancer (Nginx/HAProxy)
- Application servers (multiple FastAPI instances)
- Database cluster (Primary/Replica setup)
- Redis cluster for high availability
- CDN for static content delivery
- SSL/TLS termination
- Monitoring and alerting setup

## Development Tools & Standards

### Code Quality
- **Linting**: ESLint for TypeScript, Black + isort for Python
- **Type Checking**: TypeScript strict mode, mypy for Python
- **Pre-commit Hooks**: husky + lint-staged for frontend, pre-commit for backend
- **Code Formatting**: Prettier for frontend, Black for backend

### Documentation
- API documentation auto-generated with FastAPI
- Component documentation with Storybook
- Architecture diagrams with Mermaid
- Code comments following language conventions
