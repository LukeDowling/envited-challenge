import "./event.css";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Event() {
  return (
    <div className="Event">
      <div id="item-container">
        <img
          id="cake-image"
          alt="birthday cake"
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220923%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220923T032857Z&X-Amz-Expires=86400&X-Amz-Signature=fc717afe83dc27f6c898e2f45f37bc2bb137fc067f7adc6cb72d4aaa6a9039a0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
        />
        <div id="info-container">
          <h1 id="event-name">Birthday Bash</h1>
          <p id="host-name">
            Hosted by <span class="bold-span">Elysia</span>
          </p>
          <div id="date-container">
            <div class="left-container">
              <CalendarMonthOutlinedIcon />
              <div id="date-text">
                <p id="start-date">18 August 6:00PM</p>
                <p id="end-date">
                  to <span class="bold-span">19 August 1:00PM</span> UTC +10
                </p>
              </div>
            </div>
            <p class="arrow">
              <ArrowForwardIosIcon />
            </p>
          </div>
          <div id="location-container">
            <div class="left-container">
              <LocationOnOutlinedIcon />
              <div id="location-text">
                <p id="street-name">Street name</p>
                <p id="street-additional">Suburb, State, Postcode</p>
              </div>
            </div>
            <p class="arrow">
              <ArrowForwardIosIcon />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
