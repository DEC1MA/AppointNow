import { Box, Typography } from "@mui/material";
import React from "react";

const TimeSelector = ({ selectedTime, setSelectedTime }) => {
  const tg = window.Telegram.WebApp;
  const tgColorScheme = tg.colorScheme;

  const textColor = tgColorScheme === "dark" ? "white" : "black";

  const generateTimes = () => {
    const startTime = 8 * 60; // 8:00 AM in minutes
    const endTime = 23 * 60; // 11:00 PM in minutes
    const interval = 30; // 30 minutes

    const timesArray = [];

    for (let i = startTime; i <= endTime; i += interval) {
      const hours = Math.floor(i / 60);
      const minutes = i % 60;
      const formattedTime = `${hours}:${minutes === 0 ? "00" : minutes}`;
      timesArray.push(formattedTime);
    }

    return timesArray;
  };

  const times = generateTimes();

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <Box mb={8}>
      <Typography variant="h6" mb={1} color={textColor}>
        Choose a Time:
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {times.map((time, index) => (
          <button
            key={index}
            style={{
              border: "none",
              backgroundColor: selectedTime === time ? "#304fff" : "#8c9eff", // Highlight selected time
              color: "#fff",
              fontSize: "12px",
              width: "50px",
              height: "50px",
              borderRadius: "50%", // Make the buttons circular
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => handleTimeClick(time)} // Add onClick handler
          >
            {time}
          </button>
        ))}
      </div>
    </Box>
  );
};

export default TimeSelector;
