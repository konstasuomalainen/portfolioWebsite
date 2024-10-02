import LPRDataPhoto from "../assets/LPRDataPhoto.jpg";

const LPRDataCard = () => {
  return (
    <>
      <div className="message-card">
        <div className="card-photo-container">
          <a
            className="card-photo"
            href="https://frontendforlprdata.web.app/"
            target="_blank"
          >
            <img className="card-photo" src={LPRDataPhoto} alt="messagePhoto" />
          </a>
        </div>
        <div className="card-content">
          <div className="card-title">
            <p className="card-title-text">
              Lappeenranta City Purchasing Receipts Viewer
            </p>
            <p className="card-title-text-info">
              React + Python · <span className="card-year">2024</span>
            </p>
          </div>
          <div className="card-description">
            <p className="card-description-text">
              API · React · Front-End · TypeScript · Python · Back-End
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LPRDataCard;
