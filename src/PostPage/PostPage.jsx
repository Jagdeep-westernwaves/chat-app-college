import axios from "axios";
import { get } from "lodash";
import React, { useEffect, useState } from "react";
import PostList from "./PostList";
import PostPost from "./PostPost";
import { callGetPosts } from "../service/API";

const PostPage = () => {
  const [state, setState] = useState([]);
  const getPosts = () => {
    callGetPosts()
      .then((res) => {
        setState(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <PostPost getPosts={getPosts} />
      <PostList state={state} setState={setState} />
    </>
  );
};

export default PostPage;
