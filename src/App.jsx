import "./App.css";
import Badge from "./components/Badge/index";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import "./utils/variables.css";
import "./components/Badge/badge.css";
import "./components/Banner/banner.css";
import "./components/Card/card.css";

function App() {
  return (
    <>
      <div className="appContainer">
        <section className="badgeSection">
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
        </section>
        <section className="bannerSection">
          <Banner className="banner single success">
            <Banner.Title className="bannerTitle">Banner Title</Banner.Title>
          </Banner>
          <Banner className="banner success multiline">
            <Banner.Title className="bannerTitle">Banner Title</Banner.Title>
            <Banner.Text className="bannerText">Banner Text</Banner.Text>
          </Banner>
        </section>
        <section className="cardSection">
          <Card className="card">
            <Card.Title className="cardTitle">Card Title</Card.Title>
            <Card.Text className="cardText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, ipsam.</Card.Text>
          </Card>
        </section>
      </div>
    </>
  );
}

export default App;
