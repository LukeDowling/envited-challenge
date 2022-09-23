import "./create.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function Create() {
  return (
    <div className="Create">
      <Stack
        sx={{
          width: "25ch",
          paddingBottom: "20px",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField label="Event Name" id="event-name" />
        <TextField label="Host Name" id="host-name" />
        <TextField label="Start Time" id="start-time" />
        <TextField label="End Time" id="end-time" />
        <TextField label="Location" id="location" />
        <TextField label="Event Photo" id="event-name" />
      </Stack>
      <Link to="/event">
        <button>Next</button>
      </Link>
    </div>
  );
}

export default Create;
