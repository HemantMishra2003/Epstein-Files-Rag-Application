from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    DateTime,
    Boolean
)

from sqlalchemy.orm import declarative_base

from datetime import datetime

from database import engine



Base = declarative_base()



class QueryHistory(Base):

    __tablename__ = "query_history"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    question = Column(String)

    answer = Column(String)

    user_email = Column(String)

    source = Column(String)

    response_time = Column(Float)

    timestamp = Column(
        DateTime,
        default=datetime.utcnow
    )



class User(Base):

    __tablename__ = "users"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    email = Column(
        String,
        unique=True,
        index=True
    )

    password = Column(String)

    is_premium = Column(
        Boolean,
        default=False
    )



Base.metadata.create_all(bind=engine)