import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);

  const increment = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handelClick={increment}>Increments Age</Button>
      <Count text="Salary" count={salary} />
      <Button handelClick={incrementSalary}>Increments Age</Button>
    </div>
  );
}

export default ParentComponent;
