import "./App.css";
import Badge from "./components/Badge/index";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import "./utils/variables.css";
import "./components/Badge/badge.css";
import "./components/Banner/banner.css";
import "./components/Card/card.css";

function App() {
  const badgeColorSchemes = [
    "grey",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];
  const bannerVariants = ["success", "warning", "error", "neutral"];

  function mapBadges(shape) {
    return badgeColorSchemes.map((color) => {
      return (
        <Badge className={`badge ${shape} ${color}`}>
          <Badge.Text>
            <h1 className="badgeText">Badge</h1>
          </Badge.Text>
        </Badge>
      );
    });
  }

  function mapBanners(type) {
    return bannerVariants.map((variant) => {
      return (
        <Banner className="banner" variant={variant} type={type}>
          <Banner.Title className="bannerTitle">
            Lorem ipsum dolor sit.
          </Banner.Title>
          {type === "multiline" && (
            <Banner.Text className="bannerText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti, ipsa.
            </Banner.Text>
          )}
        </Banner>
      );
    });
  }

  return (
    <>
      <div className="appContainer">
        <section className="badgeSection">
          <h2 className="sectionTitle">Badges</h2>
          <div className="wrapper">
            <div className="squareBadges">
              <h4>Square</h4>
              {mapBadges("square")}
            </div>
            <div className="pillBadges">
              <h4>Pill</h4>
              {mapBadges("pill")}
            </div>
          </div>
        </section>
        <section className="bannerSection">
          <h2 className="sectionTitle">Banners</h2>
          <div className="wrapper">
            <div className="singleLineBanners">{mapBanners("single")}</div>
            <div className="multiLineBanners">{mapBanners("multiline")}</div>
          </div>
        </section>
        <section className="cardSection">
          <h2 className="sectionTitle">Card</h2>
            <Card className="card">
              <Card.Title className="cardTitle">Easy Deployment</Card.Title>
              <Card.Text className="cardText">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
                ipsam.
              </Card.Text>
            </Card>
        </section>
      </div>
    </>
  );
}

export default App;
