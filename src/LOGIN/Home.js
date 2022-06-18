import React, { useState } from "react";
import "./Login.css"
const Home = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <div className="form-content-full">
        <form className="form">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter your Email Id"
              autoComplete="off"
              className="form-email"
            ></input>
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              autoComplete="off"
              className="form-password"
            ></input>
            <br />

            <button type="submit" className="btn-success">Login</button>
            <span className="fomr-input-login">
            Already have an account? Login <a href="#">here</a>
          </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
