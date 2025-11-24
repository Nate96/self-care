import sqlite3

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = ['http://localhost:3000', 'http://localhost:5173']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE = '/home/knight/.local/log/timesheet.db'

class Response(BaseModel):
    assessment_id: str
    category_id:   int
    question_id:   int
    answer:        int
    improve:       bool
    create_dt:     str
    updated_dt:    str

class Assessment(BaseModel):
    category_id: int
    category:    str
    question_id: int
    question:    str
    answer:      int
    improve:     bool
    create_dt:   str
    update_dt:   str


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

@app.get("/assessment") 
def get_new_assessment() -> list[Assessment]:
    cursor = sqlite3.connect(DATABASE).cursor()
    rls = cursor.execute(
            f"""
            SELECT 
               c.id AS category_id
               , c.category
               , q.id AS question_id
               , q.Question 
               , 0 AS Answer
               , False AS Improve 
               , "" AS create_dt
               , "" AS updated_dt
            From Question q
            JOIN Category c ON q.CategoryId = c.id
            ORDER BY c.id ASC;
            """)

    assessment = []

    for r in rls:
        assessment.append({
            "category_id": r[0], 
            "category":    r[1], 
            "question_id": r[2], 
            "question":    r[3], 
            "answer":      r[4], 
            "improve":     r[5], 
            "create_dt":   r[6], 
            "update_dt":   r[7] 
            })

    return assessment

@app.get("/assessment/{id}") 
def get_assessment(id: str) -> list[Assessment]:
    cursor = sqlite3.connect(DATABASE).cursor()
    rls = cursor.execute(
            """
            SELECT 
               c.id         AS category_id
               , c.category
               , q.id       AS question_id
               , q.Question 
               , r.Answer
               , r.Improve 
               , r.create_dt
               , r.updated_dt
            FROM Response r
            JOIN Question q ON r.question_id = q.id
            JOIN Category c ON r.category_id = c.id
            WHERE r.assessment_id = ?
            ORDER BY c.id ASC;
            """, (id,))

    assessment = []

    for r in rls:
        assessment.append({
            "category_id": r[0], 
            "category":    r[1], 
            "question_id": r[2], 
            "question":    r[3], 
            "answer":      r[4], 
            "improve":     r[5], 
            "create_dt":   r[6], 
            "update_dt":   r[7] 
            })

    return assessment


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
