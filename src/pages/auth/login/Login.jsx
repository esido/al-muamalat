import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../Auth.css";
import { useForm } from "react-hook-form";

const Login = ({ auth }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { phone_number, password } = data;
    auth.login({ phone_number, password }, () => {
      navigate("/");
    });
  };
  return (
    <div className="login">
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="auth-email">
          <input
            {...register("phone_number")}
            type="text"
            id="phoneNumber"
            placeholder="Phone number"
          />
        </div>

        <input
          {...register("password")}
          type="password"
          id="password"
          placeholder="Password"
        />

        <button type="submit">Sign In</button>

        <Link to="/register" className="auth-new">
          Create a new account !
        </Link>
      </form>
    </div>
  );
};

export default Login;
