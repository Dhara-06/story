import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import Expo from "../assets/expo.jpg";
import Sympo from "../assets/sympo.jpg"
import Prize from "../assets/prize.jpg";
import Together from "../assets/together.jpg"
import Selfie from "../assets/selfie.jpg"
import Possessive1 from "../assets/possessive1.jpg"
import lastmeet from "../assets/cry.jpg"
import Suddenmeet from "../assets/suddenmeet.jpg"
import Hoodie from "../assets/Hisshirt.jpg"
import Sunglasses from "../assets/sunglasses.jpg"
import Sunglase from "../assets/sunglase.jpg"
import Phone from "../assets/phone.jpg"

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
              src={Selfie}   // ✅ use imported image
              alt="selfie"
              className="comic-img"
            />
            <div className="speech-bubble">It took a while, but we finally clicked our first selfie 😍📸</div>
          </div>
        </Col>

        {/* Panel 2 */}
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Expo}
              alt="Symposium"
              className="comic-img"
            />
            <div className="thought-bubble">
             You supported me and my friends during the project expo 💫💖
            </div>
          </div>
        </Col>

        {/* Panel 3 */}
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Sympo}
              alt="Laugh Together"
              className="comic-img"
            />
            <div className="speech-bubble">Also went to the symposium… and you got shocked spotting me in class 🥰✨</div>
          </div>
        </Col>

        {/* Panel 4 */}
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Together}
              alt="prize"
              className="comic-img"
            />
            <div className="thought-bubble">During the empty-class symposium moment, our selfie made me so happy 😄💕</div>
          </div>
        </Col>

        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Prize}
              alt="Laugh Together"
              className="comic-img"
            />
            <div className="speech-bubble">We got a prize for our project… I was so happy, even if you didn’t know 😄🏆</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Possessive1}
              alt="Possessiveness"
              className="comic-img"
            />
            <div className="thought-bubble">You get possessive when I chat with others… that’s what makes it adorable 🥰✨</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={lastmeet}
              alt="last meet"
              className="comic-img"
            />
            <div className="speech-bubble">Neither of us knew what to do… just teary-eyed together on the last day 😢💕</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Suddenmeet}
              alt="Sudden meet"
              className="comic-img"
            />
            <div className="thought-bubble">After college, your surprise visit left me shocked… and happy 🥰💖</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Hoodie}
              alt="Hoodie"
              className="comic-img"
            />
            <div className="speech-bubble">Wore your hoodie on the class tour… couldn’t tell you how it made me feel 🥰💖</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Sunglasses}
              alt="sunglasses"
              className="comic-img"
            />
            <div className="thought-bubble">I thought hard and shopped around on the tour… sunglasses became the perfect gift 🥰🕶️</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Sunglase}
              alt="Sunglassess"
              className="comic-img"
            />
            <div className="speech-bubble">You wore the sunglasses I gifted… I couldn’t stop staring at you 💖✨</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Phone}
              alt="Phone"
              className="comic-img"
            />
            <div className="thought-bubble">Phone screen broke, so I asked you to replace it… met secretly at the bus stand 🥰✨</div>
          </div>
        </Col>
      </Row>
      <Button className="hitme-btn mt-4" onClick={() => navigate("/wishes")}>
        Go on, tap! 😄💖
      </Button>
    </Container>
  );
}

export default Memories;
