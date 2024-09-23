import IntroductionBox from "../components/IntroductionBox";
import LunchBotCard from "../components/LunchBotCard";
import MessasingAppCard from "../components/MessasingAppCard";
import FirstWebsiteCard from "../components/FirstWebsiteCard";
import ReservationAppCard from "../components/ReservationAppCard";
import "../index.css";
const FrontPage = () => {
  return (
    <>
      <div className="container">
        <section className="box-container">
          <div className="introduction-container">
            <IntroductionBox></IntroductionBox>
          </div>
          <div className="project-title">
            <p className="project-title-text">Projects &#128640;</p>
            <hr className="linebreak" />
          </div>
          <div className="card-container">
            <MessasingAppCard></MessasingAppCard>
            <ReservationAppCard></ReservationAppCard>
            <LunchBotCard></LunchBotCard>
            <FirstWebsiteCard></FirstWebsiteCard>
          </div>
        </section>
      </div>
    </>
  );
};

export default FrontPage;
