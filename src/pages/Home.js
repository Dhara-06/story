import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

function Home() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="storybook-title mb-4">For My Azhaga 💖</h1>
      <p className="storybook-subtitle">A little fairytale of us...</p>
      <Button className="storybook-btn mt-4" onClick={() => navigate("/story")}>
        Open My Storybook 💝
      </Button>
    </Container>
  );
}

export default Home;
