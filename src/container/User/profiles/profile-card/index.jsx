import React from "react";
import {
  Grid,
  Divider,
  Fab,
  Typography,
  Tooltip,
  Box,
  Avatar,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { get, size, truncate } from "lodash";
// import MLForm from "components/form-component";
// import * as Yup from "yup";

const LeftProfileCard = ({
  profile_data,
  onSubmit = ({
    values,
    setErrors,
    setStatus,
    setSubmitting,
    resetForm,
    setOpen,
  }) => {},
  showEditOptions = true,
  fontSize = "medium",
  backgroundColor = "#fff",
  width = "16vw",
  height = "80vh",
  alignItems = "center",
  display = "flex",
  flexDirection = "column",
  boxShadow = "0px 0px 10px rgba(0,0,0,0.1)",
  borderRadius = 2,
  padding = 2,
}) => {
  const labelStyle = {
    fontFamily: "Mulish-800",
    fontWeight: "bold",
    fontSize:
      fontSize === "medium"
        ? "16px"
        : fontSize === "large"
        ? "19px"
        : fontSize === "small" && "13px",
    marginTop: 1,
    color: "#777",
  };
  const userInfoStyle = {
    fontFamily: "Mulish-300",
    fontWeight: "bold",
    fontSize:
      fontSize === "medium"
        ? "15px"
        : fontSize === "large"
        ? "18px"
        : fontSize === "small" && "11px",
    color: "#777",
  };
  return (
    <Grid
      sx={{
        mb: 2,
        mt: 0,
        backgroundColor,
        width,
        height,
        alignItems,
        display,
        flexDirection,
        boxShadow,
        borderRadius,
        padding,
      }}
      xs={showEditOptions ? 12 : 12}
      md={showEditOptions ? 3.5 : 12}
      lg={showEditOptions ? 2.5 : 12}
    >
      <Avatar
        alt={`${profile_data?.name}`}
        src={`http://localhost:9000/uploads/${profile_data.imgname}`}
        sx={{
          width: "180px",
          height: "180px",
          boxShadow: "0px 0 7px 1px rgba(0,0,0,0.3)",
        }}
      />
      {showEditOptions && (
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            maxWidth: "32px",
            maxHeight: "32px",
            minWidth: "32px",
            minHeight: "32px",
            marginTop: "-50px",
            marginLeft: "135px",
            border: "2px solid white",
          }}
        >
          <Edit sx={{ fontSize: "20px" }} />
        </Fab>
      )}
      {size(`${profile_data?.name}`) > 17 ? (
        <Tooltip
          title={`${profile_data?.name}`}
          sx={{ fontSize: "1vh", height: "1vh" }}
        >
          <Typography
            variant="h2"
            sx={{
              marginTop: showEditOptions ? "30px" : 2,
              marginBottom: showEditOptions ? 0 : "20px",
              fontFamily: "Mulish-800",
              fontWeight: "bold",
              fontSize:
                fontSize === "medium"
                  ? "20px"
                  : fontSize === "large"
                  ? "22px"
                  : fontSize === "small" && "14px",
            }}
          >
            {truncate(`${profile_data?.name}`, {
              length: 17,
              omission: "...",
            })}
          </Typography>
        </Tooltip>
      ) : (
        <Typography
          variant="h2"
          sx={{
            marginTop: showEditOptions ? "30px" : 2,
            marginBottom: showEditOptions ? 0 : "20px",
            fontFamily: "Mulish-800",
            fontWeight: "bold",
            fontSize:
              fontSize === "medium"
                ? "20px"
                : fontSize === "large"
                ? "22px"
                : fontSize === "small" && "14px",
          }}
        >
          {`${profile_data?.name}`}
        </Typography>
      )}
      {/* {showEditOptions && (
        <MLForm
          modalDescription="label.we_care_about_your_data"
          modalTitle={
            ("label.edit_account",
            {
              item: "label.user",
            })
          }
          validationSchema={{
            email: Yup.string()
              .email("Must be a valid Email")
              .max(255)
              .required(
                ("form.item_required",
                {
                  item: "label.email",
                })
              ),
            first_name: Yup.string("Please enter a Valid First Name")
              .max(255)
              .required(
                ("form.item_required",
                {
                  item: "label.first_name",
                })
              ),
            last_name: Yup.string("Please enter a Valid Last Name")
              .max(255)
              .required(
                ("form.item_required",
                {
                  item: "label.last_name",
                })
              ),
            cell_phone: Yup.number("Please enter a Valid Cell Phone")
              .label("label.cell_phone")
              .max(
                999999999999,
                ("form.please_enter_valid_item",
                {
                  item: "label.cell_phone",
                })
              )
              .required(
                ("form.item_required",
                {
                  item: "label.cell_phone",
                })
              ),
          }}
          buttonStyle={{
            // marginTop: 1,
            fontSize: 15,
          }}
          fieldList={[
            {
              label: "label.first_name",
              required: true,
              name: "first_name",
            },
            {
              label: "label.last_name",
              required: true,
              name: "last_name",
            },
            { label: "label.email", required: true, name: "email" },
            {
              label: "label.cell_phone",
              required: true,
              name: "cell_phone",
            },
          ]}
          onSubmit={onSubmit}
          editButtonName={"profile.button.edit_basic_info"}
          variant=""
          buttonColor="#1890ff"
          userData={profile_data}
        />
      )} */}
      <Divider
        orientation="horizontal"
        sx={{ bgcolor: "#fcf1eb", width: "100%", height: "2px" }}
      />
      <Grid
        sx={{
          backgroundColor: "#00000000",
          width: "100%",
          height: "100%",
          mt: 2,
          ml: 1,
          alignItems: "left",
          display: "block",
          // paddingLeft: 2
        }}
      >
        <Typography variant="h3" sx={labelStyle}>
          {"label.first_name"}
        </Typography>
        <Typography variant="h3" sx={userInfoStyle}>
          {profile_data?.first_name}
        </Typography>
        <Typography variant="h3" sx={labelStyle}>
          {"label.last_name"}
        </Typography>
        <Typography variant="h3" sx={userInfoStyle}>
          {profile_data?.last_name}
        </Typography>
        <Typography variant="h3" sx={labelStyle}>
          {"label.cell_phone"}
        </Typography>
        <Typography variant="h3" sx={userInfoStyle}>
          {profile_data?.cell_phone}
        </Typography>
        <Typography variant="h3" sx={labelStyle}>
          {"label.email"}
        </Typography>
        <Typography variant="h3" sx={userInfoStyle}>
          {profile_data?.email}
        </Typography>
        <Typography variant="h3" sx={labelStyle}>
          {"label.organizations"}
        </Typography>
        <Typography variant="h3" sx={userInfoStyle}>
          {get(profile_data, "role", false) === 1 ||
          get(profile_data, "role", false) === "Super Admin"
            ? "label.all"
            : profile_data?.organization_alias
            ? get(profile_data, "organization_alias", "N/A")
            : "N/A"}
        </Typography>
      </Grid>
      <Box>
        {profile_data.mfa == 1 && (
          <Grid container justifyContent={"center"}>
            <Grid
              item
              sx={{
                mt: 2,
              }}
            >
              MFA QR code
            </Grid>
          </Grid>
        )}
      </Box>
    </Grid>
  );
};

export default LeftProfileCard;
