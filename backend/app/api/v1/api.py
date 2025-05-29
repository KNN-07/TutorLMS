"""
Main API router for v1 endpoints
"""

from fastapi import APIRouter

from app.api.v1.endpoints import auth, users

api_router = APIRouter()

# Include all endpoint routers
api_router.include_router(auth.router, prefix="/auth", tags=["Authentication"])
api_router.include_router(users.router, prefix="/users", tags=["Users"])

# Health check for API v1
@api_router.get("/health")
async def health_check():
    """Health check endpoint for API v1"""
    return {"status": "healthy", "version": "1.0.0", "api": "v1"}
