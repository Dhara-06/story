import React from "react";
import { Container, Button, Row, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles.css";

import firstmeet from "../assets/firstmeet.jpg";
import Insta from "../assets/insta.jpg";
import Chat from "../assets/chat.jpg"
import Meet from "../assets/meet.jpg"
import Hiii from "../assets/Hiii.jpg"
import Talk from "../assets/talk.jpg"
import Shight from "../assets/shight.jpg"
import Phone from "../assets/phonecall.jpg"

function Story() {
  const navigate = useNavigate();

  return (
    <Container className="page-container text-center">
      <h2 className="storybook-title">📖 Our Comic Story</h2>

      <Row className="mt-4 g-4">
        {/* Panel 1 */}
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={firstmeet}   // ✅ use imported image
              alt="First Meeting"
              className="comic-img"
            />
            <div className="speech-bubble">The first time I saw you… 💓 Thinking how cute you are… 😅</div>
          </div>
        </Col>

        {/* Panel 2 */}
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Insta}
              alt="Insta Request"
              className="comic-img"
            />
            <div className="thought-bubble">
              That first Insta request wasn’t random…😉💖
            </div>
          </div>
        </Col>

        {/* Panel 3 */}
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Chat}
              alt="Laugh Together"
              className="comic-img"
            />
            <div className="speech-bubble">With time, we grew comfy and our talks got deeper… 😇✨</div>
          </div>
        </Col>

        {/* Panel 4 */}
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Meet}
              alt="Meet Together"
              className="comic-img"
            />
            <div className="thought-bubble">After a week of sneaky peeks, I finally saw you 😍💖</div>
          </div>
        </Col>

        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Hiii}
              alt="Laugh Together"
              className="comic-img"
            />
            <div className="speech-bubble">On the same day, I just said hi… and you looked shocked 😅💖</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Talk}
              alt="First Talk"
              className="comic-img"
            />
            <div className="thought-bubble">Then you came up and said hi… I was so shy and shocked 😅💖</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Shight}
              alt="Noticing You"
              className="comic-img"
            />
            <div className="speech-bubble">Without you knowing, I’ve been noticing you a lot 💖👀</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Phone}
              alt="First Call"
              className="comic-img"
            />
            <div className="thought-bubble">Our first call… we just talked without knowing what to say 😂💖</div>
          </div>
        </Col>
      </Row>

      {/* Hit Me Button */}
      <Button className="hitme-btn mt-4" onClick={() => navigate("/memories")}>
        Hit Me 💘
      </Button>
    </Container>
  );
}

export default Story;
