import React, { useState } from 'react'

const Login = () => {
    const [admin, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ admin, password }),
          });
          const data = await response.json();
    
          if (response.ok) {
            console.log(data.message);
            window.localStorage.setItem("authenticated", true);
            window.location.href = "./adminpage";
          } else {
            alert("Authentication failed. Please check your credentials.");
          }
        } catch (error) {
          console.error("Error logging in:", error);
          alert("Error logging in. Please try again.");
        }
      };

      
  return (
    <div>
        <div>
            Login
        </div>
        <div>
            <input type='text' placeholder='username' onChange={(e)=> setUsername(e.target.value)}/>
            <input type='password' placeholder='password' onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>
        </div>
    </div>
  )
}

export default Login