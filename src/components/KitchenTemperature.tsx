import KitchenPhoto from "../assets/giphy4.webp";

const KitchenTemperature = () => {
  return (
    <>
      <div className="message-card">
        <div className="card-photo-container">
          <a
            className="card-photo"
            href="https://frontendforlprdata.web.app/"
            target="_blank"
          >
            <img className="card-photo" src={KitchenPhoto} alt="KitchenPhoto" />
          </a>
        </div>
        <div className="card-content">
          <div className="card-title">
            <p className="card-title-text">App for Tracking Kitchen Temps</p>
            <p className="card-title-text-info">
              Role: Front-End · <span className="card-year">Ongoing</span>
            </p>
          </div>
          <div className="card-description">
            <p className="card-description-text">
              Full-Stack · Angular · SQL Server · Azure · Jira · C#
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KitchenTemperature;
