import sqlite3

from fastapi import FastAPI

app = FastAPI()

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
            "categories": r[1],
            "create_dt":  r[2],
            "updated_dt": r[3]
            })
    
    return categories

@app.get("/questions")
def get_questions() -> list[dict]:
    cursor = sqlite3.connect(DATABASE).cursor()
    rls = cursor.execute("SELECT * FROM Category;").fetchall()

    questions: list[dict] =[]

    for r in rls:
        questions.append({
            "id":         r[0],
            "question":   r[1],
            "create_dt":  r[2],
            "updated_dt": r[3]
            })


    return questions

@app.get("/basic-calc") 
def get_basic_calc() -> list[dict]:
    cursor = sqlite3.connect(DATABASE).cursor()
    rls = cursor.execute("SELECT * FROM Category;").fetchall()

    calcs: list[dict] =[]

    for r in rls:
        calcs.append({
            "id":           r[0],
            "FormId":       r[1],
            "Total Stars":  r[2],
            "Average Rank": r[3]
            })

    return calcs
