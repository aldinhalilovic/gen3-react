import React from "react";
import "./newUserCard.css";

export default function NewUserCard({ user }) {
  return (
    <div className="newUserCard">
      <h4>
        {user.ime} {user.prezime}
      </h4>
      <ul>
        <li>
          {user.gender}, {user.age}
        </li>
        <li>{user.number}</li>
        <li>{user.hobby}</li>
      </ul>
    </div>
  );
}
