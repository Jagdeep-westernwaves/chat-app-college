import { Box, Grid, IconButton, Typography } from "@mui/material";
import { Avatar, Tooltip } from "antd";
import { size } from "lodash";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, { useState } from "react";
import { FaUserCheck, FaUserClock, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbMessages } from "react-icons/tb";
import { callAcceptreq, callRemovereq, callSendreq } from "../../service/API";
import { useSocket } from "../../context/SocketProvider";
import { MdCopyAll } from "react-icons/md";
const MapBody = ({ i = {}, req }) => {
  const [isHovered, setIsHovered] = useState(false);
  const socket = useSocket();
  const [isCopied, setIsCopied] = useState(false);
  const pendingRequestHandler = async (i, status = "cancel") => {
    callRemovereq(
      status == "reject"
        ? {
            lid: i.id,
            fid: localStorage.getItem("lid"),
          }
        : {
            fid: i.id,
            lid: localStorage.getItem("lid"),
          }
    )
      .then(() => {
        socket.emit("user_request");
      })
      .catch((err) => {});
  };
  const acceptRequestHandler = async (i) => {
    callAcceptreq({
      lid: i.id,
      fid: localStorage.getItem("lid"),
    })
      .then(() => {
        socket.emit("user_request");
      })
      .catch((err) => {});
  };
  const sendRequestHandler = async (i) => {
    callSendreq({
      fid: i.id,
      lid: localStorage.getItem("lid"),
    })
      .then(() => {
        socket.emit("user_request");
      })
      .catch((err) => {});
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Grid
      container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        border: "1px solid #e7e7e7",
        borderRadius: "10px",
        p: "4px 8px",
        justifyContent: "space-between",
        my: 0.5,
        alignItems: "center",
      }}
    >
      <Grid item>
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <Grid item>
            <Avatar
              size={50}
              shape="circle"
              src={`http://localhost:9000/uploads/${i.imgname}`}
            />
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontFamily: "Mulish-500",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {i.name}
            </Typography>
          </Grid>
          <Box
            sx={{
              minWidth: "40px",
            }}
          >
            {isHovered && (
              <Tooltip title={isCopied ? "User Name copied!" : i.uname}>
                <IconButton
                  onClick={() => {
                    var textField = document.createElement("textarea");
                    textField.innerText = i.uname;
                    document.body.appendChild(textField);
                    textField.select();
                    document.execCommand("copy");
                    textField.remove();
                    setIsCopied(true);
                    setTimeout(() => {
                      setIsCopied(false);
                    }, 800);
                  }}
                >
                  <MdCopyAll
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Grid>
      </Grid>
      <Grid item>
        {(req === 2 || i.req === 2) && (
          <IconButton onClick={() => acceptRequestHandler(i)}>
            <FaUserCheck color="success" />
          </IconButton>
        )}
        {(req === 0 || i.req === 0) && (
          <IconButton onClick={() => sendRequestHandler(i)}>
            <FaUserPlus color="success" />
          </IconButton>
        )}
        {(req === 1 || i.req === 1) && (
          <IconButton onClick={() => pendingRequestHandler(i)}>
            <FaUserClock color="success" />
          </IconButton>
        )}
        {(req >= 3 || i.req >= 3) && (
          <Link to={"/chat/" + i.uname}>
            <TbMessages
              style={{
                height: 24,
                width: 24,
              }}
              color="#2199cc"
            />
          </Link>
        )}
        {(req === 2 || i.req === 2) && (
          <IconButton onClick={() => pendingRequestHandler(i, "reject")}>
            <DeleteOutlineIcon sx={{ fontSize: "30px" }} color="error" />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};
const UserListCard = ({ data = [], req = false }) => {
  return (
    size(data) > 0 &&
    data.map((i) => {
      return <MapBody i={i} req={req} />;
    })
  );
};

export default UserListCard;
