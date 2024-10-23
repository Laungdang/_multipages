import { useRef } from "react";

import Form from "react-bootstrap/Form";

import { verifyUser } from "../../data/user";

import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div className="login-page">
        
    <div className="login-container">
      <h1 className="login-title" style={{paddingBottom: "5vh"}}>LOGIN</h1>
      <Form.Label htmlFor="username">Username</Form.Label>
      <Form.Control
        type="text"
        id="username"
        placeholder="Enter username"
        style={{textAlign: "center"}}
        ref={userRef}
      />
      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        type="password"
        id="password" 
        placeholder="Enter password"
        style={{textAlign: "center"}}
        ref={passRef}
      />

      <button className="btn btn-success mt-3" onClick={() => {
        const user = userRef.current.value.trim()
        const pass = passRef.current.value.trim()
        userRef.current.value = ""
        passRef.current.value = ""
        const userInfo = verifyUser(user, pass)
        if (userInfo === null) {
            alert("Username or password is wrong")
            userRef.current.focus()
        }else{
            setToken(userInfo.token)
            setRole(userInfo.role)
        }


      }}>Login</button>
    </div>
</div>

  );
}

export default Login;
