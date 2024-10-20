import "./App.css";
import Badge from "./components/Badge/index";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import Testimonial from "./components/Testimonial/index";
import "./utils/variables.css";
import "./components/Badge/badge.css";
import "./components/Banner/banner.css";
import "./components/Card/card.css";
import testimonialImg from "./assets/testimonialImg.png";

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
        <section className="testimonialSection">
          <h2 className="sectionTitle">Testimonial</h2>
          <Testimonial className="testimonial testimonial-withPicture">
            <div className="wrapper">
              <img
                src={testimonialImg}
                alt="Image of Person"
                className="testimonialImg"
              />
              <div className="flex-col">
                <Testimonial.Text className="testimonialText">
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellendus consequatur distinctio minima optio odit
                  dignissimos."
                </Testimonial.Text>
                <Testimonial.Name className="testimonialName">
                  <p>Alice Lee</p>
                  <p>CTO</p>
                </Testimonial.Name>
              </div>
            </div>
          </Testimonial>
        </section>
      </div>
    </>
  );
}

export default App;
