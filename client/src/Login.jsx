import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2 className="heading">Login</h2>
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="btn">Login</button>
        <p>Don't have an account ?</p>
        <Link to="/register" className="btn-login">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
