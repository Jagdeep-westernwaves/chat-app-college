import { CloseOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  Fab,
  Typography,
  IconButton,
  Tooltip,
  Modal,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Formik } from "formik";
import React, { useRef } from "react";
import * as Yup from "yup";
import InputData, { CheckPolicy } from "./components/index";
import { isString } from "lodash";
const useStyles = makeStyles({
  flexGrow: {
    flex: "1",
  },
  submitButton: {
    backgroundColor: "#008fdb",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#00a3f9",
      color: "#fff",
    },
  },
  closeButton: {
    backgroundColor: "#fff",
    boxShadow: "none",
    width: "35px",
    height: "35px",
    marginTop: "-px",
    color: "red",
    float: "right",
    "&:hover": {
      width: "35px",
      marginTop: "-px",
      float: "right",
      height: "35px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      color: "red",
      boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
    },
  },
  buttonCancel: {
    backgroundColor: "#fff",
    border: "1px solid #ff0509",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    color: "#ff0509",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#fc0000",
      // backgroundColor: '#fff',
      // color: '#222',
      border: "1px solid #fc0000",
    },
  },
});
const MLForm = ({
  disabled = false,
  isCreatingAcc = false,
  onOpen = () => {},
  submitButtonname = "",
  modalDescription = "",
  modalTitle = "label.create_account",
  editButtonName = "Edit Basic Info",
  variant = "contained",
  userData = {},
  tooltipTitle = false,
  disableModal = false,
  fieldList = [],
  validationSchema = {},
  onSubmit = ({
    values,
    setErrors,
    setStatus,
    setSubmitting,
    resetForm,
    setOpen,
  }) => {},
  buttonStyle = {
    fontFamily: "Mulish-300",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1vw",
    marginTop: "1vh",
    color: "#1890ff",
    width: "auto",
    cursor: "pointer",
  },
  onClose = (e) => {},
}) => {
  //
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const formikRef = useRef();
  const [zoomSize, setZoomSize] = React.useState(
    window.devicePixelRatio <= 1
      ? "80vh"
      : window.devicePixelRatio <= 1.25 && window.devicePixelRatio > 1
      ? "75vh"
      : window.devicePixelRatio >= 1.5 && window.devicePixelRatio > 1.25
      ? "65vh"
      : "70vh"
  );
  const handleOpen = () => {
    onOpen();
    setOpen(true);
  };
  const handleClose = (e) => {
    formikRef.current.setErrors({}); // Manually reset the error object
    formikRef.current.resetForm();
    formikRef.current.setTouched({}); // Manually reset the touched fields     formikRef.current.resetForm();
    setOpen(false);
    onClose(e);
  };
  const style = {
    width: "415px",
    height: "auto",
    maxHeight: "95vh",
    maxWidth: "90vw",
    border: "none",
    boxShadow: 15,
    borderRadius: 2,
    overflowY: "auto",
    backgroundColor: "#EEF6FFf1",
    padding: "10px 15px",
    outline: "none",
  };
  // values === userData;
  // useEffect(() => {
  //     console.log("userData: ", userData);
  // }, [userData]);
  window.addEventListener("resize", function () {
    setZoomSize(
      window.devicePixelRatio <= 1
        ? "80vh"
        : window.devicePixelRatio <= 1.25 && window.devicePixelRatio > 1
        ? "75vh"
        : window.devicePixelRatio <= 1.5 && window.devicePixelRatio > 1.25
        ? "65vh"
        : "70vh"
    );
  });
  return (
    <>
      {!disableModal &&
        (tooltipTitle ? (
          <Tooltip title={tooltipTitle}>
            <IconButton
              variant={variant}
              sx={{
                fontFamily: "Mulish-300",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1vw",
                color: "#1890ff",
                width: "auto",
                cursor: "pointer",
                ...buttonStyle,
              }}
              onClick={() => {
                handleOpen();
              }}
              disabled={disabled}
            >
              {editButtonName}
            </IconButton>
          </Tooltip>
        ) : (
          <IconButton
            variant={variant}
            sx={{
              fontFamily: "Mulish-300",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1vw",
              color: "#1890ff",
              width: "auto",
              cursor: "pointer",
              ...buttonStyle,
            }}
            onClick={() => {
              handleOpen();
            }}
            disabled={disabled}
          >
            {editButtonName}
          </IconButton>
        ))}
      <Formik
        innerRef={formikRef}
        enableReinitialize
        initialValues={userData}
        validationSchema={Yup.object().shape(validationSchema)}
        onSubmit={async (
          values,
          { setErrors, setStatus, setSubmitting, resetForm }
        ) => {
          try {
            setStatus({ success: false });
            setSubmitting(true);
            if (onSubmit) {
              onSubmit({
                values,
                setErrors,
                setStatus,
                setSubmitting,
                resetForm,
                setOpen,
              });
            }
          } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
          setErrors,
          setFieldValue,
          setFieldTouched,
          dirty,
          isValid,
        }) => {
          // console.log("dirty,", dirty);
          // console.log("isValid", isValid);
          // console.log("errors:", errors);
          // console.log("values:", values);
          // console.log("values === userData: ", values === userData);
          return (
            <form noValidate onSubmit={handleSubmit}>
              {disableModal ? (
                <Box>
                  <Box
                    sx={{
                      borderRadius: 2,
                      minHeight: "100px",
                      display: "block",
                      fontSize: "16px",
                      wordWrap: "continue",
                      fontFamily: "Mulish-400",
                      overflowWrap: "continue",
                      backgroundColor: "#F5F8FD",
                      border: "1px solid #fff",
                      pb: 2,
                    }}
                  >
                    {" "}
                    <Grid container spacing={2}>
                      {InputData({
                        errors,
                        handleBlur,
                        setErrors,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values,
                        setFieldValue,
                        setFieldTouched,
                        data: fieldList,
                      })}
                      {errors.submit && (
                        <Grid item xs={12}>
                          <FormHelperText error>{errors.submit}</FormHelperText>
                        </Grid>
                      )}
                    </Grid>
                  </Box>
                  <Box
                    sx={{
                      // m: "10px",
                      mb: "-2px",
                      width: "415px",
                      maxWidth: "100%",
                    }}
                  >
                    <Grid container justifyContent={"space-between"}>
                      <Grid lg={5.9} sm={5.9} xs={5.9} md={5.9}>
                        <Button
                          variant="contained"
                          sx={{
                            fontFamily: "Mulish-800",
                            padding: "7px 30px",
                            minWidth: "10px",
                            fontSize: "16px",
                            width: "100%",
                            // borderRadius: 0
                            backgroundColor: "#e63c3c",
                            "&:hover": {
                              backgroundColor: "#ff384c",
                            },
                            borderRadius: 2,
                          }}
                          onClick={handleClose}
                        >
                          {"button.cancel"}
                        </Button>
                      </Grid>
                      <Grid lg={5.9} sm={5.9} xs={5.9} md={5.9}>
                        <Button
                          variant="contained"
                          loading={isSubmitting}
                          type="submit"
                          disabled={!isValid || !dirty || values === userData}
                          color="primary"
                          sx={{
                            fontFamily: "Mulish-800",
                            padding: "7px 30px",
                            minWidth: "10px",
                            fontSize: "16px",
                            width: "100%",
                            // borderRadius: 0
                            borderRadius: 2,
                          }}
                          onClick={handleSubmit}
                        >
                          {!submitButtonname
                            ? isCreatingAcc
                              ? "button.create"
                              : "button.update"
                            : submitButtonname}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              ) : (
                <Modal
                  open={open}
                  onClose={handleClose}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  // xs sm md lg xl
                >
                  <Box sx={style}>
                    <Grid>
                      <Box
                        flexDirection="row"
                        display="flex"
                        flexGrow={1}
                        style={{
                          width: "100%",
                          marginTop: "2px",
                        }}
                        justifyContent="space-between"
                      >
                        <Typography
                          id="modal-modal-title"
                          // variant="h4"
                          sx={{
                            fontFamily: "Mulish-800",
                            fontSize: "22px",
                            color: "#000",
                            width: "80%",
                          }}
                          component="h4"
                        >
                          {modalTitle ? modalTitle : ""}
                        </Typography>
                        <Fab
                          onClick={() => {
                            handleClose();
                          }}
                          sx={{
                            backgroundColor: "#fff00000",
                            boxShadow: "none",
                            width: "30px",
                            height: "30px",
                            marginTop: "",
                            color: "red",
                            borderRadius: "10px",
                            float: "right",
                            "&:hover": {
                              width: "30px",
                              marginTop: "",
                              float: "right",
                              height: "30px",
                              backgroundColor: "#eeeeee44",
                              color: "red",
                              boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
                            },
                          }}
                        >
                          <CloseOutlined
                            sx={{ fontSize: "20px", color: "red" }}
                          />
                        </Fab>
                      </Box>
                    </Grid>
                    <Box
                      maxHeight={zoomSize}
                      sx={{
                        p: 2,
                        my: 2,
                        borderRadius: 2,
                        minHeight: "100px",
                        display: "block",
                        fontSize: "16px",
                        wordWrap: "continue",
                        overflowY: "auto",
                        fontFamily: "Mulish-400",
                        overflowWrap: "continue",
                        backgroundColor: "#F5F8FD",
                        border: "1px solid #fff",
                      }}
                    >
                      <Grid container spacing={2}>
                        {InputData({
                          errors,
                          handleBlur,
                          setErrors,
                          handleChange,
                          handleSubmit,
                          isSubmitting,
                          touched,
                          values,
                          setFieldValue,
                          setFieldTouched,
                          data: fieldList,
                        })}
                        {errors.submit && (
                          <Grid item xs={12}>
                            <FormHelperText error>
                              {errors.submit}
                            </FormHelperText>
                          </Grid>
                        )}
                      </Grid>
                    </Box>
                    <Box
                      sx={{
                        // m: "10px",
                        mb: "-2px",
                        width: "415px",
                        maxWidth: "100%",
                      }}
                    >
                      <Grid container justifyContent={"space-between"}>
                        <Grid lg={5.9} sm={12} sx={12} md={5.9}>
                          <Button
                            variant="contained"
                            sx={{
                              fontFamily: "Mulish-800",
                              padding: "7px 30px",
                              minWidth: "10px",
                              fontSize: "16px",
                              width: "100%",
                              // borderRadius: 0
                              backgroundColor: "#e63c3c",
                              "&:hover": {
                                backgroundColor: "#ff384c",
                              },
                              borderRadius: 2,
                            }}
                            onClick={handleClose}
                          >
                            {"button.cancel"}
                          </Button>
                        </Grid>
                        <Grid lg={5.9} sm={12} sx={12} md={5.9}>
                          <Button
                            variant="contained"
                            color="primary"
                            sx={{
                              fontFamily: "Mulish-800",
                              padding: "7px 30px",
                              minWidth: "10px",
                              fontSize: "16px",
                              width: "100%",
                              // borderRadius: 0
                              borderRadius: 2,
                            }}
                            type="submit"
                            disabled={!isValid || !dirty}
                            onClick={handleSubmit}
                          >
                            {!submitButtonname
                              ? isCreatingAcc
                                ? "button.create"
                                : "button.update"
                              : submitButtonname}
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Modal>
              )}
              {isString(values.new_password) && (
                <CheckPolicy
                  refId="new_password"
                  password={values.new_password}
                  isOpen={errors.new_password && open}
                />
              )}
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default MLForm;
