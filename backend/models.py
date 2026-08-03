from sqlalchemy import Boolean, Column, DateTime, Integer, String
from sqlalchemy.sql import func

from database import Base


class Player(Base):
    __tablename__ = "players"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(100), nullable=False)

    mobile = Column(String(10), nullable=False)

    category = Column(String(20), nullable=False)

    partner_name = Column(String(100), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    approved = Column(Boolean, default=True)