import { Button, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ScheduleList from "./ScheduleList";
import Calendar from "./Calendar";

const ManageSchedules = () => {
  const [showMonthView, setShowMonthView] = useState(false);
  const navigate = useNavigate();
  return (
    <Stack>
      <Stack direction={"row"}>
        <IconButton
          onClick={() => navigate("/")}
          aria-label="delete"
          size="large"
        >
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
      </Stack>
      <Button onClick={() => setShowMonthView(!showMonthView)}>
        {showMonthView ? "Today Schedule" : "Month View"}
      </Button>
      {!showMonthView && <ScheduleList />}
      {showMonthView && <Calendar />}
    </Stack>
  );
};

export default ManageSchedules;
