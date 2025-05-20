import React from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../../services/request";

import profile from "../../../assets/images/almuamalat__students-profile.png";

import "./EditUser.css";

const EditUser = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["usersData"],
    queryFn: () => request.get("/users/me"),
  });

  console.log(data);

  return (
    <div className="edit-user">
      <div className="edit-user__header">
        <div className="edit-user__info">
          <img src={profile} alt="User" className="edit-user__avatar" />
          <h2 className="edit-user__name">{data?.data?.data?.full_name}</h2>
        </div>
        <button className="edit-user__save">Save</button>
      </div>

      <form className="edit-user__form">
        <div className="edit-user__row">
          <div className="edit-user__field">
            <label>Full Name</label>
            <input type="text" placeholder="Your Full Name" />
          </div>
          <div className="edit-user__field">
            <label>Phone Number</label>
            <input type="tel" placeholder="Your Phone Number" />
          </div>
        </div>
        <div className="edit-user__row">
          <div className="edit-user__field">
            <label>Address</label>
            <input type="text" placeholder="Enter Your Address" />
          </div>
          <div className="edit-user__field">
            <label>Avatar</label>
            <input type="file" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
