"""
Test session model for tracking user test attempts
"""

from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum, Boolean, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum

from app.core.database import Base

class SessionType(str, enum.Enum):
    """Test session types enumeration"""
    PRACTICE = "practice"
    FULL_TEST = "full_test"
    ADAPTIVE_TEST = "adaptive_test"
    TOPIC_PRACTICE = "topic_practice"

class SessionStatus(str, enum.Enum):
    """Test session status enumeration"""
    ACTIVE = "active"
    PAUSED = "paused"
    COMPLETED = "completed"
    ABANDONED = "abandoned"

class TestSession(Base):
    """Test session model for tracking user test attempts"""
    
    __tablename__ = "test_sessions"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    
    # Session configuration
    session_type = Column(Enum(SessionType), nullable=False)
    status = Column(Enum(SessionStatus), default=SessionStatus.ACTIVE, nullable=False)
    
    # Session metadata
    configuration = Column(JSON, nullable=True)  # Test configuration and settings
    
    # Timing
    started_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    completed_at = Column(DateTime(timezone=True), nullable=True)
    paused_at = Column(DateTime(timezone=True), nullable=True)
    time_limit = Column(Integer, nullable=True)  # In minutes
    time_spent = Column(Integer, default=0, nullable=False)  # In seconds
    
    # Scoring
    total_questions = Column(Integer, default=0, nullable=False)
    answered_questions = Column(Integer, default=0, nullable=False)
    correct_answers = Column(Integer, default=0, nullable=False)
    total_score = Column(Integer, nullable=True)  # Final score
    section_scores = Column(JSON, nullable=True)  # Scores by section
    
    # Progress tracking
    current_question_index = Column(Integer, default=0, nullable=False)
    question_order = Column(JSON, nullable=True)  # Order of questions presented
    
    # Adaptive testing specific
    estimated_ability = Column(JSON, nullable=True)  # Current ability estimate
    difficulty_progression = Column(JSON, nullable=True)  # Track difficulty changes
    
    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
    
    # Relationships
    user = relationship("User", back_populates="test_sessions")
    answers = relationship("Answer", back_populates="test_session", cascade="all, delete-orphan")
    
    def __repr__(self) -> str:
        return f"<TestSession(id={self.id}, user_id={self.user_id}, type='{self.session_type}', status='{self.status}')>"
    
    @property
    def accuracy_percentage(self) -> float:
        """Calculate accuracy percentage"""
        if self.answered_questions == 0:
            return 0.0
        return (self.correct_answers / self.answered_questions) * 100
    
    @property
    def completion_percentage(self) -> float:
        """Calculate completion percentage"""
        if self.total_questions == 0:
            return 0.0
        return (self.answered_questions / self.total_questions) * 100
    
    @property
    def duration_minutes(self) -> int:
        """Get session duration in minutes"""
        return self.time_spent // 60
    
    def is_active(self) -> bool:
        """Check if session is active"""
        return self.status == SessionStatus.ACTIVE
    
    def is_completed(self) -> bool:
        """Check if session is completed"""
        return self.status == SessionStatus.COMPLETED
    
    def can_resume(self) -> bool:
        """Check if session can be resumed"""
        return self.status in [SessionStatus.ACTIVE, SessionStatus.PAUSED]
    
    def get_next_question_index(self) -> int:
        """Get the index of the next question to present"""
        return self.current_question_index
    
    def mark_question_answered(self, is_correct: bool = False):
        """Update session stats when a question is answered"""
        self.answered_questions += 1
        if is_correct:
            self.correct_answers += 1
        self.current_question_index += 1
    
    def complete_session(self):
        """Mark session as completed"""
        self.status = SessionStatus.COMPLETED
        self.completed_at = func.now()
    
    def pause_session(self):
        """Pause the session"""
        self.status = SessionStatus.PAUSED
        self.paused_at = func.now()
    
    def resume_session(self):
        """Resume the session"""
        self.status = SessionStatus.ACTIVE
        self.paused_at = None
