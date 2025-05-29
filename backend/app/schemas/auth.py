"""
Authentication schemas for API requests and responses
"""

from pydantic import BaseModel
from typing import Optional

class Token(BaseModel):
    """Token response model"""
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    expires_in: int  # seconds

class TokenData(BaseModel):
    """Token data model for JWT payload"""
    user_id: Optional[int] = None
    email: Optional[str] = None
    role: Optional[str] = None

class RefreshToken(BaseModel):
    """Refresh token request model"""
    refresh_token: str

class PasswordReset(BaseModel):
    """Password reset request model"""
    email: str

class PasswordResetConfirm(BaseModel):
    """Password reset confirmation model"""
    token: str
    new_password: str
