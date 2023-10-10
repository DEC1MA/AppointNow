import React, { useState } from "react";
import Calendar from "./Calendar";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import ScheduleList from "../pages/ScheduleList";
import {
  Add,
  ArrowBack,
  AssignmentRounded,
  CalendarMonthRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CalendarView = ({ eventsList, title, showBack, showAdd }) => {
  const tg = window.Telegram.WebApp;
  const tgColorScheme = tg.colorScheme;
  const navigate = useNavigate();
  const [scrollTop, setScrollTop] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false);
  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  };
  return (
    <Box style={{ height: "100%" }} mb={5} mt={5}>
      <Box
        style={{
          padding: 16,
          marginTop: 10,

          overflowY: "auto",
          height: "100%",
        }}
        onScroll={handleScroll}
      >
        <Box display={"flex"} justifyContent={"end"}>
          <IconButton
            onClick={() => {
              setShowCalendar(!showCalendar);
            }}
          >
            {!showCalendar ? (
              <CalendarMonthRounded
                style={{
                  color: tgColorScheme === "dark" ? "white" : "black",
                }}
              />
            ) : (
              <AssignmentRounded
                style={{
                  color: tgColorScheme === "dark" ? "white" : "black",
                }}
              />
            )}
          </IconButton>
        </Box>

        {showCalendar ? (
          <>
            <Calendar />
          </>
        ) : (
          <ScheduleList eventsList={eventsList} />
        )}
      </Box>
      <Paper
        style={{
          backgroundColor: "transparent",
          paddingTop: 16,
          paddingBottom: 16,
          position: "absolute",
          top: 0,
          width: "100%",
          borderRadius: 0,
        }}
        elevation={scrollTop === 0 ? 0 : 4}
      >
        <Typography
          color={tgColorScheme === "dark" ? "white" : "black"}
          variant="h6"
        >
          {title}
        </Typography>
        {showBack ? (
          <IconButton
            color="secondary"
            style={{ position: "absolute", top: 16, left: 16 }}
            onClick={() => navigate("/")}
          >
            <ArrowBack />
          </IconButton>
        ) : null}
        {showAdd ? (
          <IconButton
            color="primary"
            style={{ position: "absolute", top: 16, right: 16 }}
          >
            <Add />
          </IconButton>
        ) : null}
      </Paper>
    </Box>
  );
};

export default CalendarView;
