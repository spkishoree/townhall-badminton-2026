from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException

import crud
import models
import schemas
from database import Base, engine, get_db

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Townhall Badminton Tournament API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://townhall-badminton-2026.vercel.app",
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Welcome to Townhall Badminton Tournament API"
    }


@app.post("/register", response_model=schemas.PlayerResponse)
def register(
    player: schemas.PlayerCreate,
    db: Session = Depends(get_db)
):
    return crud.create_player(db, player)


@app.get("/players", response_model=list[schemas.PlayerResponse])
def players(db: Session = Depends(get_db)):
    return crud.get_players(db)


@app.post("/register", response_model=schemas.PlayerResponse)
def register(player: schemas.PlayerCreate, db: Session = Depends(get_db)):
    try:
        return crud.create_player(db, player)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.get("/stats")
def stats(db: Session = Depends(get_db)):
    return crud.get_stats(db)