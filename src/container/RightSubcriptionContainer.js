import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { green, blue, orange } from "@mui/material/colors";
import { Box, Button, Divider, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import CheckIcon from "@mui/icons-material/Check";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const subscriptionOptions = [
  {
    label: "12 Months Subscription",
    value: "99",
    color: "white",
    bgcolor: "grey",
    total: 99,
    perMonth: 8,
  },
  {
    label: "12 Months Subscription",
    value: "179",
    color: "white",
    bgcolor: "grey",
    total: 179,
    perMonth: 15,
  },
  {
    label: " 6  Months Subscription ",
    value: "6",
    color: "white",
    bgcolor: "grey",
    total: 149,
    perMonth: 25,
  },
  {
    label: " 3  Months Subscription ",
    value: "3",
    color: "white",
    bgcolor: "grey",
    total: 99,
    perMonth: 33,
  },
];

const StyledRadio = (props) => (
  <Radio
    sx={{
      "& .MuiSvgIcon-root": {
        position: "absolute",
        top: "50%",
        left: "50%",
        position: "absolute",
        margin: "auto",
        marginTop: "-12px",
        marginLeft: "-65px",
        fill: props.checked ? green[500] : "",
      },
    }}
    {...props}
  />
);

const RightSubcriptionContainer = () => {
  const [selectedValue, setSelectedValue] = useState("179");
  const [selectedTotal, setSelectedTotal] = useState(179);

  const handleChange = (event) => {
    const selectedOption = subscriptionOptions.find(
      (option) => option.value === event.target.value
    );
    setSelectedValue(event.target.value);
    setSelectedTotal(selectedOption.total);
  };

  const discountedPrice = 18500 - parseInt(selectedValue);
  return (
    <div style={{ width: "40%", height: "auto" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
          border: "1px solid black",
          borderRadius: "15px",
          height: "auto",
          backgroundColor: "white",
          marginRight: "30px",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          flexDirection="row"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          marginTop="20px"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ bgcolor: blue[500] }}>1</Avatar>
            <Typography
              sx={{ color: "black", fontWeight: "200", marginTop: "2px" }}
            >
              Sign Up
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ bgcolor: blue[500] }}>2</Avatar>
            <Typography
              sx={{ color: "black", fontWeight: "200", marginTop: "2px" }}
            >
              Subscribe
            </Typography>
          </div>
        </Stack>
        <Typography
          sx={{
            color: "black",
            fontWeight: "300",
            marginTop: "20px",
            fontSize: "20px",
          }}
        >
          Select your subscription plan
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          flexDirection="column"
          display="flex"
          alignItems="center"
          marginTop="20px"
        >
          <FormControl
            component="fieldset"
            sx={{ width: "425px", marginRight: "20px" }}
          >
            <RadioGroup value={selectedValue} onChange={handleChange}>
              {subscriptionOptions.map((option) => (
                <Box
                  key={option.value}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "60px",
                    width: "100%",
                    borderRadius: "5px",
                    backgroundColor:
                      selectedValue === option.value
                        ? green[100]
                        : option.color,
                    border: `2px solid ${
                      selectedValue === option.value
                        ? green[500]
                        : option.bgcolor
                    }`,
                    padding: "10px",
                    marginBottom: "10px",
                    position: "relative",
                  }}
                >
                  {option.total === 99 &&
                  option.label === "12 Months Subscription" ? (
                    <span
                      style={{
                        marginLeft: "10px",
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "4px",
                        width: "30%",
                      }}
                    >
                      Offer Expired
                    </span>
                  ) : null}
                  {option.total === 179 &&
                  option.label === "12 Months Subscription" ? (
                    <span
                      style={{
                        marginLeft: "10px",
                        backgroundColor: "green",
                        color: "white",
                        borderRadius: "4px",
                        marginTop: "0px",
                        width: "30%",
                      }}
                    >
                      Recommended
                    </span>
                  ) : null}

                  <div>
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={
                        <StyledRadio
                          checked={selectedValue === option.value}
                          bgcolor={option.bgcolor}
                        />
                      }
                      label={option.label}
                      sx={{ color: "black", marginTop: "1px" }}
                      disabled={
                        option.total === 99 &&
                        option.label === "12 Months Subscription"
                      }
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      marginTop: "-25px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "300",
                        fontSize: "14px",
                        marginBottom: "1px",
                        color:
                          option.total === 99 &&
                          option.label === "12 Months Subscription"
                            ? "rgba(0, 0, 0, 0.5)"
                            : "black",
                      }}
                    >
                      Total ₹{option.total}
                    </Typography>
                    <Typography
                      sx={{
                        color:
                          option.total === 99 &&
                          option.label === "12 Months Subscription"
                            ? "rgba(0, 0, 0, 0.5)"
                            : "black",
                        fontSize: "12px",
                      }}
                    >
                      ₹{option.perMonth}/mo
                    </Typography>
                  </div>
                  {selectedValue === option.value && (
                    <CheckIcon
                      sx={{
                        fontSize: "18PX",
                        color: "white",
                        marginLeft: "55px",
                        marginTop: "-36px",
                        zIndex: "48",
                        backgroundColor: "green",
                        borderRadius: "65%",
                      }}
                    />
                  )}
                </Box>
              ))}
            </RadioGroup>
          </FormControl>
        </Stack>
        <Divider />
        <Stack
          flexDirection="row"
          alignItems="stretch"
          justifyContent="space-around"
          marginTop="10px"
        >
          <Typography sx={{ color: "black" }}>Subscription fee</Typography>
          <Typography sx={{ color: "black" }}> ₹18,500</Typography>
        </Stack>

        <Box
          sx={{
            display: "flex",
            height: "auto",
            width: "93%",
            marginLeft: "17px",
            borderRadius: "5px",
            backgroundColor: orange[300],
            color: "orange",
            border: "2px solid orange",
            direction: "row",
            alignItems: "stretch",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
              marginTop: "10px",
              marginLeft: "20px",
            }}
          >
            <Typography sx={{ color: "orangered", marginRight: "8px" }}>
              Limited Time Offer
            </Typography>
            <Typography
              sx={{
                color: "orangered",
                fontSize: "12px",
                marginLeft: "5px",
                marginBottom: "10px",
              }}
            >
              <AccessTimeIcon sx={{ color: "orangered", fontSize: 16 }} /> Offer
              valid till 25 March 2023
            </Typography>
          </div>
          <Typography
            sx={{ color: "black", marginRight: "60px", marginTop: "10px" }}
          >
            -₹{discountedPrice}
          </Typography>
        </Box>
        <Stack
          flexDirection="row"
          alignItems="stretch"
          justifyContent="space-around"
          marginTop="10px"
          height="auto"
        >
          <Typography sx={{ color: "black" }}>
            Total (Incl. of 18% GST)
          </Typography>
          <Typography sx={{ color: "black", marginRight: "20px" }}>
            {" "}
            ₹{selectedTotal}
          </Typography>
        </Stack>
        <Stack
          flexDirection="row"
          alignItems="stretch"
          justifyContent="space-around"
          marginTop="10px"
          height="auto"
          paddingBottom="20px"
        >
          <Button
            sx={{ color: "red", width: "40%" }}
            variant="outlined"
            color="error"
          >
            Cancel
          </Button>
          <Button
            sx={{ color: "white", width: "40%" }}
            variant="contained"
            color="success"
          >
            {" "}
            Proceed to pay
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default RightSubcriptionContainer;
