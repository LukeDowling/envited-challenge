import "./create.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function Create() {
  return (
    <div className="Create">
      <div id="create-event-container">
        <h1 id="create-title">Create your event:</h1>
        <Stack
          sx={{
            paddingBottom: "20px",
          }}
          spacing={1}
        >
          <TextField label="Event Name" id="event-name" />
          <TextField label="Host Name" id="host-name" />
          <TextField label="Start Time" id="start-time" />
          <TextField label="End Time" id="end-time" />
          <TextField label="Location" id="location" />
          <div>
            <label id="photo-label" for="event-photo">
              Upload Event Photo:
            </label>
            <input id="event-photo" type="file" />
          </div>
        </Stack>
        <Link to="/event">
          <button id="next-button">Next</button>
        </Link>
      </div>
    </div>
  );
}

export default Create;
