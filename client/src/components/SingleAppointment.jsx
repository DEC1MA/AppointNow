import {
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import React from "react";
import StringAvatar from "./StringAvatar";

const SingleAppointment = ({
  info,
  setShowSingleAppointment,
  showSingleAppointment,
  setSingleEvent,
}) => {
  const startTime = new Date(info.startTime);

  // Format the date and time using toLocaleString()
  const formattedDate = startTime.toLocaleString();

  return (
    <div
      onClick={() => {
        setShowSingleAppointment(!showSingleAppointment);
        setSingleEvent(info);
      }}
      style={{ cursor: "pointer" }}
    >
      <Box bgcolor={"white"} mt={1} borderRadius={5}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <StringAvatar
              text={
                info.business
                  ? info?.business?.name
                  : info?.user?.firstName + " " + info?.user?.lastName
              }
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              info.business
                ? info?.business?.name
                : info?.user?.firstName + " " + info?.user?.lastName
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
                {formattedDate}
              </React.Fragment>
            }
          />
        </ListItem>
      </Box>
    </div>
  );
};

export default SingleAppointment;
