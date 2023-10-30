import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
} from "@mui/material";
import { AssignmentRounded, Business, Search } from "@mui/icons-material";
import ForMe from "../components/ForMe";
import SwipeableViews from "react-swipeable-views";
import SearchPage from "./SearchPage";
import MyBusinessPage from "./MyBusinessPage";
import { connectTelegram } from "../utilities/user";
import { createEvent, searchEvent } from "../utilities/event";

const Home = () => {
  const tg = window.Telegram.WebApp;
  const tgColorScheme = tg.colorScheme;
  const tgBgColor = tg.backgroundColor;

  const queryString = tg.initData;
  const queryParams = new URLSearchParams(queryString);

  const userJson = queryParams.get("user");
  const user = JSON.parse(decodeURIComponent(userJson));

  const token = user && user.id;
  // const token = "1111";
  // const token = "2222";

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventsList, setEventsList] = useState(null);

  const eventsData = [];

  function addEvent(name, date, time) {
    const dateObj = new Date(date);
    const timeParts = time.split(":");
    dateObj.setHours(parseInt(timeParts[0], 10));
    dateObj.setMinutes(parseInt(timeParts[1], 10));
    dateObj.setSeconds(0);

    // Convert the Date object to a timestamp (number)
    const timestamp = dateObj.getTime();

    createEvent(name, timestamp, token);

    const newBusiness = { name, date, time };
    eventsList.push(newBusiness);
  }

  useEffect(() => {
    // user && connectTelegram(user.id, user.first_name, user.last_name);
    // connectTelegram("1111", "Test", "1");
    connectTelegram("2222", "Test", "2");
    searchEvent("all", setEventsList, token);
    // setEventsList(eventsData);
  }, []);

  return (
    <Box
      style={{
        height: "100vh",
        position: "relative",
        backgroundColor: tgBgColor ? tgBgColor : "#eee",
      }}
    >
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
        containerStyle={{ height: "100%" }}
        slideStyle={{ height: "100%", overflowY: "hidden" }}
        style={{ height: "100%" }}
      >
        <ForMe eventsList={eventsList} />

        <SearchPage
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          addEvent={addEvent}
          eventsList={eventsList}
        />
        <MyBusinessPage />
      </SwipeableViews>

      <AppBar
        position="fixed"
        style={{
          backgroundColor: tgBgColor ?? "#eee",

          top: "auto",
          bottom: 0,
          left: 0,
          borderRadius: "0px 0px 0px 0px",
        }}
      >
        <Toolbar style={{ height: "100%" }}>
          <BottomNavigation
            // showLabels
            style={{
              width: "100%",
              backgroundColor: "transparent",
              height: "100%",
            }}
            value={value}
            onChange={handleChange}
          >
            <BottomNavigationAction
              label="Appointments"
              style={{
                color: tgColorScheme === "dark" ? "#8c9eff" : "#304fff",
              }}
              value={0}
              icon={<AssignmentRounded />}
            />
            <BottomNavigationAction
              label="Search"
              style={{
                color: tgColorScheme === "dark" ? "#8c9eff" : "#304fff",
              }}
              value={1}
              icon={<Search />}
            />
            <BottomNavigationAction
              label="Booking"
              style={{
                color: tgColorScheme === "dark" ? "#8c9eff" : "#304fff",
              }}
              value={2}
              icon={<Business />}
            />
          </BottomNavigation>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Home;
