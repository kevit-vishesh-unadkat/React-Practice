// // CRUD operation in Rest API's

// import {useState,useEffect} from "react";


// function Users(){
//     const [students,setStudents]=useState([]);
//     const [name,setName]=useState("");
//     const [email,setEmail]=useState("");
//     const [editId,setEditId]=useState(null);

//     // GET the students

//     const getStudents=async()=>{
//         const response=await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );
//         const data=response.json();

//         setStudents(data);
//     };
//     useEffect(()=>{
//         getStudents();
//     },[]);


//     // POST / PUT

//     const handleSubmit=async(e)=>{
//         e.preventDefault();

//         if(!name.trim()||!email.trim()){
//             alert("please fill all the fields");
//             return;
//         }
//         if(editId){
//             const response=await fetch(
//                 `https://jsonplaceholder.typicode.com/users/${editId}`,

//                 {
//                     method:"PUT",

//                     headers:{
//                         "Content-Type":"application/json"
//                     },

//                     body:JSON.stringify({
//                         name,
//                         email
//                     })
//                 }
//             );

//             const updatedStudent=await response.json();

//             setStudents(prev=>
//                 prev.map(student=>
//                     student.id===editId
//                     ?{...student,...updatedStudent}
//                     :student
//                 )
//             );
//             setEditId(null);
//         }
//         else{
//             const response=await fetch(
//                 "https://jsonplaceholder.typicode.com/users",
//                 {
//                     method:"POST",

//                     headers:{
//                         "Content-Type": "application/json"
//                     },
//                     body:JSON.stringify({
//                         name,
//                         email
//                     })
//                 }
//             );

//             const newStudent=await response.json();

//             setStudents(prev=>[...prev,newStudent]);
//         }
//         setName("");
//         setEmail("");
//     }

//     // EDIT

//     const handleEdit = (student) => {

//     setEditId(student.id);

//     setName(student.name);

//     setEmail(student.email);

//   };

// //   DELETE

//   const handleDelete = async (id) => {

//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${id}`,
//       {
//         method: "DELETE"
//       }
//     );

//     if (response.ok) {

//       setStudents(prev =>
//         prev.filter(student => student.id !== id)
//       );

//     }

//   };

//   return (

//     <div>

//       <h1>Student Management</h1>

//       <form onSubmit={handleSubmit}>

//         <input
//           type="text"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <button type="submit">
//           {editId ? "Update Student" : "Add Student"}
//         </button>

//       </form>

//       <hr />

//       <h2>Student List</h2>

//       {students.map(student => (

//         <div key={student.id}>

//           <h3>{student.name}</h3>

//           <p>{student.email}</p>

//           <button onClick={() => handleEdit(student)}>
//             Edit
//           </button>

//           <button onClick={() => handleDelete(student.id)}>
//             Delete
//           </button>

//           <hr />

//         </div>

//       ))}

//     </div>

//   );

// }

// export default Users;






import { useState, useEffect } from "react";

function Users() {

  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [editId, setEditId] = useState(null);

  // GET
  const fetchStudents = async () => {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    setStudents(data);

  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // POST / PUT
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${editId}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name,
            email
          })
        }
      );

      const updatedStudent = await response.json();

      setStudents(prev =>
        prev.map(student =>
          student.id === editId
            ? { ...student, ...updatedStudent }
            : student
        )
      );

      setEditId(null);

    } else {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name,
            email
          })
        }
      );

      const newStudent = await response.json();

      setStudents(prev => [...prev, newStudent]);

    }

    setName("");
    setEmail("");

  };

  // EDIT
  const handleEdit = (student) => {

    setEditId(student.id);

    setName(student.name);

    setEmail(student.email);

  };

  // DELETE
  const handleDelete = async (id) => {

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "DELETE"
      }
    );

    if (response.ok) {

      setStudents(prev =>
        prev.filter(student => student.id !== id)
      );

    }

  };

  return (

    <div>

      <h1>Student Management</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          {editId ? "Update Student" : "Add Student"}
        </button>

      </form>

      <hr />

      <h2>Student List</h2>

      {students.map(student => (

        <div key={student.id}>

          <h3>{student.name}</h3>

          <p>{student.email}</p>

          <button onClick={() => handleEdit(student)}>
            Edit
          </button>

          <button onClick={() => handleDelete(student.id)}>
            Delete
          </button>

          <hr />

        </div>

      ))}

    </div>

  );

}

export default Users;