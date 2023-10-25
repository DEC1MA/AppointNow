import { Business, Event, Search } from "@mui/icons-material";
import { Box, IconButton, InputBase, Paper, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import SingleBusinessSearch from "../components/SingleBusinessSearch";
import SingleAppointment from "../components/SingleAppointment";
import SingleEventPage from "./SingleEventPage";

import SingleBusinessPage from "./SingleBusinessPage";
import { searchBusiness } from "../utilities/business";

const SearchPage = ({
  selectedDate,
  selectedTime,
  setSelectedDate,
  setSelectedTime,
  addEvent,
  eventsList,
}) => {
  const tg = window.Telegram.WebApp;
  const tgColorScheme = tg.colorScheme;
  const [showSearch, setShowSearch] = useState(false);
  const [searchType, setSearchType] = useState("events");
  const [searchText, setSearchText] = useState("");

  const [showSingleAppointment, setShowSingleAppointment] = useState(false);
  const [SingleEvent, setSingleEvent] = useState("");

  const [showSingleBusiness, setShowSingleBusiness] = useState(false);
  const [SingleBusiness, setSingleBusiness] = useState("");
  const [businesses, setBusinesses] = useState([]);

  const searchHandler = (query, setBusinesses) => {
    searchBusiness(query, setBusinesses);
    setShowSearch(!showSearch);
  };

  const eventsData = [
    { name: "Dr Summer Smith", date: "July 9th | 10:00 PM" },
    { name: "Dr Morty Smith", date: "July 9th | 4:00 PM" },
    { name: "Dr Rick Sanchez", date: "July 7th | 2:00 PM" },
  ];

  // const businessData = [
  //   { name: "Dr Summer Smith", location: "California, US" },
  //   { name: "Dr Morty Smith", location: "Texas, US" },
  //   { name: "Dr Rick Sanchez", location: "London, UK" },
  //   { name: "Dr Bojack Horseman", location: "Tehran, Iran" },
  // ];

  return (
    <div style={{ height: "98%", overflowY: "auto" }}>
      <Box style={{ width: "100%", height: "100%", position: "relative" }}>
        <Tabs
          centered
          wrapped
          style={{ width: "100%", height: "auto" }}
          value={searchType}
          onChange={(event, newValue) => {
            setSearchType(newValue);
          }}
          variant="fullWidth"
        >
          <Tab
            sx={{ color: tgColorScheme === "dark" ? "white" : "black" }}
            value={"events"}
            label={"Appointments"}
            icon={<Event />}
            iconPosition="start"
          />
          <Tab
            sx={{ color: tgColorScheme === "dark" ? "white" : "black" }}
            value={"business"}
            label={"Booking"}
            icon={<Business />}
            iconPosition="start"
          />
        </Tabs>
        <Box
          style={{
            width: "100%",
            height: "auto",

            borderRadius: 0,
          }}
        >
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "calc(100% - 32px)",
            }}
            style={{
              marginTop: 16,
              marginLeft: 16,
              borderRadius: 20,
            }}
          >
            <InputBase
              sx={{ mx: 2, flex: 1 }}
              placeholder={
                searchType === "events"
                  ? "Search My Appointments"
                  : "Search For Businesses"
              }
              inputProps={{ "aria-label": "search google maps" }}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              value={searchText}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={() => {
                searchHandler(searchText, setBusinesses);
              }}
            >
              <Search color={"primary"} />
            </IconButton>
          </Paper>
          {showSearch && searchType !== "events" && (
            <>
              {showSingleBusiness ? (
                <SingleBusinessPage
                  setShowSingleBusiness={setShowSingleBusiness}
                  showSingleBusiness={showSingleBusiness}
                  setSingleBusiness={setSingleBusiness}
                  SingleBusiness={SingleBusiness}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  setSelectedDate={setSelectedDate}
                  setSelectedTime={setSelectedTime}
                  addEvent={addEvent}
                />
              ) : (
                <>
                  {businesses.map((item, index) => (
                    <SingleBusinessSearch
                      key={index}
                      info={item}
                      setShowSingleBusiness={setShowSingleBusiness}
                      showSingleBusiness={showSingleBusiness}
                      setSingleBusiness={setSingleBusiness}
                    />
                  ))}
                  {/* {businessData.map((item, index) => (
                    <SingleBusinessSearch
                      key={index}
                      info={businessData[index]}
                      setShowSingleBusiness={setShowSingleBusiness}
                      showSingleBusiness={showSingleBusiness}
                      setSingleBusiness={setSingleBusiness}
                    />
                  ))} */}
                </>
              )}
            </>
          )}
          {showSearch && searchType === "events" && (
            <Box p={2}>
              {showSingleAppointment ? (
                <SingleEventPage
                  showSingleAppointment={showSingleAppointment}
                  setShowSingleAppointment={setShowSingleAppointment}
                  SingleEvent={SingleEvent}
                  setSingleEvent={setSingleEvent}
                />
              ) : (
                <>
                  {eventsList.map((item, index) => (
                    <SingleAppointment
                      key={index}
                      info={eventsData[index]}
                      setShowSingleAppointment={setShowSingleAppointment}
                      showSingleAppointment={showSingleAppointment}
                      setSingleEvent={setSingleEvent}
                    />
                  ))}
                </>
              )}
            </Box>
          )}
          {!showSearch && <img width={"300"} src="/images/2_alt.png"></img>}
        </Box>
      </Box>
    </div>
  );
};

export default SearchPage;
