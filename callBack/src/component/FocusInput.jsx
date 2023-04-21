import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <div>
        <input />
      </div>
      <div>
        <input ref={inputRef} />
      </div>
    </div>
  );
}

export default FocusInput;
