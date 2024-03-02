import React, { useState } from "react";
import _without from "lodash/without";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CancelIcon from "@mui/icons-material/Cancel";
import { createStyles, makeStyles } from "@mui/styles";
import {
  Autocomplete,
  Checkbox,
  Chip,
  ClickAwayListener,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Skeleton,
  TextField,
  Tooltip,
} from "@mui/material";
import {
  capitalize,
  filter,
  get,
  intersectionBy,
  isArray,
  join,
  lowerCase,
  map,
  size,
  split,
  toString,
  truncate,
} from "lodash";
import { translate } from "helpers/translator";

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
      maxWidth: "100%",
      width: "100%",
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
      borderRadius: "199px",
      "&:hover": {
        backgroundColor: "#e8e6e6",
      },
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  })
);

const MultiSelect = ({
  option = [{ name: "Oliver Hansen", value: "1" }],
  defalutAll = false,
  name = "ML_select",
  initialSelected = [],
  value = [],
  onBlur = () => {},
  tooltip = false,
  onOpen = () => {},
  isSearch = false,
  error = "",
  disabled = false,
  isAllOption = false,
  isLoading = false,
  isChip = false,
  truncateLenght = 36,
  touched = false,
  style = {},
  multiple = false,
  onChange = (e, f) => {},
  onRemove = (e, f) => {},
  label = "",
  forceLabel = "",
}) => {
  const classes = useStyles();
  const [selectedOptions, setSelectedOptions] = useState(
    size(initialSelected) > 0 ? initialSelected : multiple ? [] : undefined
  );
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelectAll = () => {
    setSelectedOptions(option.map((i) => i.value));
    onChange(
      name,
      option.map((i) => i.value)
    );
  };
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (size(selectedValue) === size(option)) {
      handleSelectAll();
    }
    if (
      size(
        filter(event.target.value, (i) => lowerCase(i) === lowerCase("All"))
      ) > 0
    ) {
      handleSelectAll();
      onChange(
        name,
        option.map((i) => i.value)
      );
    } else if (
      size(
        filter(event.target.value, (i) => lowerCase(i) === lowerCase("None"))
      ) > 0
    ) {
      setSelectedOptions([]);
      onChange(name, []);
    } else {
      //
      setSelectedOptions(event.target.value);
      onChange(name, event.target.value);
      // onBlur(name, true);
    }
    // event.currentTarget.blur();
  };
  const handleBlur = (event) => {
    setOpen(false);
    onBlur(name, true);
  };

  const handleDelete = (e, value) => {
    onRemove(value);
    // e.preventDefault();
    setSelectedOptions((current) => _without(current, value));
    onChange(name, _without(selectedOptions, value));
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const chipStyle = {
    margin: 2,
    backgroundColor: disabled ? "#777" : "#d4d4d4",
    zIndex: multiple && open ? 9999 : 100,
    color: "#111",
    borderRadius: "199px",
    "&:hover": {
      backgroundColor: "#e8e6e6",
    },
  };
  // !multiple &&
  // multiple &&
  // useEffect(() => {
  //     setSelectedOptions(initialSelected)
  // }, [initialSelected]);
  return (
    <FormControl className={classes.formControl}>
      {isArray(value) && size(value) > 0 ? (
        size(selectedOptions) === 0 && !isLoading ? (
          <InputLabel
            style={{
              background: get(style, "background", "#F5F8FD"),
              color: get(style, "color", "#9ea0a3"),
              marginTop: get(style, "labelMarginTop", "0px"),
              fontFamily: "Mulish-300",
              height: 20,
              marginLeft: isSearch ? "5px" : "",
            }}
            id={`${name}-maxilockers-chip-checkbox-label`}
          >
            {forceLabel
              ? capitalize(forceLabel)
              : `${translate("label.enter")} ${capitalize(label)}`}
          </InputLabel>
        ) : (
          ""
        )
      ) : size(toString(value)) === 0 &&
        !isLoading &&
        !defalutAll &&
        !isSearch ? (
        <InputLabel
          style={{
            background: get(style, "background", "#F5F8FD"),
            color: get(style, "color", "#9ea0a3"),
            fontFamily: "Mulish-300",
            marginTop: get(style, "labelMarginTop", "0px"),
            marginTop: isSearch && 5,
            marginLeft: isSearch ? "2px" : "",
            height: 20,
          }}
          id={`${name}-maxilockers-chip-checkbox-label`}
        >
          {forceLabel
            ? capitalize(forceLabel)
            : `${capitalize(translate("label.enter") + " " + label)}`}
        </InputLabel>
      ) : (
        ""
      )}
      {multiple ? (
        <>
          {isLoading ? (
            <Skeleton
              style={{
                ...style,
                marginTop: "-13px",
                background: "#ddd",
                height: 64,
              }}
            />
          ) : (
            <Select
              labelId={`${name}-maxilockers-chip-checkbox-label`}
              id={`${name}-maxilockers-chip-checkbox`}
              multiple={multiple}
              disabled={disabled}
              defaultValue={split(initialSelected, ",")}
              onChange={handleChange}
              error={error}
              style={style}
              value={value ? (isArray(value) ? value : value.split(",")) : []}
              MenuProps={{
                disablePortal: true,
                disableAutoFocusItem: true,
                PaperProps: {
                  style: {
                    maxHeight: `${250}px`,
                    zIndex: 9000,
                  },
                },
              }}
              displayEmpty
              onBlur={handleBlur}
              open={open}
              onOpen={handleOpen}
              onClose={handleToggle}
              IconComponent={KeyboardArrowDownIcon}
              renderValue={(selected) => {
                return (
                  <>
                    {isChip ? (
                      <div
                        className={classes.chips}
                        style={{ paddingRight: 20 }}
                      >
                        {defalutAll ||
                        (isAllOption && size(selected) === size(option))
                          ? translate("label.all")
                          : truncate(
                              join(
                                map(
                                  intersectionBy(
                                    option,
                                    map(selected, (i) => {
                                      return {
                                        name: i,
                                        value: i,
                                      };
                                    }),
                                    "value"
                                  ),
                                  (i) => i.name
                                ),
                                ","
                              ),
                              {
                                length: truncateLenght,
                                omission: "...",
                              }
                            )}
                      </div>
                    ) : (
                      <div className={classes.chips}>
                        {defalutAll
                          ? translate("label.all")
                          : map(selected, (value, index) => {
                              const selectedItem = filter(option, (i) => {
                                return i.value === value;
                              })[0];
                              return (
                                <Chip
                                  key={selectedItem?.value + selectedItem?.name}
                                  disabled={disabled}
                                  size={"small"}
                                  label={selectedItem?.name}
                                  clickable
                                  //   sx={}
                                  deleteIcon={
                                    <CancelIcon
                                      onMouseDown={(event) => {
                                        event.stopPropagation();
                                      }}
                                    />
                                  }
                                  className={classes.chip}
                                  sx={chipStyle}
                                  onDelete={(e) => handleDelete(e, value)}
                                  onClick={() => {}}
                                />
                              );
                            })}
                      </div>
                    )}
                  </>
                );
              }}
            >
              {isAllOption &&
                (size(selectedOptions) === size(option) ? (
                  <MenuItem key={"None"} value={"None"}>
                    None
                  </MenuItem>
                ) : (
                  <MenuItem key={"All"} value={"All"}>
                    {translate("label.all")}
                  </MenuItem>
                ))}
              {option.map((item) => {
                const { value, name } = item;
                return (
                  <MenuItem key={name} value={value}>
                    {true ? (
                      ""
                    ) : (
                      <Checkbox checked={selectedOptions?.includes(value)} />
                    )}
                    <ListItemText primary={name} />
                  </MenuItem>
                );
              })}
            </Select>
          )}
        </>
      ) : isLoading ? (
        <Skeleton
          style={{
            ...style,
            marginTop: "-13px",
            background: "#ddd",
            height: 64,
          }}
        />
      ) : isSearch ? (
        <ClickAwayListener
          onClickAway={() => {
            setOpen(false);
          }}
        >
          <Autocomplete
            labelId={`${name}-maxilockers-chip-checkbox-label`}
            id={`${name}-maxilockers-chip-checkbox`}
            value={selectedOptions}
            style={{ ...style, height: 41 }}
            placement={"bottom-start"}
            options={option}
            getOptionLabel={(option) => option.name || ""}
            onChange={(event, newValue) => {
              setSelectedOptions(newValue);
              onChange(name, newValue !== null ? newValue.value : "", newValue);
            }}
            onBlur={handleBlur}
            disabled={disabled}
            ListboxProps={{
              style: {
                maxHeight: 150, // Set your custom height here
                overflowY: "auto",
                minWidth: "270px",
              },
            }}
            disableClearable
            open={open}
            onOpen={() => {
              handleToggle();
              onOpen();
            }}
            onClose={handleToggle}
            popupIcon={<KeyboardArrowDownIcon />}
            renderInput={(params) => {
              return tooltip && get(selectedOptions, "name", "") && !open ? (
                <Tooltip title={get(selectedOptions, "name", "")} arrow>
                  <TextField
                    id={`${name}-maxilockers-chip-checkbox-label-input-label`}
                    error={error}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <KeyboardArrowDownIcon
                          color={open ? "primary" : "action"}
                          sx={{ pointerEvents: "none", marginRight: 1 }}
                        />
                      ),
                    }}
                    sx={{
                      fontSize: "15px",
                      width: "100%",
                      fontFamily: "Mulish-400",
                      height: 41,
                      p: 0,
                      "& div": {
                        height: 41,
                        fontFamily: "Mulish-400",
                        // bgcolor:'red',
                        padding: "0px !important",
                        paddingRight: "25px !important",
                        paddingLeft: "5px !important",
                      },
                      "& div.MuiAutocomplete-endAdornment": {
                        height: 41,
                        fontFamily: "Mulish-400",
                        // bgcolor:'red',
                        padding: "0px !important",
                        mt: "-3px",

                        // paddingLeft: "px !important",
                        marginRight: "-5px !important",
                        "& button:hover": {
                          backgroundColor: "transparent",
                        },
                      },
                    }}
                    {...params}
                    placeholder={`${translate("label.enter")} ${capitalize(
                      label
                    )}`}
                  />
                </Tooltip>
              ) : (
                <TextField
                  id={`${name}-maxilockers-chip-checkbox-label-input-label`}
                  error={error}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <KeyboardArrowDownIcon
                        color={open ? "primary" : "action"}
                        sx={{ pointerEvents: "none", marginRight: 1 }}
                      />
                    ),
                  }}
                  sx={{
                    fontSize: "15px",
                    width: "100%",
                    fontFamily: "Mulish-400",
                    height: 41,
                    p: 0,
                    "& div": {
                      height: 41,
                      fontFamily: "Mulish-400",
                      padding: "0px !important",
                      paddingRight: "25px !important",
                      paddingLeft: "5px !important",
                    },
                    "& div.MuiAutocomplete-endAdornment": {
                      height: 41,
                      fontFamily: "Mulish-400",
                      // bgcolor:'red',
                      padding: "0px !important",
                      mt: "-3px",
                      // paddingLeft: "px !important",
                      marginRight: "-5px !important",
                      "& button:hover": {
                        backgroundColor: "transparent",
                      },
                    },
                  }}
                  {...params}
                  placeholder={`${translate("label.enter")} ${capitalize(
                    label
                  )}`}
                />
              );
            }}
          />
        </ClickAwayListener>
      ) : (
        <Select
          labelId={`${name}-maxilockers-chip-checkbox-label`}
          id={`${name}-maxilockers-chip-checkbox`}
          multiple={multiple}
          value={value}
          style={{ height: 41, ...style }}
          defaultValue={initialSelected}
          onChange={handleChange}
          error={error}
          disabled={disabled}
          onBlur={handleBlur}
          MenuProps={{
            disablePortal: true,
            disableAutoFocusItem: true,
            PaperProps: {
              style: {
                maxHeight: `${250}px`,
              },
            },
          }}
          onOpen={() => {}}
          IconComponent={KeyboardArrowDownIcon}
        >
          {/* <TextField
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    /> */}
          {option.map((item) => {
            const { value, name } = item;
            return (
              <MenuItem key={name} value={value}>
                <ListItemText primary={name} sx={{}} />
              </MenuItem>
            );
          })}
        </Select>
      )}
    </FormControl>
  );
};

export default MultiSelect;
