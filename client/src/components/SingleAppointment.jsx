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
            <StringAvatar text={info.name} />
          </ListItemAvatar>
          <ListItemText
            primary={info.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
                {info.date} {info.time}
              </React.Fragment>
            }
          />
        </ListItem>
      </Box>
    </div>
  );
};

export default SingleAppointment;
