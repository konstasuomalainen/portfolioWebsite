import { useState } from "react";
import CVPicture from "../assets/KonstaSuomalainenEnglishCV.png";
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
              Resume
            </button>

            <button className="logo-container-support">About Me</button>
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
