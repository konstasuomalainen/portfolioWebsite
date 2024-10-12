import IntroductionBox from "../components/IntroductionBox";
import LunchBotCard from "../components/LunchBotCard";
import MessasingAppCard from "../components/MessasingAppCard";
import FirstWebsiteCard from "../components/FirstWebsiteCard";
import ReservationAppCard from "../components/ReservationAppCard";
import LPRDataCard from "../components/LPRDataCard";
import Nav from "../components/Nav";

import "../index.css";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

const FrontPage = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <>
      <div className="loadingScreen">
        <p className="name-intro">Konsta Suomalainen</p>
      </div>
      <Nav></Nav>
      <div className="container">
        <video
          className="loadingVideo"
          preload="auto"
          autoPlay
          muted
          loop
        ></video>
        <section className="box-container">
          <motion.div ref={ref} className="box" style={{ x, y }} />
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
