import { AddCircleRounded, EditRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import CalendarView from "../components/CalendarView";
import CreateBusiness from "./CreateBusiness";
import ModifyBusiness from "./ModifyBusiness";
import { readBusiness } from "../utilities/business";
import { businessEvents } from "../utilities/event";

const MyBusinessPage = () => {
  const tg = window.Telegram.WebApp;
  const tgColorScheme = tg.colorScheme;

  const queryString = tg.initData;
  const queryParams = new URLSearchParams(queryString);

  const userJson = queryParams.get("user");
  const user = JSON.parse(decodeURIComponent(userJson));

  const token = user && user.id;
  // const token = "1111";
  // const token = "2222";

  const [businessesList, setBusinessesList] = useState([]);
  const [eventsList, setEventsList] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = React.useState(null);
  const [showAddBusiness, setShowAddBusiness] = useState(false);
  const [showEditBusiness, setShowEditBusiness] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [showBusinesses, setShowBusinesses] = useState(false);

  function addBusiness(name, location) {
    const newBusiness = { name, location, token };
    businessesList.push(newBusiness);
  }

  // const businessData = [];

  useEffect(() => {
    readBusiness(setBusinessesList, token);
    // setBusinessesList(businessData);
  }, []);

  useEffect(() => {
    setSelectedBusiness(businessesList[0]);
  }, [businessesList]);

  useEffect(() => {
    selectedBusiness &&
      businessEvents(selectedBusiness._id, setEventsList, token);
  }, [selectedBusiness]);

  return (
    <div style={{ height: "98%", overflowY: "auto" }}>
      {showEditBusiness ? (
        <ModifyBusiness
          setShowEditBusiness={setShowEditBusiness}
          selectedBusiness={selectedBusiness}
        />
      ) : (
        <Box width={"100%"}>
          {showAddBusiness ? (
            <CreateBusiness
              setShowAddBusiness={setShowAddBusiness}
              addBusiness={addBusiness}
            />
          ) : (
            <Box>
              {businessesList.length === 0 ? (
                <Box
                  // bgcolor={"white"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={"100vh"}
                >
                  <img width={"300"} src="/images/3_alt.png"></img>
                  <Typography
                    variant="h6"
                    color={tgColorScheme === "dark" ? "white" : "black"}
                  >
                    Create New Business and Manage Your Customer Appointments
                  </Typography>

                  <Box mt={5}>
                    <IconButton onClick={() => setShowAddBusiness(true)}>
                      <AddCircleRounded
                        style={{ fontSize: "50px", color: "#546dff" }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              ) : (
                <Box mt={5}>
                  <Box mx={2} display={"flex"} justifyContent={"space-between"}>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      {selectedBusiness?.name ?? "Select Business"}
                    </Button>
                    <IconButton
                      onClick={() => setShowEditBusiness(!showEditBusiness)}
                    >
                      <EditRounded
                        style={{
                          color: tgColorScheme === "dark" ? "white" : "black",
                        }}
                      />
                    </IconButton>
                  </Box>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {businessesList.map((business, index) => (
                      <MenuItem
                        key={index}
                        onClick={() => {
                          setSelectedBusiness(business);
                          handleClose();
                        }}
                      >
                        {business.name}
                      </MenuItem>
                    ))}
                    <Divider />
                    <MenuItem
                      onClick={() => {
                        // navigate("/create-business");
                        setShowAddBusiness(!showAddBusiness);

                        handleClose();
                      }}
                    >
                      Add New Business
                    </MenuItem>
                  </Menu>
                  <CalendarView eventsList={eventsList} />
                </Box>
              )}
            </Box>
          )}
        </Box>
      )}
    </div>
  );
};

export default MyBusinessPage;
