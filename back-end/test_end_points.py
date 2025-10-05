from pydantic import conset
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
    # GIVEN then following
    ASSESSMENT_ID = str(uuid.uuid4())
    TIME_STAMP    = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    ROW1 = {
            "assessment_id":    ASSESSMENT_ID,
            "category_id":      1,
            "question_id":      1,
            "answer":           1,
            "improve":          1,
            "create_dt":        TIME_STAMP,
            "updated_dt":       TIME_STAMP
            }

    ROW2 = {
            "assessment_id":    ASSESSMENT_ID,
            "category_id":      1,
            "question_id":      2,
            "answer":           3,
            "improve":          0,
            "create_dt":        TIME_STAMP,
            "updated_dt":       TIME_STAMP
            }
    try:
        # GIVEN a call to the post endpoint with row1
        add_response = requests.post(f"{local}/responses", json=ROW1)

        # VERIFY the endpoint returns a 200 status code 
        assert add_response.status_code == 200

        # GIVEN a call to the post endpoint with row2
        add_response = requests.post(f"{local}/responses", json=ROW2)

        # VERIFY the endpoint returns a 200 status code
        assert add_response.status_code == 200
    
        # GIVEN a call to the GET endpoint with the assessment_id
        ress = requests.get(f"{local}/responses/{ASSESSMENT_ID}")

        # VERIFY the endpoint  returns a 200 status code
        assert ress.status_code == 200

        # VERIFY 2 or more responses are returned
        assert len(ress.json()) >= 2

        # VERIFY the last row matches the input data
        LAST = len(ress.json()) - 1
        print(ress.json()[LAST])

        assert ROW2["category_id"] == ress.json()[LAST]["category_id"]
        assert ROW2["question_id"] == ress.json()[LAST]["question_id"]
        assert ROW2["answer"]      == ress.json()[LAST]["answer"]
        assert ROW2["improve"]     == ress.json()[LAST]["improve"]
        assert ROW2["create_dt"]   == ress.json()[LAST]["create_dt"]
        assert ROW2["updated_dt"]  == ress.json()[LAST]["updated_dt"]


    except requests.exceptions.RequestException as e:
        print(f"ERROR: {e}")
        assert False


def test_basic_calculations():
    assessment_id_1 = str(uuid.uuid4())
    assessment_id_2 = str(uuid.uuid4())
    time_stamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    # GIVEN (id, 1, 1.0, 2.3, 4.5, 2.4, 4.3, 3.2, now(), now()) and 
    row1 = {
            "assessment_id":    assessment_id_1,
            "total_stars":      1,
            "average_rank":     1.0,
            "physical_avg":     2.3,
            "emotional_avg":    4.5,
            "social_avg":       2.4,
            "spirit_avg":       4.3,
            "professional_avg": 3.2,
            "create_dt":        time_stamp,
            "updated_dt":       time_stamp
            }

    # GIVEN (id, 1, 1.0, 2.3, 4.5, 2.4, 4.3, 3.2, now(), now()) and 
    row2 = {
            "assessment_id":    assessment_id_2,
            "total_stars":      1,
            "average_rank":     1.0,
            "physical_avg":     2.3,
            "emotional_avg":    4.5,
            "social_avg":       2.4,
            "spirit_avg":       4.3,
            "professional_avg": 3.2,
            "create_dt":        time_stamp,
            "updated_dt":       time_stamp
            }

    try:
        # VERIFY the endpoint returns a 200 status code
        add_response = requests.post(f"{local}/basic-calc", json=row1)
        assert add_response.status_code == 200

        add_response = requests.post(f"{local}/basic-calc", json=row2)

        # VERIFY the endpoint returns a 200 status code
        assert add_response.status_code == 200

        # GIVEN a call to the GET endpoint
        get_response = requests.get(f"{local}/basic-calc")

        # VERIFY the endpoint  returns a 200 status code
        assert get_response.status_code == 200

        # VERIFY 2 Basic Calculations are returned
        assert len(get_response.json()) >= 2

        LAST = len(get_response.json()) - 1
        # VERIFY the first row matches the input data
        assert row1["total_stars"] == get_response.json()[LAST]["total_stars"]
        assert row1["average_rank"] == get_response.json()[LAST]["average_rank"]
        assert row1["physical_avg"] == get_response.json()[LAST]["physical_avg"]
        assert row1["emotional_avg"] == get_response.json()[LAST]["emotional_avg"]
        assert row1["social_avg"] == get_response.json()[LAST]["social_avg"]
        assert row1["spirit_avg"] == get_response.json()[LAST]["spirit_avg"]
        assert row1["professional_avg"] == get_response.json()[LAST]["professional_avg"]
        assert row1["create_dt"] == get_response.json()[LAST]["create_dt"]
        assert row1["updated_dt"] == get_response.json()[LAST]["updated_dt"]

    except requests.exceptions.RequestException as e:
        print(f"ERROR: {e}")
        assert False



