"""
Question model for storing SAT questions and content
"""

from sqlalchemy import Column, Integer, String, Text, JSON, DateTime, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum

from app.core.database import Base

class QuestionType(str, enum.Enum):
    """Question types enumeration"""
    MULTIPLE_CHOICE = "multiple_choice"
    GRID_IN = "grid_in"
    ESSAY = "essay"
    READING_COMPREHENSION = "reading_comprehension"

class DifficultyLevel(str, enum.Enum):
    """Difficulty levels enumeration"""
    EASY = "easy"
    MEDIUM = "medium"
    HARD = "hard"

class Subject(str, enum.Enum):
    """SAT subjects enumeration"""
    READING = "reading"
    WRITING = "writing"
    MATH = "math"

class Question(Base):
    """Question model for storing SAT questions"""
    
    __tablename__ = "questions"
    
    id = Column(Integer, primary_key=True, index=True)
    
    # Content stored as JSON for flexibility
    content = Column(JSON, nullable=False)
    
    # Question metadata
    question_type = Column(Enum(QuestionType), nullable=False)
    difficulty_level = Column(Enum(DifficultyLevel), nullable=False)
    subject = Column(Enum(Subject), nullable=False)
    topic = Column(String(100), nullable=False, index=True)
    
    # Additional metadata
    tags = Column(JSON, nullable=True)  # Array of skill tags
    estimated_time = Column(Integer, nullable=True)  # In seconds
    
    # Admin fields
    created_by = Column(Integer, nullable=True)  # User ID of creator
    is_active = Column(Integer, default=True, nullable=False)
    
    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
    
    # Relationships
    answers = relationship("Answer", back_populates="question", cascade="all, delete-orphan")
    
    def __repr__(self) -> str:
        return f"<Question(id={self.id}, type='{self.question_type}', subject='{self.subject}', topic='{self.topic}')>"
    
    @property
    def question_text(self) -> str:
        """Extract question text from JSON content"""
        return self.content.get("question_text", "")
    
    @property
    def correct_answer(self) -> str:
        """Extract correct answer from JSON content"""
        return self.content.get("correct_answer", "")
    
    @property
    def choices(self) -> list:
        """Extract answer choices from JSON content (for multiple choice)"""
        return self.content.get("choices", [])
    
    @property
    def explanation(self) -> str:
        """Extract explanation from JSON content"""
        return self.content.get("explanation", "")
    
    def is_correct_answer(self, user_answer: str) -> bool:
        """Check if user's answer is correct"""
        if self.question_type == QuestionType.MULTIPLE_CHOICE:
            return user_answer.strip().upper() == self.correct_answer.strip().upper()
        elif self.question_type == QuestionType.GRID_IN:
            # For grid-in questions, compare numeric values
            try:
                return float(user_answer) == float(self.correct_answer)
            except (ValueError, TypeError):
                return user_answer.strip() == self.correct_answer.strip()
        else:
            # For essay questions, manual grading is required
            return False
