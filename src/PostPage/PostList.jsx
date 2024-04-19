import React from "react";
import { PostForm } from "../Style/Style";
import axios from "axios";
import { Box, Grid, Divider, Typography } from "@mui/material";
import { map, size } from "lodash";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import FeatherIcon from "feather-icons-react";
import { FcComments, FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa6";

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
                <Box sx={{ p: 1, background: "#fff", m: 1, borderRadius: 2 }}>
                  <Grid
                    container
                    sx={{
                      flexDirection: "column",
                    }}
                  >
                    <Grid item>
                      <Grid container sx={{ justifyContent: "space-between" }}>
                        <Grid item>
                          <Grid container sx={{ px: 1, gap: "8px" }}>
                            <Grid item>
                              <Avatar
                                size={46}
                                src={
                                  `http://localhost:9000/Uploads/` +
                                  item.imgname
                                }
                              />
                            </Grid>
                            <Grid
                              item
                              sx={{
                                alignItems: "center",
                                display: "flex",
                              }}
                            >
                              <a
                                href={`profile/${item.uname}`}
                                rel="noreferrer"
                                style={{
                                  color: "#272727",
                                  fontFamily: "Mulish-500",
                                }}
                              >
                                {item.uname}
                              </a>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <PiDotsThreeOutlineVerticalFill />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item sx={{ p: 1 }}>
                      <Typography sx={{ fontFamily: "Mulish-400" }}>
                        {item.posttitle}
                      </Typography>
                    </Grid>
                    {item?.postDes && (
                      <Grid item sx={{ p: 1 }}>
                        {item?.postDes}
                      </Grid>
                    )}
                    {item?.postimg && (
                      <Grid item sx={{ m: "auto" }}>
                        <Image
                          preview={false}
                          fallback="http://localhost:9000/uploads/not_available.png"
                          src={`http://localhost:9000/uploads/${item.postimg}`}
                          style={{
                            maxHeight: 500,
                            height: "auto",
                            width: "auto",
                            maxWidth:
                              window.innerWidth > 500
                                ? 500
                                : window.innerWidth - 40,
                            backgroundPosition: "center-center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",

                            //   backgroundColor: "white",
                          }}
                        />
                      </Grid>
                    )}
                  </Grid>
                  <Divider />
                  <Grid container sx={{ p: 1, gap: "8px" }}>
                    <Grid
                      item
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      {item.isLike === 0 ? (
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
                      )}
                    </Grid>
                    <Grid
                      item
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <FcComments size="24px" />
                    </Grid>
                  </Grid>
                  {/* <Card
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
                          href={`profile/${item.uname}`}
                          rel="noreferrer"
                          style={{ color: "#272727" }}
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
                          height: "auto",
                          width: "auto",
                          maxWidth: 500,
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
                  </Card> */}
                </Box>
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
