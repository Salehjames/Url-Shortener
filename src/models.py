from sqlalchemy import Column, Integer, String, DateTime, func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Import Depends from fastapi
from fastapi import Depends

Base = declarative_base()

class URL(Base):
    __tablename__ = 'urls'

    id = Column(Integer, primary_key=True, index=True)
    original_url = Column(String, index=True)
    shortened_url = Column(String, unique=True, index=True)
    custom_alias = Column(String, unique=True, nullable=True)
    qr_code = Column(String, nullable=True)
    created_at = Column(DateTime, nullable=False, default=func.now())  # Set default value to current timestamp

class LinkHistory(Base):
    __tablename__ = 'link_history'

    id = Column(Integer, primary_key=True, index=True)
    original_url = Column(String, index=True)
    shortened_url = Column(String, index=True)
    user_id = Column(Integer, index=True)
    created_at = Column(DateTime, nullable=False, default=func.now())  # Set default value to current timestamp

# Define the database URL
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

# Create the SQLAlchemy engine
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Create a session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
