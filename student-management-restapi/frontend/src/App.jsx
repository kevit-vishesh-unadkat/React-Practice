import { useState,useEffect } from 'react';
import './App.css';

const API_URL="http://127.0.0.1:8000/students";

function App(){
  const [students,setStudents]=useState([]);

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [course,setCourse]=useState("");

  const [editId,setEditId]=useState(null);
  const [loading,setLoading]=useState(true);

  const [error,setError]=useState("");


  // GET - fetch students

  const getStudents=async ()=>{
    try{
      setLoading(true);

      const response=await fetch(API_URL);

      if(!response.ok){
        throw new Error("Failed to fetch a student");
      }

      const data=await response.json();

      setStudents(data);
      setError("");
    }
    catch(error){
      setError(error.message);
    }
    finally{
      setLoading(false);
    }
  };

  useEffect(()=>{
    getStudents();
  },[]);
  // POST - Create Student / PUT - Update Student
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!name.trim() || !email.trim() || !course.trim()) {
      alert("Please fill all fields");
      return;
    }

    const studentData = {
      name,
      email,
      course
    };

    try {

      let response;

      if (editId !== null) {

        // PUT Request

        response = await fetch(`${API_URL}/${editId}`, {
          method: "PUT",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(studentData)
        });

      } else {

        // POST Request

        response = await fetch(API_URL, {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(studentData)
        });

      }

      if (!response.ok) {
        throw new Error("Operation failed");
      }

      // Refresh student list from backend
      await getStudents();

      resetForm();

    } catch (error) {

      alert(error.message);

    }

  };

  // Edit STUDENT

  const handleEdit=(student)=>{
    setEditId(student.id);

    setName(student.name);

    setEmail(student.email);

    setCourse(student.course);

  };

  // DELETE - delete Student

  const handleDelete=async(id)=>{
    try{
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });

      if(!response.ok){
        throw new Error("Failed To delete Students");
      }
      alert("Student Deleted SuccessFully");
      await getStudents();
    }
    catch(error){
      alert(error.message);
    }
  };
    // Reset Form
  const resetForm = () => {

    setName("");
    setEmail("");
    setCourse("");
    setEditId(null);

  };

  return(
    <div className="container">

      <h1>Student Management System</h1>

      {/* Student Form */}

      <div className="form-container">

        <h2>
          {editId !== null ? "Update Student" : "Add Student"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <button type="submit">
            {editId !== null ? "Update Student" : "Add Student"}
          </button>

          {editId !== null && (
            <button type="button" onClick={resetForm}>
              Cancel
            </button>
          )}

        </form>

      </div>

      {/* Student List */}

      <div className="student-container">

        <h2>All Students</h2>

        {loading && <p>Loading students...</p>}

        {error && <p className="error">{error}</p>}

        {!loading && !error && students.length === 0 && (
          <p>No students found.</p>
        )}

        {!loading && students.map((student) => (

          <div className="student-card" key={student.id}>

            <h3>{student.name}</h3>

            <p>Email: {student.email}</p>

            <p>Course: {student.course}</p>

            <button onClick={() => handleEdit(student)}>
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => handleDelete(student.id)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default App;