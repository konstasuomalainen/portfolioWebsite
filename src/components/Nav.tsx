import { useState } from "react";
import CVPicture from "../assets/CVKonstaSuomalainen2024.jpg";
import ResumeIcon from "../assets/resumeIcon.svg";
import AboutMeIcon from "../assets/aboutMeIcon.svg";
const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const enlargeImg = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="header">
        <nav>
          <div className="logo-container">
            <button onClick={enlargeImg} className="logo-container-learn">
              <img className="ResumeIcon" src={ResumeIcon} alt="ResumeIcon" />
              Resume
            </button>

            <button className="logo-container-support">
              <img
                className="AboutMeIcon"
                src={AboutMeIcon}
                alt="AboutMeIcon"
              />
              About Me
            </button>
          </div>
        </nav>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img
              className="enlarged-photo"
              src={CVPicture}
              alt="Enlarged Profile"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
