import React, { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const countClicker = () => {
    setCount(count + 1);
  };

  //adding dependancy is really impotant because it tells react to rerender
  // the valuse of the effect hook only when there is a change in the value
  useEffect(() => {
    document.title = `You clicek  ${count}`;
    console.log("This a render");
  }, [count]);

  //   useEffect(() => {
  //     document.title = `You clicek  ${count}`;
  //   });

  return (
    <div>
      <button
        onClick={() => {
          countClicker();
        }}>
        Clicker : {count}
      </button>
    </div>
  );
}

export default Count;
