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
import Break from "../assets/phnbreak.jpg"
import Convey from "../assets/convey.jpg"
import Randomtalk from "../assets/randomtalk.jpg"
import Teach from "../assets/teach.jpg"

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
              src={Meet}
              alt="Laugh Together"
              className="comic-img"
            />
            <div className="speech-bubble">After a week of sneaky peeks, I finally saw you 😍💖</div>
          </div>
        </Col>

        {/* Panel 4 */}
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Hiii}
              alt="Meet Together"
              className="comic-img"
            />
            <div className="thought-bubble">On the same day, I just said hi… and you looked shocked 😅💖</div>
          </div>
        </Col>

        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Talk}
              alt="Laugh Together"
              className="comic-img"
            />
            <div className="speech-bubble">Then you came up and said hi… I was so shy and shocked 😅💖</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Chat}
              alt="First Talk"
              className="comic-img"
            />
            <div className="thought-bubble">With time, we grew comfy and our talks got deeper… 😇✨</div>
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
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Break}
              alt="Phone Break"
              className="comic-img"
            />
            <div className="speech-bubble">When my phone broke, my only fear was you forgetting me 😔</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Convey}
              alt="Convey him"
              className="comic-img"
            />
            <div className="thought-bubble">Couldn’t reach you… so I asked my friend to 😅✨</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Randomtalk}
              alt="Noticing You"
              className="comic-img"
            />
            <div className="speech-bubble">Even without calls, we made up for it in college by talking a lot 💕✨</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Teach}
              alt="First Call"
              className="comic-img"
            />
            <div className="thought-bubble">Our first study session was you helping me for my Tamil exam at night 📚💖</div>
          </div>
        </Col>
      </Row>

      {/* Hit Me Button */}
      <Button className="hitme-btn mt-4" onClick={() => navigate("/memories")}>
        Tap to unfold… 💖
      </Button>
    </Container>
  );
}

export default Story;
