from sqlalchemy.orm import Session
import models, schemas
import schemas.schemas

def save_data(db: Session, data: schemas.schemas.SensorDataIn):
    db_data = models.SensorData(**data.dict())
    db.add(db_data)
    db.commit()
    db.refresh(db_data)
    return db_data
