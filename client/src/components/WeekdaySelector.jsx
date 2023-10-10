import React from "react";
import { Box, Chip } from "@mui/material";

const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const WeekdaySelector = ({ selectedDays, setSelectedDays }) => {
  const handleDayClick = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <Box style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
      {daysOfWeek.map((day) => (
        <Chip
          key={day}
          label={day}
          onClick={() => handleDayClick(day)}
          variant={selectedDays.includes(day) ? "filled" : "outlined"}
          color="primary"
          style={{
            fontSize: "8px",
            margin: "5px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        />
      ))}
    </Box>
  );
};

export default WeekdaySelector;
