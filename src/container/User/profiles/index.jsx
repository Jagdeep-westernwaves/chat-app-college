/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Divider,
  Grid,
  IconButton,
  Switch,
  Typography,
  styled,
} from "@mui/material";
// import {
//   getMFAStatus,
//   getProfileApi,
//   mfaSettings,
//   resetRedux,
//   updatePassword,
//   updateTimezone,
//   updateUserProfile,
// } from "./action";
import LeftProfileCard from "./profile-card";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTranslation } from "react-i18next";
export const MaterialUISwitch = styled(Switch)(({ theme, checked }) => {
  return {
    width: 53,
    height: 34,
    padding: 10,
    background: "#0000",
    "& .MuiSwitch-switchBase": {
      margin: 6,
      padding: 0,
      transition: "transform 0.1s ease",
      transform: "translateX(-0px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(23px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path  fill="${encodeURIComponent(
            "#fff"
          )}" d="M12.65 10A5.99 5.99 0 007 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 005.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: checked ? "#5af25aaa" : "#ff7a21",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: checked ? "#07fa07" : "#ff7a21",
      width: 22,
      height: 22,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M20.83 18H21v-4h2v-4H12.83l8 8zm-1.05 4.61l1.41-1.41L2.81 2.81 1.39 4.22l2.59 2.59A6.012 6.012 0 001 12c0 3.31 2.69 6 6 6 2.21 0 4.15-1.2 5.18-2.99l7.6 7.6zM8.99 11.82c.01.06.01.12.01.18 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.06 0 .12 0 .18.01l1.81 1.81z"></path></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: checked ? "#5af25aaa" : "#ff7a21aa",
      borderRadius: 20 / 2,
    },
  };
});
const UserProfile = ({
  callProfileApi = () => {},
  profile_data = {},
  callUpdateUser = () => {},
}) => {
  const { t } = useTranslation();
  const matchesXs = false;

  // useEffect(() => {
  //     if (isChecked) {
  //         setTimeout(() => {
  //             setisCompleted(true);
  //         }, 1500);
  //     } else {
  //         setisCompleted(false);
  //     }
  // }, [isChecked]);
  return (
    <Grid
      container
      display={"flex"}
      sx={{
        mt: 2,
      }}
      justifyContent={"center"}
    >
      <LeftProfileCard
        onSubmit={async ({
          values,
          setErrors,
          setStatus,
          setSubmitting,
          resetForm,
          setOpen,
        }) => {
          try {
            setStatus({ success: false });
            setSubmitting(true);
            const payload = {
              first_name: values.first_name,
              last_name: values.last_name,
              cell_phone: values.cell_phone,
              email: values.email,
            };
            const res = await callUpdateUser(payload);
            if (res) {
              callProfileApi();
              setOpen(false);
              resetForm();
              setSubmitting(false);
            }
          } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
        profile_data={profile_data}
        height={matchesXs ? "auto" : "80vh"}
        overflow={matchesXs ? "" : "hidden"}
        overflowY={matchesXs ? "" : "auto"}
      />
      <Grid
        sx={{
          backgroundColor: "transparant",
          width: "100%",
          // height: "80vh",
          // minHeight: "80vh",
          ml: !matchesXs ? 2 : 0,
          overflow: "hidden",
        }}
        xs={12}
        md={7}
        lg={6}
      >
        <Grid
          sx={{
            backgroundColor: "#fff",
            width: "100%",
            overflow: "hidden",
            display: "block",
            marginBottom: 4,
            borderRadius: 2,
            boxShadow: "0px 0px 13px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              marginLeft: "1.5vh",
              marginTop: "1.5vh",
              marginBottom: "0.5vh",
              fontFamily: "Mulish-800",
              fontWeight: "bold",
              fontSize: "13px",
            }}
          >
            {t("profile.label.my_notification")}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              marginLeft: "1.5vh",
              marginBottom: "1.5vh",
              fontFamily: "Mulish-300",
              fontSize: "13px",
              color: "#777",
            }}
          >
            {t("profile.label.my_notification_description")}
          </Typography>
          <Divider />
          <Grid container spacing={0}>
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <Typography
                variant="h2"
                sx={{
                  marginLeft: "1.5vh",
                  marginTop: "1.5vh",
                  marginBottom: "0.5vh",
                  fontFamily: "Mulish-800",
                  fontWeight: "bold",
                  fontSize: "13px",
                }}
              >
                {t("profile.label.text_message_login_notifications")}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  marginLeft: "1.5vh",
                  marginBottom: "1.5vh",
                  fontFamily: "Mulish-300",
                  fontSize: "13px",
                  color: "#777",
                }}
              >
                {t(
                  "profile.label.receive_texts_whenever_you_loggin_to_your_account"
                )}
              </Typography>
            </Grid>
            <Grid
              xs={2}
              sm={2}
              md={2}
              lg={2}
              item
              sx={{
                backgroundColor: "#fff",
                height: "100%",
                overflow: "hidden",
                overflowY: "auto",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                padding: 2,
              }}
            >
              <Switch color="success" defaultChecked />
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <Typography
                variant="h2"
                sx={{
                  marginLeft: "1.5vh",
                  marginTop: "1.5vh",
                  marginBottom: "0.5vh",
                  fontFamily: "Mulish-800",
                  fontWeight: "bold",
                  fontSize: "13px",
                }}
              >
                {t("profile.label.text_mail_login_notifications")}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  marginLeft: "1.5vh",
                  marginBottom: "1.5vh",
                  fontFamily: "Mulish-300",
                  fontSize: "13px",
                  color: "#777",
                }}
              >
                {t(
                  "profile.label.receive_mail_wheneveryou_loggin_toyour_account"
                )}
              </Typography>
            </Grid>
            <Grid
              xs={2}
              sm={2}
              md={2}
              lg={2}
              item
              sx={{
                backgroundColor: "#fff",
                height: "100%",
                overflow: "hidden",
                overflowY: "auto",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                padding: 2,
              }}
            >
              <Switch size={"medium"} color="success" defaultChecked />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{
            backgroundColor: "#fff",
            width: "100%",
            overflow: "hidden",
            overflowY: "auto",
            display: "block",
            marginBottom: 4,
            borderRadius: 2,
            boxShadow: "0px 0px 13px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              marginLeft: "1.5vh",
              marginTop: "1.5vh",
              fontFamily: "Mulish-800",
              fontWeight: "bold",
              marginBottom: "1.5vh",
              fontSize: "13px",
            }}
          >
            {t("profile.label.account_settings")}
          </Typography>
        </Grid>
        <Grid
          sx={{
            backgroundColor: "#fff",
            width: "100%",
            overflow: "hidden",
            overflowY: "auto",
            display: "block",
            marginBottom: 4,
            borderRadius: 2,
            boxShadow: "0px 0px 13px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              marginLeft: "1.5vh",
              marginTop: "1.5vh",
              fontFamily: "Mulish-800",
              fontWeight: "bold",
              marginBottom: "1.5vh",
              fontSize: "13px",
            }}
          >
            {t("profile.button.delete_account")}
          </Typography>
          <Divider />
          <Grid container spacing={0}>
            <Grid
              item
              xs={10}
              lg={10}
              md={10}
              sm={10}
              sx={{
                my: "auto",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  marginLeft: "1.5vh",
                  fontFamily: "Mulish-800",
                  fontWeight: "bold",
                  fontSize: "13px",
                }}
              >
                {t("profile.label.delete_account_confirmation")}
              </Typography>
            </Grid>
            <Grid
              xs={2}
              lg={2}
              md={2}
              sm={2}
              item
              sx={{
                backgroundColor: "#fff",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                padding: 2,
              }}
            >
              {/* <Button color="error" onClick={() => {}}>
                                {t("profile.button.delete_account")}
                            </Button> */}
              <IconButton color="error">
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
