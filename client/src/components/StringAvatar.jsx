import React from "react";
import Avatar from "@mui/material/Avatar";

const StringAvatar = ({ text }) => {
  const words = text.split(" ");

  const initials =
    words.length >= 2
      ? words[0][0].toUpperCase() + words[words.length - 1][0].toUpperCase()
      : "??";

  return <Avatar sx={{ backgroundColor: "#546dff" }}>{initials}</Avatar>;
};

export default StringAvatar;
