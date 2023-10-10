import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@mui/material";

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [selectedDateTemp, setSelectedDateTemp] = useState(null);

  const handleDateChange = (newDate) => {
    try {
      setSelectedDateTemp(newDate);

      setSelectedDate(newDate.toString());
    } catch {
      return;
    }
  };
  return (
    <Box bgcolor={"white"} borderRadius={10} mb={2}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value={selectedDateTemp} onChange={handleDateChange} />
      </LocalizationProvider>
    </Box>
  );
};

export default Calendar;
