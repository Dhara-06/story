import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import Sunglase from "../assets/sunglase.jpg"
import Phone from "../assets/phone.jpg"
import Support from "../assets/support.jpg"
import Diary from "../assets/diary1.jpg"
import Diary1 from "../assets/diary2.jpg"
import Travel from "../assets/travel1.jpg"
import Travel1 from "../assets/travel2.jpg"
import Forever from "../assets/forever.jpg"
function Fairytale() {
  const navigate = useNavigate();

  return (
    <Container className="page-container text-center">
      <h2 className="storybook-title">📖 Our Comic Story</h2>

      <Row className="mt-4 g-4">

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
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Support}
              alt="Support"
              className="comic-img"
            />
            <div className="speech-bubble">Whenever I feel lonely, you’re always there for me 🥺💖</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Diary}
              alt="Diary"
              className="comic-img"
            />
            <div className="thought-bubble">You handed me a diary and said ‘write about me’… but I was lost for words 🥺💕</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Diary1}
              alt="Diary"
              className="comic-img"
            />
            <div className="speech-bubble">Then you wrote a whole diary about me… and handed it to me with that smile 🥰📖</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Travel}
              alt="Travel"
              className="comic-img"
            />
            <div className="thought-bubble">During my internship, we finally got to travel side by side for the first time😄💖</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Travel1}
              alt="Travel"
              className="comic-img"
            />
            <div className="speech-bubble">Returning by train… finally right next to you 💖✨</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="comic-panel">
            <img
              src={Forever}
              alt="Forever"
              className="comic-img"
            />
            <div className="speech-bubble">More memories to come… 💕✨</div>
          </div>
        </Col>
      </Row>
      <Button className="hitme-btn mt-4" onClick={() => navigate("/wishes")}>
        Go on, tap! 😄💖
      </Button>
    </Container>
  );
}

export default Fairytale;
