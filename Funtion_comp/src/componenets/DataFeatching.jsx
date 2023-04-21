import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [fetchData, setFetchData] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${fetchData}`)
      .then((res) => setPost(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [fetchData]);

  const clickResponse = () => {
    setFetchData(id);
  };

  return (
    <div>
      <input value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={clickResponse}>Fetch Data</button>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetching;
