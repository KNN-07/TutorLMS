"""
User service for business logic operations
"""

from typing import Optional
from app.models.user import User
from app.schemas.user import UserCreate
from app.repositories.user_repository import UserRepository

class UserService:
    """Service for User business logic"""
    
    def __init__(self, user_repository: UserRepository):
        self.user_repo = user_repository
    
    async def create_user(self, user_data: UserCreate, hashed_password: str) -> User:
        """Create a new user with business logic"""
        # Additional business logic can be added here
        # e.g., send welcome email, create default settings, etc.
        
        user = await self.user_repo.create(user_data, hashed_password)
        
        # TODO: Send welcome email
        # TODO: Create default user settings
        # TODO: Log user creation event
        
        return user
    
    async def get_user_by_id(self, user_id: int) -> Optional[User]:
        """Get user by ID with business logic"""
        return await self.user_repo.get_by_id(user_id)
    
    async def get_user_by_email(self, email: str) -> Optional[User]:
        """Get user by email with business logic"""
        return await self.user_repo.get_by_email(email)
    
    async def update_user_profile(self, user_id: int, **kwargs) -> Optional[User]:
        """Update user profile with business logic"""
        # Add validation and business rules here
        return await self.user_repo.update(user_id, **kwargs)
    
    async def deactivate_user(self, user_id: int) -> Optional[User]:
        """Deactivate user account with business logic"""
        # TODO: Add cleanup logic (cancel subscriptions, archive data, etc.)
        return await self.user_repo.deactivate(user_id)
    
    async def verify_user_email(self, user_id: int) -> Optional[User]:
        """Verify user email with business logic"""
        # TODO: Add verification logic, send confirmation email, etc.
        return await self.user_repo.verify_email(user_id)
    
    async def get_user_statistics(self, user_id: int) -> dict:
        """Get comprehensive user statistics"""
        user = await self.user_repo.get_by_id(user_id)
        if not user:
            return {}
        
        # TODO: Implement statistics calculation
        # This would involve querying test sessions, answers, etc.
        stats = {
            "total_sessions": 0,
            "completed_sessions": 0,
            "average_accuracy": 0.0,
            "total_time_spent": 0,
            "best_score": None,
            "improvement_trend": "stable"
        }
        
        return stats
    
    async def get_users_with_pagination(self, skip: int = 0, limit: int = 100, active_only: bool = True) -> list[User]:
        """Get users with pagination"""
        if active_only:
            return await self.user_repo.get_active_users(skip, limit)
        else:
            return await self.user_repo.get_all(skip, limit)
    
    async def get_user_counts(self) -> dict:
        """Get user count statistics"""
        total_users = await self.user_repo.count_total_users()
        active_users = await self.user_repo.count_active_users()
        
        return {
            "total_users": total_users,
            "active_users": active_users,
            "inactive_users": total_users - active_users
        }
