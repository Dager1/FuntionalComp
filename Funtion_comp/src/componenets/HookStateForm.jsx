import React, { useState } from "react";

function HookStateForm() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const handleFirstNameChange = (e) => {
    setName({ ...name, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setName({ ...name, lastName: e.target.value });
  };

  return (
    <form>
      <label>First Name</label>
      <input value={name.firstName} onChange={handleFirstNameChange} />
      <label>Last Name</label>
      <input value={name.lastName} onChange={handleLastNameChange} />
      <h2>First Name: {name.firstName}</h2>
      <h2>Last Name: {name.lastName}</h2>
    </form>
  );
}

export default HookStateForm;
