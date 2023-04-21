import React, { useEffect, useState } from "react";
import axios from "axios";

function ReducerDataFeatch() {
  const [loading, setLoading] = useState(true);
  const [error, setErro] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((req) => {
        setLoading(false);
        setErro("");
        setPost(req.data);
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setErro("Something went wrong");
      });
  }, []);
  return (
    <div>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default ReducerDataFeatch;
