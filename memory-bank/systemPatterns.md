# System Patterns: TutorLMS

## System Architecture

### High-Level Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Frontend │    │  FastAPI Backend │    │  PostgreSQL DB  │
│   + Tailwind CSS │◄──►│   + SQLAlchemy   │◄──►│   + Redis Cache  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Static Assets  │    │  File Storage   │    │   Analytics     │
│   (S3/CDN)      │    │  (S3/Firebase)  │    │   Engine        │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Component Architecture

#### Frontend Components (React)
- **Layout Components**: Header, Sidebar, Footer
- **Auth Components**: Login, Register, PasswordReset
- **Dashboard Components**: StudentDashboard, AdminDashboard
- **Test Components**: TestSession, QuestionDisplay, Timer
- **Analytics Components**: ProgressCharts, PerformanceMetrics
- **Content Components**: LessonViewer, VideoPlayer, PDFViewer

#### Backend Modules (FastAPI)
- **Authentication**: JWT handling, role-based access
- **User Management**: CRUD operations, profiles
- **Content Management**: Questions, lessons, multimedia
- **Test Engine**: Adaptive algorithms, session management
- **Analytics**: Performance calculation, reporting
- **Admin Tools**: Content upload, user management

## Key Design Patterns

### 1. Repository Pattern
**Purpose**: Separate data access logic from business logic
**Implementation**:
```python
# Abstract repository interface
class UserRepository(ABC):
    @abstractmethod
    async def create(self, user: UserCreate) -> User:
        pass
    
    @abstractmethod
    async def get_by_id(self, user_id: int) -> Optional[User]:
        pass

# Concrete implementation
class SQLUserRepository(UserRepository):
    def __init__(self, db: AsyncSession):
        self.db = db
    
    async def create(self, user: UserCreate) -> User:
        # Database implementation
        pass
```

### 2. Service Layer Pattern
**Purpose**: Encapsulate business logic and coordinate between repositories
**Implementation**:
```python
class UserService:
    def __init__(self, user_repo: UserRepository, email_service: EmailService):
        self.user_repo = user_repo
        self.email_service = email_service
    
    async def register_user(self, user_data: UserCreate) -> User:
        # Business logic for user registration
        user = await self.user_repo.create(user_data)
        await self.email_service.send_welcome_email(user.email)
        return user
```

### 3. Strategy Pattern (Adaptive Testing)
**Purpose**: Implement different adaptive algorithms
**Implementation**:
```python
class AdaptiveStrategy(ABC):
    @abstractmethod
    def select_next_question(self, performance_history: List[Answer]) -> Question:
        pass

class IRT_Strategy(AdaptiveStrategy):
    def select_next_question(self, performance_history: List[Answer]) -> Question:
        # Item Response Theory implementation
        pass

class SimpleAdaptiveStrategy(AdaptiveStrategy):
    def select_next_question(self, performance_history: List[Answer]) -> Question:
        # Simple difficulty-based selection
        pass
```

### 4. Observer Pattern (Real-time Updates)
**Purpose**: Handle real-time updates for test progress and analytics
**Implementation**:
```python
class TestSessionObserver(ABC):
    @abstractmethod
    async def on_answer_submitted(self, answer: Answer):
        pass

class AnalyticsObserver(TestSessionObserver):
    async def on_answer_submitted(self, answer: Answer):
        # Update real-time analytics
        pass

class ProgressObserver(TestSessionObserver):
    async def on_answer_submitted(self, answer: Answer):
        # Update progress tracking
        pass
```

### 5. Factory Pattern (Question Generation)
**Purpose**: Create different types of questions and content
**Implementation**:
```python
class QuestionFactory:
    @staticmethod
    def create_question(question_type: str, data: dict) -> Question:
        if question_type == "multiple_choice":
            return MultipleChoiceQuestion(**data)
        elif question_type == "grid_in":
            return GridInQuestion(**data)
        elif question_type == "essay":
            return EssayQuestion(**data)
        else:
            raise ValueError(f"Unknown question type: {question_type}")
```

## Data Patterns

### 1. Database Schema Design
```sql
-- Core entities with clear relationships
Users ──┐
        ├── TestSessions ──┐
        │                  ├── Answers
        │                  └── SessionAnalytics
        └── UserProgress ──┘

Questions ──┐
           ├── QuestionTags
           ├── Answers
           └── QuestionAnalytics

Courses ──┐
         ├── Lessons
         ├── UserProgress
         └── ContentItems
```

### 2. Caching Strategy
- **Redis for Session Data**: Active test sessions, user tokens
- **Application-Level Caching**: Question pools, user analytics
- **CDN for Static Content**: Images, videos, PDFs
- **Database Query Caching**: Frequently accessed content

### 3. Event Sourcing (Analytics)
**Purpose**: Track all user interactions for comprehensive analytics
```python
class UserEvent:
    user_id: int
    event_type: str
    timestamp: datetime
    data: dict

# Events: answer_submitted, session_started, lesson_viewed, etc.
```

## Security Patterns

### 1. Authentication Flow
```
Client ──► JWT Token ──► API Gateway ──► Service Layer
   │                                           │
   └─── Refresh Token ◄─── Token Refresh ◄────┘
```

### 2. Authorization Patterns
- **Role-Based Access Control (RBAC)**: Student, Admin, Instructor roles
- **Resource-Based Permissions**: Users can only access their own data
- **API Rate Limiting**: Prevent abuse and ensure fair usage

### 3. Data Protection
- **Encryption at Rest**: Sensitive user data encrypted in database
- **Encryption in Transit**: HTTPS/TLS for all communications
- **Data Anonymization**: Analytics data stripped of PII when possible

## Performance Patterns

### 1. Database Optimization
- **Connection Pooling**: Efficient database connection management
- **Read Replicas**: Separate read/write operations
- **Indexing Strategy**: Optimized indexes for common queries
- **Query Optimization**: Eager loading, pagination, filtering

### 2. Async Processing
- **Background Tasks**: Email sending, analytics processing
- **Queue Management**: Celery/Redis for task scheduling
- **Streaming**: Real-time updates using WebSockets

### 3. Scalability Patterns
- **Horizontal Scaling**: Load balancers, multiple app instances
- **Microservices Ready**: Modular design for future decomposition
- **Stateless Design**: No server-side session storage

## Error Handling Patterns

### 1. Centralized Error Handling
```python
class APIException(Exception):
    def __init__(self, status_code: int, detail: str):
        self.status_code = status_code
        self.detail = detail

@app.exception_handler(APIException)
async def api_exception_handler(request: Request, exc: APIException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail}
    )
```

### 2. Graceful Degradation
- **Fallback Mechanisms**: Default content when services unavailable
- **Circuit Breaker**: Prevent cascade failures
- **Retry Logic**: Automatic retry with exponential backoff

### 3. Monitoring and Logging
- **Structured Logging**: JSON format for easy parsing
- **Health Checks**: Endpoint monitoring for all services
- **Error Tracking**: Integration with error monitoring services

## Testing Patterns

### 1. Test Architecture
- **Unit Tests**: Individual component testing
- **Integration Tests**: API and database integration
- **End-to-End Tests**: Full user journey testing
- **Performance Tests**: Load testing for concurrent users

### 2. Test Data Management
- **Factory Pattern**: Generate test data consistently
- **Database Fixtures**: Predictable test environments
- **Mock Services**: External service simulation
