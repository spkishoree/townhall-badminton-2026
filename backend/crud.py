from sqlalchemy.orm import Session

from models import Player
from schemas import PlayerCreate


def create_player(db: Session, player: PlayerCreate):
    existing = (
        db.query(Player)
        .filter(Player.mobile == player.mobile)
        .first()
    )

    if existing:
        raise ValueError("Mobile number already registered")

    db_player = Player(**player.model_dump())

    db.add(db_player)
    db.commit()
    db.refresh(db_player)

    return db_player

def get_players(db: Session):
    return db.query(Player).order_by(Player.id.desc()).all()

def get_stats(db: Session):
    players = db.query(Player).all()

    singles = sum(
        1 for p in players if p.category == "Men's Singles"
    )

    doubles = sum(
        1 for p in players if p.category == "Men's Doubles"
    )

    return {
        "total": len(players),
        "singles": singles,
        "doubles": doubles,
    }