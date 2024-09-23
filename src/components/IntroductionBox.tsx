import { useState } from "react";

const IntroductionBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const enlargeImg = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="introduction">
        <div className="introduction-box">
          <div className="profile">
            <div className="profile-photo">
              <img
                className="photo"
                onClick={enlargeImg}
                src="src\assets\2234.jpg"
                alt=""
              />
            </div>
            <div className="profile-name">
              <p className="name">Konsta Suomalainen</p>
              <p className="name-text">
                Student @LAB & Aspiring Full-Stack developer
              </p>
            </div>
          </div>
          <div className="profile-text">
            <p className="profile-bio">Currently looking for intership.</p>
            <p className="profile-bio-email">
              Email me @ konsta17401@gmail.com
            </p>
          </div>
        </div>
        <div className="socials-box">
          <a
            className="socials"
            target="_blank"
            href="https://www.linkedin.com/in/konsta-suomalainen-0961a7263/"
          >
            <img
              className="svg"
              src="src/assets/iconmonstr-linkedin-3.svg"
              alt=""
            />
          </a>
          <a
            className="socials"
            target="_blank"
            href="https://github.com/konstasuomalainen"
          >
            <img
              className="svg"
              src="src/assets/iconmonstr-github-1.svg"
              alt=""
            />
          </a>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img
              className="enlarged-photo"
              src="src\assets\2234.jpg"
              alt="Enlarged Profile"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default IntroductionBox;
