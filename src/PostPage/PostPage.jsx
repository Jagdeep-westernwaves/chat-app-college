import axios from "axios";
import { get } from "lodash";
import React, { useEffect, useState } from "react";
import PostList from "./PostList";
import PostPost from "./PostPost";

const PostPage = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .post(`http://localhost:9000/getposts`, {
        userId: localStorage.getItem("lid"),
      })
      .then((res) => {
        setState(get(res, "data", []));
      });
  }, []);

  return (
    <>
      <PostPost />
      <PostList state={state} setState={setState} />
    </>
  );
};

export default PostPage;
