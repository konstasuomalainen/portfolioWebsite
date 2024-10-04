import IntroductionBox from "../components/IntroductionBox";
import LunchBotCard from "../components/LunchBotCard";
import MessasingAppCard from "../components/MessasingAppCard";
import FirstWebsiteCard from "../components/FirstWebsiteCard";
import ReservationAppCard from "../components/ReservationAppCard";
import LPRDataCard from "../components/LPRDataCard";
import Nav from "../components/Nav";
import backgroundVideo from "../assets/backgroundvideo.mp4";
import "../index.css";

const FrontPage = () => {
  return (
    <>
      <div className="loadingScreen">
        <video preload="auto" className="loadingVideo1" autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="name-intro">Konsta Suomalainen</p>
      </div>
      <Nav></Nav>
      <div className="container">
        <video className="loadingVideo" preload="auto" autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <section className="box-container">
          <div className="introduction-container">
            <IntroductionBox></IntroductionBox>
          </div>
          <div className="project-title">
            <p className="project-title-text">Projects &#128640;</p>
            <hr className="linebreak" />
          </div>
          <div className="card-container">
            <LPRDataCard></LPRDataCard>
            <MessasingAppCard></MessasingAppCard>
            <ReservationAppCard></ReservationAppCard>
            <LunchBotCard></LunchBotCard>
            <FirstWebsiteCard></FirstWebsiteCard>
          </div>
          <footer></footer>
        </section>
      </div>
    </>
  );
};

export default FrontPage;
