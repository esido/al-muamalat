import React from "react";

const Register = () => {
  return (
    <form className="register-form">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
      />

      <button type="submit">Sign In</button>

      <Link className="create-account-link" to={"/register"}>
        Create a new account!
      </Link>
    </form>
  );
};

export default Register;
