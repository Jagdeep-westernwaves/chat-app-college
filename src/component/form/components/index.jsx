import React, { useState } from "react";
import { passwordStrength } from "check-password-strength";
import {
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Divider,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { capitalize, get, includes, join, map } from "lodash";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import MLTooltip from "../../ToolTip";
import { useTranslation } from "react-i18next";
import MultiSelect from "../../Select";
import { t } from "i18next";
// 6+ characters
//with atleast 1 digit
// with atleast 1 character
const PASSWORD_POLICY = [
  {
    label: "8+ character",
    rule: (e) => e.length > 7,
  },
  {
    label: "With Atleast 1 character",
    rule: (e) => e.match(/[a-z]/),
  },
  {
    label: "With Atleast 1 Capital character",
    rule: (e) => e.match(/[A-Z]/),
  },
  {
    label: "With Atleast 1 Numeric character",
    rule: (e) => e.match(/[0-9]/),
  },
  {
    label: "With Atleast 1 special character",
    rule: (e) => e.match(/[*@!#%&()^~{}]+/),
  },
];

export function CheckPolicy({
  password,
  isOpen,
  refId = "new_password",
  place = "right",
  variant = "light",
}) {
  return (
    <MLTooltip
      isOpen={isOpen}
      refId={refId}
      place={place}
      style={{
        marginLeft: 50,
      }}
      variant={variant}
      content={
        <>
          {PASSWORD_POLICY.map((item, index) => {
            return (
              <>
                <span key={index} className="Checkpolicy_criteria">
                  {item.rule(password) ? `✅` : `❌`} {item.label}
                </span>
                <br />
              </>
            );
          })}
          <Divider height="" />
          <span className="Checkpolicy_strength">
            {t("label.password_is")}{" "}
            {password && passwordStrength(password)?.value}
          </span>
        </>
      }
    >
      <span className="Checkpolicy_strength">
        {password && passwordStrength(password)?.value}
      </span>
    </MLTooltip>
  );
}
const MapFields = ({
  values,
  setErrors,
  value,
  key,
  handleChange = (e) => {},
  handleBlur = (e) => {},
  errors,
  setFieldValue,
  setFieldTouched,
  touched,
}) => {
  const {
    label,
    name,
    type = "text",
    disabled = false,
    hidden = false,
    accept = ["image"],
    onChange = (e, f) => {},
    isSearch = false,
    customField = false,
    option = [],
    required = false,
    isAllOption = false,
    defalutAll = false,
    initialSelected = [],
  } = value;
  //
  //
  //
  const [showPassword, setShowPassword] = useState(false);
  const [fileUpload, setUploadFiles] = useState();
  const [imagePreviewUrl, setUrl] = useState("");
  const [isFileDocClicked, setIsFileDocClicked] = useState(false);
  const { t } = useTranslation();
  // const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => {
    setShowPassword((curr) => (curr === name ? "" : name));
  };

  const uploadFile = (event) => {
    if (event.target.files[0]) {
      setUploadFiles(event.target.files[0]);
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onloadend = () => {
        setUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setUploadFiles(false);
    }
  };
  return (
    <>
      {!hidden && (
        <Grid item xs={12} key={name}>
          <Stack spacing={1}>
            {label && (
              <InputLabel sx={{ fontFamily: "Mulish-800" }} htmlFor={name}>
                {capitalize(label)}
                {required && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "16px",
                    }}
                  >
                    *
                  </span>
                )}
              </InputLabel>
            )}
            {customField ? (
              customField
            ) : type === "select" ? (
              <MultiSelect
                disabled={disabled}
                value={values[name]}
                isAllOption={isAllOption}
                defalutAll={defalutAll}
                initialSelected={initialSelected}
                onChange={(e, f) => {
                  onChange(e, f);
                  setFieldValue(e, f);
                }}
                onBlur={setFieldTouched}
                error={errors[name] && Boolean(touched[name])}
                option={option}
                name={name}
                isSearch={isSearch}
                label={label}
                touched={touched[name]}
              />
            ) : type === "multiSelect" ? (
              <MultiSelect
                disabled={disabled}
                name={name}
                label={label}
                initialSelected={initialSelected}
                isAllOption={isAllOption}
                defalutAll={defalutAll}
                option={option}
                multiple
                value={values[name]}
                onChange={(e, f) => {
                  onChange(e, f);
                  setFieldValue(e, f);
                }}
                onBlur={setFieldTouched}
                error={errors[name] && Boolean(touched[name])}
                touched={touched[name]}
              />
            ) : type === "file" ? (
              <>
                <label htmlFor={name + "11"}>
                  <OutlinedInput
                    sx={{
                      display: "none",
                    }}
                    type="file"
                    inputProps={{ accept: "." + join(accept, ",.") }}
                    // value={
                    //     get(fileUpload, "name", false)
                    //         ? fileUpload.name
                    //         : ""
                    // }
                    name={name}
                    id={name + "11"}
                    disabled={disabled}
                    error={errors[name] && values[name]}
                    contentEditable={false}
                    onChange={(event) => {
                      setIsFileDocClicked(true);
                      uploadFile(event);
                      console.log("file: ", event.target.files[0]);
                      if (event.target.files[0]) {
                        let file = event.target.files[0];
                        setFieldValue(name, get(file, "name", ""));
                        if (
                          includes(
                            accept,
                            event.target.files[0].name.split(".").pop()
                          )
                        ) {
                          let reader = new FileReader();
                          reader.onloadend = () => {};
                          reader.readAsDataURL(file);
                          onChange(name, file);
                        } else {
                        }
                      } else {
                        setFieldValue(name, "");
                      }
                    }}
                  />
                  <div
                    style={{
                      border:
                        errors[name] && isFileDocClicked
                          ? "1px solid red"
                          : "1px solid #d9d9d9",
                      textAlign: "left",
                      paddingTop: "8px",
                      borderRadius: "4px",
                      height: 40,
                      bgColor: "white",
                      color: "#9ea0a3",
                      paddingLeft: 10,
                      fontFamily: "Mulish-300",
                      fontSize: "14px",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      "&:hover": {
                        background: "transparent",
                      },
                    }}
                  >
                    {get(fileUpload, "name", t("label.select_file"))}
                  </div>
                </label>
                {errors[name] && isFileDocClicked && (
                  <FormHelperText
                    error
                    id={`standard-weight-helper-text-${name}`}
                  >
                    {errors[name]}
                  </FormHelperText>
                )}
              </>
            ) : type === "password" ? (
              <OutlinedInput
                fullWidth
                sx={{
                  fontSize: "15px",
                  width: "100%",
                  fontFamily: "Mulish-400",
                }}
                error={Boolean(touched[name]) && errors[name]}
                id={name}
                disabled={disabled}
                inputProps={{
                  autocomplete: "new-password",
                  form: {
                    autocomplete: "off",
                  },
                }}
                type={showPassword === name ? "text" : "password"}
                value={values[name]}
                name={name}
                onBlur={handleBlur}
                onChange={(e, f) => {
                  onChange(e, f);
                  handleChange(e, f);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword === name ? (
                        <EyeOutlined />
                      ) : (
                        <EyeInvisibleOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder={`${t("label.enter")} ${label}`}
              />
            ) : (
              <OutlinedInput
                sx={{
                  fontSize: "15px",
                  width: "100%",
                  fontFamily: "Mulish-400",
                }}
                id={name}
                disabled={disabled}
                type={type !== "new_password" ? type : "text"}
                value={values[name]}
                name={name}
                onBlur={handleBlur}
                onChange={(e, f) => {
                  onChange(e, f);
                  handleChange(e, f);
                }}
                placeholder={capitalize(`${t("label.enter")} ${label}`)}
                fullWidth
                error={Boolean(touched[name] && errors[name])}
              />
            )}
            {touched[name] && errors[name] && (
              <FormHelperText error id={`standard-weight-helper-text-${name}`}>
                {capitalize(errors[name])}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
      )}
    </>
  );
};
export default function InputData({
  data,
  values,
  setErrors,
  handleChange = (e) => {},
  handleBlur = (e) => {},
  errors,
  setFieldValue,
  setFieldTouched,
  touched,
}) {
  return map(data, (value, key) => {
    return (
      <MapFields
        data={data}
        value={value}
        key={key}
        setErrors={setErrors}
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
        touched={touched}
      />
    );
  });
}
