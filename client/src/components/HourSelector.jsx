import React from "react";
import { Button, TextField, Grid, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const HourSelector = ({ times, setTimes }) => {
  const handleStartTimeChange = (index, value) => {
    const newTimes = [...times];
    newTimes[index].startTime = value;
    setTimes(newTimes);
  };

  const handleEndTimeChange = (index, value) => {
    const newTimes = [...times];
    newTimes[index].endTime = value;
    setTimes(newTimes);
  };

  const handleAddTime = () => {
    setTimes([...times, { startTime: "", endTime: "" }]);
  };

  const handleRemoveTime = (index) => {
    const newTimes = [...times];
    newTimes.splice(index, 1);
    setTimes(newTimes);
  };

  return (
    <div>
      {times.map((time, index) => (
        <Grid p={1} justifyContent={"center"} container spacing={2} key={index}>
          <Grid item>
            <TextField
              InputProps={{
                sx: {
                  backgroundColor: "#fff",
                  borderRadius: 5,
                  border: "none",
                },
              }}
              label="Start"
              variant="outlined"
              value={time.startTime}
              onChange={(e) => handleStartTimeChange(index, e.target.value)}
            />
          </Grid>

          <Grid item>
            <Box display={"flex"}>
              <TextField
                InputProps={{
                  sx: {
                    backgroundColor: "#fff",
                    borderRadius: 5,
                    border: "none",
                  },
                }}
                label="End"
                variant="outlined"
                value={time.endTime}
                onChange={(e) => handleEndTimeChange(index, e.target.value)}
              />
              {index > 0 && ( // Allow removal of time pairs except the first one
                <IconButton onClick={() => handleRemoveTime(index)}>
                  <DeleteIcon />
                </IconButton>
              )}
            </Box>
          </Grid>
        </Grid>
      ))}

      <Button
        mt={4}
        style={{ borderRadius: "20px", backgroundColor: "#546dff" }}
        variant="contained"
        color="primary"
        onClick={handleAddTime}
      >
        Add Time
      </Button>
    </div>
  );
};

export default HourSelector;
