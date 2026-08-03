from typing import Optional

from pydantic import BaseModel, Field


class PlayerCreate(BaseModel):
    name: str = Field(..., min_length=3)
    mobile: str = Field(..., min_length=10, max_length=10)
    category: str
    partner_name: Optional[str] = None


class PlayerResponse(PlayerCreate):
    id: int
    approved: bool

    class Config:
        from_attributes = True