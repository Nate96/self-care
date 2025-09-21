import sqlite3

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE = './database.db'

class Response(BaseModel):
    AssessmentId: str
    CategoryId:   int
    QuestionId:   int
    Answer:       int
    Improve:      bool
    CreatedDt:    datetime

class BasicCalc(BaseModel):
    assessment_id:    str
    total_stars:      int
    average_ank:      float
    physical_avg:     float
    emotional_avg:    float
    social_avg:       float
    spirit_avg:       float
    professional_avg: float
    create_dt:        datetime
    updated_dt:       datetime

@app.get("/")
def read_root() -> str:
    return "Treat your self"


@app.get("/categories")
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

@app.get("/questions")
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
    rls = cursor.execute(f"SELECT * FROM Response WHERE assessment_id == {id}").fetchall()

    calcs: list[dict] =[]

    for r in rls:
        calcs.append({
            "assessment_d": r[0],
            "question_id":  r[1],
            "category_id":  r[1],
            "answer":       r[2],
            "improve":      r[3], 
            "created_dt":   r[4],
            "updated_dt":   r[5]})

    cursor.close()
    return calcs

@app.post("/responses")
def add_response(response: Response):
    cursor = sqlite3.connect(DATABASE).cursor()
    cursor.execute(f"INSERT INTO Response(assessment_id, question_id, category_id, answer, improve, create_dt, updated_dt) VALUES({response.assessment_id},{response.question_id},{response.category_id},{response.answer},{response.improve},{response.created_dt},{response.updated_dt})")
    cursor.close()

    return {"status": "ok"}


@app.get("/basic-calc")
def get_basic_analysis() -> list[dict]:
    cursor = sqlite3.connect(DATABASE).cursor()
    rls = cursor.execute("SELECT * FROM BasicCalculations;").fetchall()

    calcs: list[dict] =[]

    for r in rls:
        calcs.append({
            "assessment_id":    r[0],
            "total_stars":      r[1],
            "average_rank":     r[2],
            "created_dt":       r[3],
            "physical_avg":     r[4],
            "emotional_avg":    r[5],
            "social_avg":       r[6],
            "spirit_avg":       r[7],
            "professional_avg": r[8],
            "updated_dt":       r[9]})

    cursor.close()
    return calcs
