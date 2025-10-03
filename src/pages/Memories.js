import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import Selfie from "../assets/photo.jpg";
import Teach1 from "../assets/teach2.jpg";
import Vedio from "../assets/vediocall.jpg"
import Crush from "../assets/crush.jpg"
import Window from "../assets/window.jpg"
import Dress from "../assets/samecolor.jpg"
import Sight from "../assets/sight.jpg"
import Gift from "../assets/gift.jpg"
import Gift1 from "../assets/gift1.jpg"
import Possessive from "../assets/possessive.jpg"
import Bracelet from "../assets/bracelet.jpg"
import Fight from "../assets/fight.jpg"

function Memories() {
  const navigate = useNavigate();

  return (
    <Container className="page-container text-center">
      <h2 className="storybook-title">📖 Our Comic Story</h2>

      <Row className="mt-4 g-4">
        {/* Panel 1 */}
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Crush}   // ✅ use imported image
              alt="Photo"
              className="comic-img"
            />
            <div className="speech-bubble">After a few days, you said I’m your crush too… I was shocked and my heartbeat went crazy😅💕</div>
          </div>
        </Col>

        {/* Panel 2 */}
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Selfie}
              alt="Teaching"
              className="comic-img"
            />
            <div className="thought-bubble">
             A few days later, I asked for a photo… You agreed… my friends made it happen 💫📸
            </div>
          </div>
        </Col>

        {/* Panel 3 */}
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Vedio}
              alt="Laugh Together"
              className="comic-img"
            />
            <div className="speech-bubble">Our first video call… you made sure I was okay 💫💕</div>
          </div>
        </Col>

        {/* Panel 4 */}
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Teach1}
              alt="Meet Together"
              className="comic-img"
            />
            <div className="thought-bubble">Daily coding classes with you… my new favorite routine 💖💻</div>
          </div>
        </Col>

        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Window}
              alt="Laugh Together"
              className="comic-img"
            />
            <div className="speech-bubble">Whenever you crossed my class, all I did was watch you 💕✨</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Dress}
              alt="Dressing same color"
              className="comic-img"
            />
            <div className="thought-bubble">We started wearing the same color to college… and our friends began teasing us 😄💖</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Sight}
              alt="Noticing Me"
              className="comic-img"
            />
            <div className="speech-bubble">You told me I got noticed… didn’t know it was real 🥰✨</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Gift}
              alt="Birthday gift"
              className="comic-img"
            />
            <div className="thought-bubble">Seeing the bag you got me for my birthday… I was over the moon 🥰💖</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Gift1}
              alt="My gift to you"
              className="comic-img"
            />
            <div className="speech-bubble">We chose earbuds for your birthday… after me struggling with what to get 🥰🎧</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Possessive}
              alt="Possessiveness"
              className="comic-img"
            />
            <div className="thought-bubble">I get possessive seeing you with other girls… yet I keep it to myself 🙂💕</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Fight}
              alt="First fight"
              className="comic-img"
            />
            <div className="thought-bubble">We had our first fight… reason escapes me, but memories stay 💫💕</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Bracelet}
              alt="Bracelet"
              className="comic-img"
            />
            <div className="speech-bubble">You shopped around just to bring me bracelets and earrings I love 💖✨</div>
          </div>
        </Col>
      </Row>
      <Button className="hitme-btn mt-4" onClick={() => navigate("/SpecialMoments")}>
        Keep tapping! 🐰💘
      </Button>
    </Container>
  );
}

export default Memories;
