import requests
import json
import uuid
from datetime import datetime


local: str = 'http://localhost:8000'

def test_get_categories():
    try:
        ress = requests.get(f"{local}/categories")
        if ress.status_code == 200:
            print(json.dumps(ress.json(), indent=2))
            assert True
        else:
            print(f"Status code: {ress.status_code}")
            print(f"Message:   : {ress.text}")
    except requests.exceptions.RequestException as e:
        print(f"ERROR: {e}")
        assert False

def test_get_questions():
    try:
        ress = requests.get(f"{local}/questions")
        if ress.status_code == 200:
            print(json.dumps(ress.json(), indent=2))
            assert True
        else:
            print(f"Status code: {ress.status_code}")
            print(f"Message:   : {ress.text}")
    except requests.exceptions.RequestException as e:
        print(f"ERROR: {e}")
        assert False

def test_responses():
    assessment_id = str(uuid.uuid4())

    try:
        add_ress = {
            "assessment_id":    assessment_id,
            "total_stars":      1,
            "average_rank":     1.0,
            "physical_avg":     2.3,
            "emotional_avg":    4.5,
            "social_avg":       2.4,
            "spirit_avg":       4.3,
            "professional_avg": 3.2,
            "create_dt":        datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            "updated_dt":       datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            }

        add_response = requests.post(f"{local}/basic-calc", json=add_ress)
        assert add_response.status_code == 200

        add_ress = {
            "assessment_id": assessment_id,
            "category_id": 1,
            "question_id": 1,
            "answer": 1,
            "improve": True,
            "create_dt": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            "updated_dt": datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }

        add_response = requests.post(f"{local}/responses", json=add_ress)
        assert add_response.status_code == 200

    except requests.exceptions.RequestException as e:
        print(f"ERROR: {e}")
        assert False


def test_basic_calculations():
    assessment_id = str(uuid.uuid4())

    try:
        add_ress = {
            "assessment_id":    assessment_id,
            "total_stars":      1,
            "average_rank":     1.0,
            "physical_avg":     2.3,
            "emotional_avg":    4.5,
            "social_avg":       2.4,
            "spirit_avg":       4.3,
            "professional_avg": 3.2,
            "create_dt":        datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            "updated_dt":       datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            }

        add_response = requests.post(f"{local}/basic-calc", json=add_ress)
        assert add_response.status_code == 200

        add_ress = {
            "assessment_id": assessment_id,
            "category_id": 1,
            "question_id": 1,
            "answer": 1,
            "improve": True,
            "create_dt": "",
            "updated_dt": ""
        }

        add_response = requests.post(f"{local}/responses", json=add_ress)
        assert add_response.status_code == 200

        get_response = requests.get(f"{local}/basic-calc")
        if get_response.status_code == 200:
            print(json.dumps(get_response.json(), indent=2))
            assert get_response.json() != []
        else:
            print(f"Status code: {get_response.status_code}")
            print(f"Message:   : {get_response.text}")
            assert False

    except requests.exceptions.RequestException as e:
        print(f"ERROR: {e}")
        assert False



