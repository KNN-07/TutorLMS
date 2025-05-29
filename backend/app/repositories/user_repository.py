"""
User repository for database operations
"""

from typing import Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update
from sqlalchemy.sql import func

from app.models.user import User
from app.schemas.user import UserCreate

class UserRepository:
    """Repository for User model database operations"""
    
    def __init__(self, db: AsyncSession):
        self.db = db
    
    async def create(self, user_data: UserCreate, hashed_password: str) -> User:
        """Create a new user"""
        user = User(
            email=user_data.email,
            hashed_password=hashed_password,
            first_name=user_data.first_name,
            last_name=user_data.last_name,
            role=user_data.role
        )
        
        self.db.add(user)
        await self.db.commit()
        await self.db.refresh(user)
        return user
    
    async def get_by_id(self, user_id: int) -> Optional[User]:
        """Get user by ID"""
        result = await self.db.execute(
            select(User).where(User.id == user_id)
        )
        return result.scalar_one_or_none()
    
    async def get_by_email(self, email: str) -> Optional[User]:
        """Get user by email"""
        result = await self.db.execute(
            select(User).where(User.email == email)
        )
        return result.scalar_one_or_none()
    
    async def update(self, user_id: int, **kwargs) -> Optional[User]:
        """Update user by ID"""
        await self.db.execute(
            update(User)
            .where(User.id == user_id)
            .values(**kwargs, updated_at=func.now())
        )
        await self.db.commit()
        return await self.get_by_id(user_id)
    
    async def update_last_login(self, user_id: int) -> None:
        """Update user's last login timestamp"""
        await self.db.execute(
            update(User)
            .where(User.id == user_id)
            .values(last_login=func.now(), updated_at=func.now())
        )
        await self.db.commit()
    
    async def deactivate(self, user_id: int) -> Optional[User]:
        """Deactivate user account"""
        return await self.update(user_id, is_active=False)
    
    async def activate(self, user_id: int) -> Optional[User]:
        """Activate user account"""
        return await self.update(user_id, is_active=True)
    
    async def verify_email(self, user_id: int) -> Optional[User]:
        """Mark user email as verified"""
        return await self.update(user_id, is_verified=True)
    
    async def get_all(self, skip: int = 0, limit: int = 100) -> list[User]:
        """Get all users with pagination"""
        result = await self.db.execute(
            select(User)
            .offset(skip)
            .limit(limit)
            .order_by(User.created_at.desc())
        )
        return result.scalars().all()
    
    async def get_active_users(self, skip: int = 0, limit: int = 100) -> list[User]:
        """Get all active users with pagination"""
        result = await self.db.execute(
            select(User)
            .where(User.is_active == True)
            .offset(skip)
            .limit(limit)
            .order_by(User.created_at.desc())
        )
        return result.scalars().all()
    
    async def count_total_users(self) -> int:
        """Count total number of users"""
        result = await self.db.execute(
            select(func.count(User.id))
        )
        return result.scalar()
    
    async def count_active_users(self) -> int:
        """Count total number of active users"""
        result = await self.db.execute(
            select(func.count(User.id)).where(User.is_active == True)
        )
        return result.scalar()
