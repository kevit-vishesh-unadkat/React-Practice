from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dummy Data
students = [
    {
        "id": 1,
        "name": "Rahul",
        "email": "rahul@gmail.com",
        "course": "Computer Engineering"
    },
    {
        "id": 2,
        "name": "Amit",
        "email": "amit@gmail.com",
        "course": "Information Technology"
    },
    {
        "id": 3,
        "name": "Priya",
        "email": "priya@gmail.com",
        "course": "Computer Science"
    }
]


# Pydantic Model
class Student(BaseModel):
    name: str
    email: str
    course: str


# GET - All Students
@app.get("/students")
def get_students():
    return students


# GET - Single Student
@app.get("/students/{student_id}")
def get_student(student_id: int):

    for student in students:
        if student["id"] == student_id:
            return student

    raise HTTPException(
        status_code=404,
        detail="Student not found"
    )


# POST - Add Student
@app.post("/students")
def create_student(student: Student):

    new_student = {
        "id": max((s["id"] for s in students), default=0) + 1,
        **student.model_dump()
    }

    students.append(new_student)

    return new_student


# PUT - Update Student
@app.put("/students/{student_id}")
def update_student(student_id: int, student: Student):

    for index, existing_student in enumerate(students):

        if existing_student["id"] == student_id:

            updated_student = {
                "id": student_id,
                **student.model_dump()
            }

            students[index] = updated_student

            return updated_student

    raise HTTPException(
        status_code=404,
        detail="Student not found"
    )


# DELETE - Delete Student
@app.delete("/students/{student_id}")
def delete_student(student_id: int):

    for student in students:

        if student["id"] == student_id:

            students.remove(student)

            return {
                "message": "Student deleted successfully"
            }

    raise HTTPException(
        status_code=404,
        detail="Student not found"
    )