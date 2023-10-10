import React, { useState } from "react";
import CalendarView from "./CalendarView";
import { Box, Button, Stack, Typography } from "@mui/material";

const ForMe = ({ eventsList }) => {
  const [showTasks, setShowTasks] = useState(true);
  const tg = window.Telegram.WebApp;
  const platform = tg.platform;

  const queryString = tg.initData;
  const queryParams = new URLSearchParams(queryString);
  const tgColorScheme = tg.colorScheme;
  const tgBgColor = tg.backgroundColor;
  const queryId = queryParams.get("query_id");
  const userJson = queryParams.get("user");
  const authDate = queryParams.get("auth_date");
  const hash = queryParams.get("hash");
  const user = JSON.parse(decodeURIComponent(userJson));

  return (
    <div
      style={{ height: "98%", overflowY: "auto", backgroundColor: tgBgColor }}
    >
      <Box>
        {eventsList?.length < 1 ? (
          <Box
            // bgcolor={tgBgColor}
            height={"100vh"}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Stack>
              <img width={"350"} src={"/images/1_alt.png"}></img>

              <Typography
                variant="h6"
                mt={2}
                color={tgColorScheme === "dark" ? "white" : "black"}
              >
                No Appointment Has Been Set Yet!
              </Typography>
            </Stack>
          </Box>
        ) : (
          <Box>
            <CalendarView eventsList={eventsList} title={"My Events"} />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default ForMe;
