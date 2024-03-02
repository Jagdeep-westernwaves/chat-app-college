import React from "react";
import PostPage from "../PostPage/PostPage";

const Home = () => {
  console.log(localStorage.getItem("loginuser"));
  localStorage.setItem("current", "Home");
  return (
    <>
      <PostPage />
    </>
  );
};
export default Home;
// export { Fname, Lname };
