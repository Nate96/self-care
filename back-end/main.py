import sqlite3

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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


    return questions

@app.get("/assessments") 
def get_forms() -> list[dict]:
    cursor = sqlite3.connect(DATABASE).cursor()
    rls = cursor.execute(f"SELECT * FROM Assessment GROUP BY id;").fetchall()

    calcs: list[dict] =[]

    for r in rls:
        calcs.append({
            "id":          r[0],
            "question_id": r[1],
            "answer":      r[2],
            "improve":     r[3], 
            "created_dt":  r[4],
            "updated_dt":  r[5]})

    return calcs

@app.get("/basic-analysis")
def get_basic_analysis() -> list[dict]:
    cursor = sqlite3.connect(DATABASE).cursor()
    rls = cursor.execute("SELECT * FROM BasicCalculation;").fetchall()

    calcs: list[dict] =[]

    for r in rls:
        calcs.append({
            "id":            r[0],
            "assessment_id": r[1],
            "total_stars":   r[2],
            "created_dt":    r[4],
            "updated_dt":    r[5]})

    return calcs
