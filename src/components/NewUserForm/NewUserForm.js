import React from "react";
import "./newUserForm.css";

export default function NewUserForm({
  user,
  handleInputChange,
  handleFormSubmit,
}) {
  return (
    <div className="formContainer">
      <input
        type="text"
        name="ime"
        value={user.ime}
        onChange={(event) => handleInputChange(event)}
        placeholder="Unesi ime"
        className="formInput"
      />
      <input
        type="text"
        name="prezime"
        value={user.prezime}
        onChange={(event) => handleInputChange(event)}
        placeholder="Unesi prezime"
        className="formInput"
      />
      <div
        style={{
          display: "flex",
          fontSize: 18,
          margin: "0px auto",
          gap: 20,
        }}
      >
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(event) => handleInputChange(event)}
          placeholder="Unesi pol"
          id="female"
        />
        <label htmlFor="female">Zensko</label>

        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(event) => handleInputChange(event)}
          placeholder="Unesi pol"
          id="male"
        />
        <label htmlFor="male">Musko</label>
      </div>

      {/* <input
        type="text"
        name="age"
        value={user.age}
        onChange={(event) => handleInputChange(event)}
        placeholder="Unesi godine"
        className="formInput"
      /> */}
      <select
        className="formInput"
        name="age"
        value={user.age}
        onChange={(event) => handleInputChange(event)}
      >
        <option>Unesi broj godina</option>
        <option value={"12"}>12</option>
        <option value={"13"}>13</option>
        <option value={"14"}>14</option>
        <option value={"15"}>15</option>
        <option value={"16"}>16</option>
        <option value={"17"}>17</option>
        <option value={"18"}>18</option>
      </select>
      <input
        type="text"
        name="number"
        value={user.number}
        onChange={(event) => handleInputChange(event)}
        placeholder="Unesi broj telefona"
        className="formInput"
      />
      <input
        type="text"
        name="hobby"
        value={user.hobby}
        onChange={(event) => handleInputChange(event)}
        placeholder="Koji je tvoj hobi ?"
        className="formInput"
      />
      <button className="formButton" onClick={handleFormSubmit}>
        Submit
      </button>
    </div>
  );
}
