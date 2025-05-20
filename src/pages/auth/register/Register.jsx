import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";

import user from "../../../assets/icons/almuamalat-user.svg";

import "../Auth.css";

const Register = ({ auth }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { full_name, phone_number, password } = data;
    auth.register({ full_name, phone_number, password }, () => {
      navigate("/");
    });
  };
  return (
    <div className="register">
      <h3>
        Already have an account? <Link to="/login">Sign in</Link>
      </h3>
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="auth-input">
          <input
            {...register("full_name")}
            type="text"
            id="name"
            placeholder="Enter your name"
          />
          <div className="auth-icon">
            <img src={user} alt="user icon" />
          </div>
        </div>

        <div className="auth-input">
          <input
            {...register("phone_number")}
            type="text"
            id="phoneNumber"
            placeholder="Phone number"
          />
        </div>

        <div className="auth-input">
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Register;
