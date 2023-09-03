import React, { useState } from "react";
import { Link} from "react-router-dom";


const Login = ({setAuth}) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      localStorage.setItem("token", parseRes.token);
      setAuth(true);

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div>
          <div>
              <p >Login</p>
              <form  onSubmit={onSubmitForm}>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={e => onChange(e)}
                
                />
                <button >Login</button>
              </form>
              <p >or</p>
              <Link to="/register" > Register</Link>
          </div>
                
      </div>
    
    </>
  );
};

export default Login;