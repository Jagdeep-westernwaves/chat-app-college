import { Box, Typography } from "@mui/material";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Tooltip = ({
  refId = "",
  content = "",
  compact = false,
  place = "bottom",
  variant = "light",
  isOpen = false,
  icon = false,
}) => {
  // varians----> dark light success warning error info
  // more info https://react-tooltip.com/docs/options
  return (
    <ReactTooltip
      border="1px solid #ccc"
      style={{
        zIndex: 99999999,
        top: 0,
        position: "absolute",
        left: 0,
        padding: 0,
        boxShadow: compact ? "" : "0 0 1px 5px rgba(0,0,0,0.03)",
        backgroundColor:
          variant === "info"
            ? "#009dff"
            : variant === "error"
            ? "#db001a"
            : variant === "success"
            ? "#25db00"
            : variant === "dark"
            ? "#222"
            : "#ffffff",
        borderRadius: 7,
        alignItems: "center",
        color: variant !== "dark" ? "#222" : "#fff",
      }}
      isOpen={isOpen ? isOpen : undefined}
      anchorId={refId}
      place={place}
      variant={variant}
      content={
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={compact ? 0.6 : 1}
          px={1}
        >
          {icon && (
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {icon}
            </Box>
          )}
          <Typography ml={icon ? 1 : 0} sx={{ fontSize: compact ? 12 : 13 }}>
            {content}
          </Typography>
        </Box>
      }
    />
  );
};

export default Tooltip;
