import React from "react";
import { PostForm } from "../Style/Style";
import axios from "axios";
import { map, size } from "lodash";
import FeatherIcon from "feather-icons-react";
import { FcComments, FcLike } from "react-icons/fc";
import { Avatar, Card, Image } from "antd";
const PostList = (props) => {
  const { state, setState } = props;
  return (
    <div>
      <PostForm>
        {size(state) > 0 ? (
          map(state, (item) => {
            return (
              <>
                <hr />
                <Card
                  hoverable
                  style={{
                    width: "100%",
                  }}
                  title={
                    <>
                      <Avatar
                        size={46}
                        src={`http://localhost:9000/Uploads/` + item.imgname}
                      />
                      &nbsp;&nbsp;
                      <a
                        href={`Uprofile/${item.uname}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.uname}
                      </a>
                      <br />
                      {item.posttitle}
                    </>
                  }
                  cover={
                    <Image
                    preview={false}
                       fallback="http://localhost:9000/uploads/not_available.png"
                      src={`http://localhost:9000/uploads/${item.postimg}`}
                      style={{
                        maxHeight: 500,
                        height:'auto',
                        width:'auto',
                        maxWidth:500,
                        backgroundPosition: "center-center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",

                        //   backgroundColor: "white",
                      }}
                    />
                  }
                  actions={[
                    item.isLike === 0 ? (
                      <FeatherIcon
                        onClick={() => {
                          axios
                            .post(
                              `http://localhost:9000/handleLikeButton`,

                              {
                                uid: localStorage.getItem("lid"),
                                pId: item.id,
                                sts: 1,
                              }
                            )
                            .then((res) => {
                              let data = map(state, (items) => {
                                if (item.id === items.id) {
                                  items.isLike = 1;
                                }
                                return items;
                              });
                              setState(data);
                            });
                        }}
                        icon="heart"
                        size="22px"
                        strokeWidth="2px"
                        color="#824bb8"
                        key="edit"
                      />
                    ) : (
                      <FcLike
                        onClick={() => {
                          axios
                            .post(
                              `http://localhost:9000/handleLikeButton`,

                              {
                                uid: localStorage.getItem("lid"),
                                pId: item.id,
                                sts: 0,
                              }
                            )
                            .then((res) => {
                              let data = map(state, (items) => {
                                if (item.id === items.id) {
                                  items.isLike = 0;
                                }
                                return items;
                              });
                              setState(data);
                            });
                        }}
                        size="22px"
                      />
                    ),

                    <FcComments size="22px" />,
                  ]}
                  className="textimonial_bg"
                >
                  <h2
                    style={{
                      color: "white",
                      fontWeight: "700",
                      fontFamily: "Muli,sans-serif",
                      padding: "0px",
                    }}
                  >
                    {item.title}
                  </h2>
                </Card>
              </>
            );
          })
        ) : (
          <h2 className="notFound">No Posts Found!</h2>
        )}
      </PostForm>
    </div>
  );
};

export default PostList;
