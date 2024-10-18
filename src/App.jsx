import { useState } from "react";
import "./App.css";
import Badge from "./components/Badge/index";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index"

function App() {
  return (
    <>
      <div className="appContainer">
        <Badge>
          <Badge.Title>Badge Title</Badge.Title>
          <Badge.Text>Badge Text</Badge.Text>
        </Badge>
        <Banner>
          <Banner.Title>Banner Title</Banner.Title>
          <Banner.Text>Banner Text</Banner.Text>
        </Banner>
        <Card>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card Text</Card.Text>
        </Card>
      </div>
    </>
  );
}

export default App;
