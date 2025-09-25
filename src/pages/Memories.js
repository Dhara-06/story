import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Memories() {
  const navigate = useNavigate();

  return (
    <Container className="page-container text-center">
      <h2 className="storybook-title">📸 Our Memories</h2>
      <Row className="mt-4">
        <Col md={4}>
          <img
            src="https://via.placeholder.com/250"
            alt="Memory 1"
            className="memory-photo"
          />
        </Col>
        <Col md={4}>
          <img
            src="https://via.placeholder.com/250"
            alt="Memory 2"
            className="memory-photo"
          />
        </Col>
        <Col md={4}>
          <img
            src="https://via.placeholder.com/250"
            alt="Memory 3"
            className="memory-photo"
          />
        </Col>
      </Row>
      <Button className="hitme-btn mt-4" onClick={() => navigate("/wishes")}>
        Hit Me 💘
      </Button>
    </Container>
  );
}

export default Memories;
