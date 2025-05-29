"""
Answer model for storing user responses to questions
"""

from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.core.database import Base

class Answer(Base):
    """Answer model for storing user responses to questions"""
    
    __tablename__ = "answers"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    test_session_id = Column(Integer, ForeignKey("test_sessions.id"), nullable=False, index=True)
    question_id = Column(Integer, ForeignKey("questions.id"), nullable=False, index=True)
    
    # Answer content
    user_answer = Column(JSON, nullable=False)  # Store answer as JSON for flexibility
    is_correct = Column(Boolean, nullable=False)
    
    # Timing and metadata
    time_spent = Column(Integer, nullable=False)  # Time spent in seconds
    attempt_number = Column(Integer, default=1, nullable=False)  # For retries
    
    # Additional metadata
    confidence_level = Column(Integer, nullable=True)  # 1-5 scale (if collected)
    flagged_for_review = Column(Boolean, default=False, nullable=False)
    skipped = Column(Boolean, default=False, nullable=False)
    
    # Scoring and analysis
    points_earned = Column(Integer, default=0, nullable=False)
    difficulty_at_time = Column(String(20), nullable=True)  # Difficulty when answered
    
    # Timestamps
    answered_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
    
    # Relationships
    user = relationship("User", back_populates="answers")
    test_session = relationship("TestSession", back_populates="answers")
    question = relationship("Question", back_populates="answers")
    
    def __repr__(self) -> str:
        return f"<Answer(id={self.id}, user_id={self.user_id}, question_id={self.question_id}, correct={self.is_correct})>"
    
    @property
    def answer_text(self) -> str:
        """Get the text representation of the user's answer"""
        if isinstance(self.user_answer, dict):
            return self.user_answer.get("answer", "")
        return str(self.user_answer)
    
    @property
    def time_spent_minutes(self) -> float:
        """Get time spent in minutes"""
        return self.time_spent / 60.0
    
    def is_quick_answer(self, threshold_seconds: int = 10) -> bool:
        """Check if answer was given quickly (potentially guessed)"""
        return self.time_spent < threshold_seconds
    
    def is_slow_answer(self, threshold_seconds: int = 300) -> bool:
        """Check if answer took a long time (potentially struggled)"""
        return self.time_spent > threshold_seconds
    
    def get_answer_for_type(self, question_type: str) -> str:
        """Get formatted answer based on question type"""
        if question_type == "multiple_choice":
            return self.user_answer.get("choice", "")
        elif question_type == "grid_in":
            return str(self.user_answer.get("value", ""))
        elif question_type == "essay":
            return self.user_answer.get("text", "")
        else:
            return self.answer_text
    
    def set_answer_data(self, answer_data: dict, question_type: str):
        """Set answer data based on question type"""
        if question_type == "multiple_choice":
            self.user_answer = {"choice": answer_data.get("choice", "")}
        elif question_type == "grid_in":
            self.user_answer = {"value": answer_data.get("value", "")}
        elif question_type == "essay":
            self.user_answer = {"text": answer_data.get("text", "")}
        else:
            self.user_answer = answer_data
