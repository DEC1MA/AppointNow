import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import StringAvatar from "./StringAvatar";

const SingleBusinessSearch = ({
  info,
  setShowSingleBusiness,
  setSingleBusiness,
  showSingleBusiness,
}) => {
  return (
    <div
      onClick={() => {
        setShowSingleBusiness(!showSingleBusiness);
        setSingleBusiness(info);
      }}
      style={{ cursor: "pointer" }}
    >
      <Box mx={3} mt={2} bgcolor={"white"} borderRadius={5}>
        <Stack direction={"row"} p={1} alignItems={"center"}>
          <StringAvatar text={info.name} />
          <Stack alignItems={"start"} px={1}>
            <Typography>{info && info.name}</Typography>
            <Typography>{info && info.location}</Typography>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default SingleBusinessSearch;
