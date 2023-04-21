import React, { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {isLoading && (
        <div>
          <img src="https://pin.it/1NZdvau"></img>
        </div>
      )}
      {!isLoading && data && <div>{data}</div>}
    </div>
  );
}

export default MyComponent;
