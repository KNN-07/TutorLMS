"""
User management endpoints
"""

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPBearer
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from app.core.database import get_db
from app.core.security import get_user_id_from_token
from app.schemas.user import UserResponse, UserUpdate, UserStats
from app.services.user_service import UserService
from app.repositories.user_repository import UserRepository

router = APIRouter()
security = HTTPBearer()

@router.get("/me", response_model=UserResponse)
async def get_my_profile(
    token: str = Depends(security),
    db: AsyncSession = Depends(get_db)
) -> UserResponse:
    """Get current user's profile"""
    
    # Extract token and get user ID
    access_token = token.credentials
    user_id = get_user_id_from_token(access_token)
    
    # Get user
    user_repo = UserRepository(db)
    user = await user_repo.get_by_id(user_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    return UserResponse.model_validate(user)

@router.put("/me", response_model=UserResponse)
async def update_my_profile(
    user_update: UserUpdate,
    token: str = Depends(security),
    db: AsyncSession = Depends(get_db)
) -> UserResponse:
    """Update current user's profile"""
    
    # Extract token and get user ID
    access_token = token.credentials
    user_id = get_user_id_from_token(access_token)
    
    # Update user
    user_repo = UserRepository(db)
    user_service = UserService(user_repo)
    
    # Prepare update data (exclude None values)
    update_data = {k: v for k, v in user_update.model_dump().items() if v is not None}
    
    if not update_data:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No valid fields to update"
        )
    
    updated_user = await user_service.update_user_profile(user_id, **update_data)
    if not updated_user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    return UserResponse.model_validate(updated_user)

@router.get("/me/stats", response_model=UserStats)
async def get_my_stats(
    token: str = Depends(security),
    db: AsyncSession = Depends(get_db)
) -> UserStats:
    """Get current user's statistics"""
    
    # Extract token and get user ID
    access_token = token.credentials
    user_id = get_user_id_from_token(access_token)
    
    # Get user statistics
    user_repo = UserRepository(db)
    user_service = UserService(user_repo)
    
    stats = await user_service.get_user_statistics(user_id)
    return UserStats(**stats)

@router.get("/", response_model=List[UserResponse])
async def get_users(
    skip: int = 0,
    limit: int = 100,
    active_only: bool = True,
    token: str = Depends(security),
    db: AsyncSession = Depends(get_db)
) -> List[UserResponse]:
    """Get list of users (admin only)"""
    
    # Extract token and get user ID
    access_token = token.credentials
    user_id = get_user_id_from_token(access_token)
    
    # Check if user is admin
    user_repo = UserRepository(db)
    current_user = await user_repo.get_by_id(user_id)
    if not current_user or not current_user.is_admin():
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin access required"
        )
    
    # Get users
    user_service = UserService(user_repo)
    users = await user_service.get_users_with_pagination(skip, limit, active_only)
    
    return [UserResponse.model_validate(user) for user in users]

@router.get("/counts")
async def get_user_counts(
    token: str = Depends(security),
    db: AsyncSession = Depends(get_db)
) -> dict:
    """Get user count statistics (admin only)"""
    
    # Extract token and get user ID
    access_token = token.credentials
    user_id = get_user_id_from_token(access_token)
    
    # Check if user is admin
    user_repo = UserRepository(db)
    current_user = await user_repo.get_by_id(user_id)
    if not current_user or not current_user.is_admin():
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin access required"
        )
    
    # Get user counts
    user_service = UserService(user_repo)
    counts = await user_service.get_user_counts()
    
    return counts
