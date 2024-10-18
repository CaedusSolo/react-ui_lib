import { useState } from "react";
import "./App.css";
import Badge from "./components/Badge/index";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import "./utils/variables.css";
import "./components/Badge/badge.css";
import "./components/Banner/banner.css";
import "./components/Card/card.css"

function App() {
  return (
    <>
      <div className="appContainer">
        <Badge className="badge square red">
          <Badge.Text>
            <h1 className="badgeText">Badge Text</h1>
          </Badge.Text>
        </Badge>
        <Badge className="badge pill red">
          <Badge.Text>
            <h1 className="badgeText">Badge Text</h1>
          </Badge.Text>
        </Badge>
        <Banner className="banner success">
          <Banner.Title className="bannerTitle">Banner Title</Banner.Title>
        </Banner>
        <Banner className="banner warning multiline">
          <Banner.Title className="bannerTitle">Banner Title</Banner.Title>
          <Banner.Text className='bannerText'>Banner Text</Banner.Text>
        </Banner>
        <Card className="card success">
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card Text</Card.Text>
        </Card>
      </div>
    </>
  );
}

export default App;