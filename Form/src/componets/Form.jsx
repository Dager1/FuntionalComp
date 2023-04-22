import React, { useEffect, useState, useRef } from "react";

function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const reffer1 = useRef("");

  useEffect(() => {
    reffer1.current.focus();
  }, []);

  return (
    <div>
      <div>
        <label>First Name</label>
        <input
          ref={reffer1}
          value={fname}
          onChange={(e) => setFname(e.target.value)}></input>
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
