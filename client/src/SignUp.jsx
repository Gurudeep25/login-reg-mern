import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2 className="heading">Register</h2>
        <br />
        <label>Full Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <button className="btn" type="submit">
          Register
        </button>
        <p>Already have an account ?</p>
        <Link to="/login" className="btn-login">
          Login
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
