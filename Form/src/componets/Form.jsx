import React, { useState } from "react";

function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  return (
    <div>
      <div>
        <label>First Name</label>
        <input value={fname} onChange={(e) => setFname(e.target.value)}></input>
        First Name : {fname}
      </div>
      <div>
        <label>Last Name</label>
        <input value={lname} onChange={(e) => setLname(e.target.value)}></input>
        Last Name : {lname}
      </div>
    </div>
  );
}

export default Form;
