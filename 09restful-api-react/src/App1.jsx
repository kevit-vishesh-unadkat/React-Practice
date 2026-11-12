import React, { useState } from "react";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App1() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("access_token")
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {

    localStorage.removeItem("access_token");

    setIsLoggedIn(false);

  };

  return (

    <div>

      {isLoggedIn ? (

        <Dashboard onLogout={handleLogout} />

      ) : (

        <Login onLogin={handleLogin} />

      )}

    </div>

  );

}

export default App1;