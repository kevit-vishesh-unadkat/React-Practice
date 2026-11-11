import {useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";

import {
    fetchUsers,
    addUser,
    deleteUser,
} from "./features/users/userSlice";

function App3(){
    const dispatch = useDispatch();

    const {users,status,error}=useSelector(
        (state)=>state.users
    );

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

      // Fetch users when component loads
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Add user
  const handleAddUser = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) return;

    dispatch(addUser({ name, email }));

    setName("");
    setEmail("");
  };

  // Delete user
  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  if (status === "loading") {
    return <h2>Loading users...</h2>;
  }

  if (status === "failed") {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management</h1>

      {/* Add User Form */}
      <form onSubmit={handleAddUser}>
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

        <button type="submit">Add User</button>
      </form>

      <hr />

      {/* User List */}
      <h2>Users List</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <button onClick={() => handleDeleteUser(user.id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App3;
