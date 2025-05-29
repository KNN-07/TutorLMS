"""
User schemas for API requests and responses
"""

from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

from app.models.user import UserRole

class UserBase(BaseModel):
    """Base user schema with common fields"""
    email: EmailStr
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    role: UserRole = UserRole.STUDENT

class UserCreate(UserBase):
    """Schema for user creation"""
    password: str = Field(..., min_length=8, description="Password must be at least 8 characters")

class UserLogin(BaseModel):
    """Schema for user login"""
    email: EmailStr
    password: str

class UserUpdate(BaseModel):
    """Schema for user updates"""
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    email: Optional[EmailStr] = None
    is_active: Optional[bool] = None

class UserResponse(UserBase):
    """Schema for user response"""
    id: int
    is_active: bool
    is_verified: bool
    created_at: datetime
    updated_at: datetime
    last_login: Optional[datetime] = None
    
    class Config:
        from_attributes = True

class UserProfile(UserResponse):
    """Extended user profile with additional information"""
    full_name: str
    total_test_sessions: Optional[int] = None
    average_score: Optional[float] = None
    best_score: Optional[int] = None
    total_practice_time: Optional[int] = None  # in minutes
    
    class Config:
        from_attributes = True

class UserStats(BaseModel):
    """User statistics schema"""
    total_sessions: int
    completed_sessions: int
    average_accuracy: float
    total_time_spent: int  # in minutes
    best_score: Optional[int] = None
    recent_sessions: Optional[int] = None
    improvement_trend: Optional[str] = None  # "improving", "stable", "declining"
