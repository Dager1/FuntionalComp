import React, { useEffect, useReducer } from "react";

import axios from "axios";

const initialState = {
  laoding: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Featch Data":
      return {
        laoding: "false",
        post: action.paylaod,
        error: "",
      };
    case "Featch Failed":
      return {
        laoding: "false",
        post: "",
        error: "Failed to load ",
      };
  }
};
function ReducerDataFeatch2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((req) => {
        dispatch({ type: "Featch Data", paylaod: req.data });
      })
      .catch((error) => {
        dispatch({ type: "Featch Failed" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default ReducerDataFeatch2;
