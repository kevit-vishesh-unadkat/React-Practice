function App(){
  const [user,setUser]=useState({
    name:"vishesh",
    email:"vishesh@gmail.com",
    role:"Admin",
    isLoggedIn:true,
  });

  const updateName=(newName)=>{
    setUser((prev)=>({
      ...prev,
      name:newName,
    }));
  };

  const logout = () => {
    setUser((prev) => ({
      ...prev,
      isLoggedIn: false,
    }));
  };

  return (
    <div>
      <Navbar user={user} logout={logout} />

      <Dashboard
        user={user}
        updateName={updateName}
        logout={logout}
      />
    </div>
  );
}

export default App;