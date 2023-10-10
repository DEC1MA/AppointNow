import * as React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import SingleEventPage from "./SingleEventPage";
import SingleAppointment from "../components/SingleAppointment";

export default function ScheduleList({ eventsList }) {
  const [showSingleAppointment, setShowSingleAppointment] = useState(false);
  const [SingleEvent, setSingleEvent] = useState("");

  return (
    <Box>
      {showSingleAppointment ? (
        <SingleEventPage
          showSingleAppointment={showSingleAppointment}
          setShowSingleAppointment={setShowSingleAppointment}
          SingleEvent={SingleEvent}
          setSingleEvent={setSingleEvent}
        />
      ) : (
        <>
          {eventsList?.map((item, index) => (
            <SingleAppointment
              key={index}
              info={eventsList[index]}
              setShowSingleAppointment={setShowSingleAppointment}
              showSingleAppointment={showSingleAppointment}
              setSingleEvent={setSingleEvent}
            />
          ))}
        </>
      )}
    </Box>
  );
}
