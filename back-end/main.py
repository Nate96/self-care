import sqlite3
import os 

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

UI:       str = str(os.getenv("UI"))
DATABASE: str = str(os.getenv('DB'))

app = FastAPI()

origins = [UI]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Response(BaseModel):
    assessment_id: str
    category_id:   int
    question_id:   int
    answer:        int
    improve:       bool
    create_dt:     str
    updated_dt:    str

class BasicCalc(BaseModel):
    assessment_id: str
    total_stars:   int
    physical:      int 
    emotional:     int 
    social:        int 
    spirit:        int 
    professional:  int 
    total:         int
    average_rank:  float
    create_dt:     str
    updated_dt:    str

@app.get("/")
def read_root() -> str:
    return "Treat your self"


@app.get("/categories/")
def get_categories() -> list[dict]:
    cursor = sqlite3.connect(DATABASE).cursor()
    rls = cursor.execute("SELECT * FROM Category;").fetchall()

    categories: list[dict] = []

    for r in rls:
        categories.append({
            "id":         r[0],
            "category":   r[1],
            "create_dt":  r[2],
            "updated_dt": r[3]})
    
    cursor.close()
    return categories

@app.get("/questions/")
def get_questions() -> list[dict]:
    cursor = sqlite3.connect(DATABASE).cursor()
    rls = cursor.execute("SELECT * FROM Question;").fetchall()

    questions: list[dict] =[]

    for r in rls:
        questions.append({
            "id":          r[0],
            "question":    r[1],
            "category_id": r[2],
            "create_dt":   r[3],
            "updated_dt":  r[4]})

    cursor.close()
    return questions

@app.get("/responses/{id}") 
def get_responses(id: str) -> list[dict]:
    cursor = sqlite3.connect(DATABASE).cursor()
    rls = cursor.execute(f"SELECT * FROM Response WHERE assessment_id == '{id}'").fetchall()

    calcs: list[dict] =[]

    for r in rls:
        calcs.append({
            "assessment_d": r[0],
            "category_id":  r[1],
            "question_id":  r[2],
            "answer":       r[3],
            "improve":      r[4], 
            "create_dt":    r[5],
            "updated_dt":   r[6]})

    cursor.close()
    return calcs

@app.post("/responses/")
def add_response(response: Response):
    with sqlite3.connect(DATABASE) as curr:
        curr.execute("""
                     INSERT INTO Response(assessment_id, 
                                          category_id, 
                                          question_id, 
                                          answer,
                                          improve,
                                          create_dt,
                                          updated_dt) 
                     VALUES(?, ?, ?, ?, ?, 
                            DATETIME('now', 'localtime'),
                            DATETIME('now', 'localtime'))
                     """, (response.assessment_id,
                           response.category_id,
                           response.question_id,
                           response.answer,
                           response.improve
                           ))
        curr.commit()

    return {"status": "ok"}


@app.get("/basic-calc")
def get_basic_analysis() -> list[dict]:
    cursor = sqlite3.connect(DATABASE).cursor()
    rls = cursor.execute("SELECT * FROM BasicCalculations;").fetchall()

    calcs: list[dict] =[]

    for r in rls:
        calcs.append({
            "assessment_id": r[0],
            "total_stars":   r[1],
            "physical":      r[2],
            "emotional":     r[3],
            "social":        r[4],
            "spirit":        r[5],
            "professional":  r[6],
            "total":         r[7],
            "average_rank":  r[8],
            "create_dt":     r[9],
            "updated_dt":    r[10],
        })

    cursor.close()
    return calcs


@app.post("/basic-calc")
def add_basic_calc(calc: BasicCalc):
    with sqlite3.connect(DATABASE) as cur:
        cur.execute("""
                    INSERT INTO BasicCalculations(assessment_id,
                                                  total_stars,
                                                  physical,
                                                  emotional,
                                                  social,
                                                  spirit,
                                                  professional,
                                                  total,
                                                  average_rank,
                                                  create_dt,
                                                  updated_dt)
                    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?,
                           DATETIME('now', 'localtime'),
                           DATETIME('now', 'localtime'))
                    """, (calc.assessment_id,
                          calc.total_stars,
                          calc.physical,
                          calc.emotional,
                          calc.social,
                          calc.spirit,
                          calc.professional,
                          calc.total,
                          calc.average_rank))
        cur.commit()


