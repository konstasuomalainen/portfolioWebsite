import lunchBotPhoto from "../assets/lunchbot.jpg";

const LunchBotCard = () => {
  return (
    <>
      <div className="message-card">
        <div className="card-photo-container">
          <a
            className="card-photo"
            href="https://github.com/konstasuomalainen/LunchListBot-for-Slack"
            target="_blank"
          >
            <img
              style={{ objectPosition: "top", height: "200px" }}
              className="card-photo"
              src={lunchBotPhoto}
              alt="messagePhoto"
            />
          </a>
        </div>
        <div className="card-content">
          <div className="card-title">
            <p className="card-title-text">LunchBot</p>
            <p className="card-title-text-info">
              Python Lunch Menu-Bot for Local IT-firm
            </p>
          </div>
          <div className="card-description">
            <p className="card-description-text">
              Python WebScraping · Slack Integration · Kanban · Project Management
              · Planning
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LunchBotCard;
