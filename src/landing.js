import "./landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="Landing">
      <h1 id="main-heading">
        Imagine if
        <div class="purple-style">Snapchat</div>
        had events.
      </h1>
      <p id="sub-heading">
        Easily host and share events with your friends across any social media.
      </p>
      <img
        id="landing-image"
        alt="event placeholder"
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220923%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220923T032750Z&X-Amz-Expires=86400&X-Amz-Signature=db57ef39a976a0494d868e29e36230bedf60103677e536b370c4af8346bef01f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
      />
      <Link to="/create">
        <button id="event-button">🎉 Create my event</button>
      </Link>
    </div>
  );
}

export default Landing;
