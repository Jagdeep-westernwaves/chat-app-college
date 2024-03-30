import { Button, Typography } from "@mui/material";
import _, { size } from "lodash";
import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";

const ChatContainer = styled.div`
  width: 100%;
  padding: 1px 20px 1px 20px;
`;
const RightChatMessage = styled.div`
  position: relative;
  max-width: 440px;
  width: 70%;
  min-height: 34px;
  background-color: #e3e0e0; /* Adjust color as needed */
  padding: 5px 10px 1px 10px;
  box-shadow: 1px 1px solid;
  word-wrap: break-word; /* Enable text wrapping */
  border-radius: 0px 10px 10px 10px;
  margin-right: auto; /* To align left if needed */
`;

const ChatMessage = styled.div`
  position: relative;
  max-width: 440px;
  width: 70%;
  margin-right: 10px;
  background-color: #d9fdd3; /* Adjust color as needed */
  padding: 5px 10px 1px 10px;
  text-overflow: ellipsis;
  min-height: 34px;
  word-wrap: break-word; /* Enable text wrapping */
  border-radius: 10px 0px 10px 10px;
  margin-left: auto; /* To align right if needed */
`;

const MessageText = styled.div`
  font-family: Mulish-400;
  color: #333;
  font-size: 14.2px;
`;

const ArrowLeftTop = styled.div`
  position: absolute;
  top: 0;
  left: -5px;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid #e0e0e0; /* Same color as chat message background */
`;
const ArrowRightTop = styled.div`
  position: absolute;
  top: 0;
  right: -5px;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid #d9fdd3; /* Same color as chat message background */
`;
const ChatMessageWithArrow = ({ msg = "", createAt = "" }) => {
  const [isTruncate, setIsTruncate] = useState(true);
  const truncatedText = isTruncate ? _.truncate(msg, { length: 600 }) : msg;
  if (msg) {
    return (
      <ChatContainer>
        <ChatMessage>
          <MessageText>
            {truncatedText}
            {isTruncate && size(msg) > 600 && (
              <Button
                sx={{ fontSize: 13, fontFamily: "Mulish-400", p: "2px" }}
                onClick={() => {
                  setIsTruncate(false);
                }}
              >
                Read More
              </Button>
            )}
          </MessageText>
          <ArrowRightTop />
          <Typography
            sx={{
              fontSize: 11,
              textAlign: "right",
              mt: -0.5,
            }}
          >
            {moment(createAt).format("h:mm a")}
          </Typography>
        </ChatMessage>
      </ChatContainer>
    );
  }
  return "";
};

export default ChatMessageWithArrow;

export const ChatMessageWithRightArrow = ({ msg = "", createAt = "" }) => {
  const [isTruncate, setIsTruncate] = useState(true);
  const truncatedText = isTruncate ? _.truncate(msg, { length: 600 }) : msg;
  return (
    <ChatContainer>
      <RightChatMessage>
        <MessageText>
          {truncatedText}{" "}
          {isTruncate && size(msg) > 600 && (
            <Button
              sx={{ fontSize: 13, fontFamily: "Mulish-400", p: "2px" }}
              onClick={() => {
                setIsTruncate(false);
              }}
            >
              Read More
            </Button>
          )}
        </MessageText>
        <ArrowLeftTop />
        <Typography
          sx={{
            fontSize: 11,
            textAlign: "right",
            mt: -0.5,
          }}
        >
          {moment(createAt).format("h:mm a")}
        </Typography>
      </RightChatMessage>
    </ChatContainer>
  );
};
