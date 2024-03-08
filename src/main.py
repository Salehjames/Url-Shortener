# main.py

from fastapi import FastAPI, HTTPException, Depends
from models import Base, engine, SessionLocal, URL
from schemas import ShortenURLRequest
from sqlalchemy.orm import Session  # Import Session from SQLAlchemy
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware
from typing import List
from starlette.responses import FileResponse

app = FastAPI()

# Create database tables
Base.metadata.create_all(bind=engine)

# Dependency to get database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Endpoint to shorten a URL
@app.post("/shorten/")
async def shorten_url(request: ShortenURLRequest, db: Session = Depends(get_db)):
    # Generate a shortened URL (for demonstration, use original URL as shortened URL)
    shortened_url = request.original_url

    # Store URL mapping in database
    db_url = URL(original_url=request.original_url, shortened_url=shortened_url)
    db.add(db_url)
    db.commit()
    db.refresh(db_url)

    return {"shortened_url": shortened_url}

# Serve frontend files from the 'src' directory
app.mount("/", StaticFiles(directory="Components"), name="static")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

