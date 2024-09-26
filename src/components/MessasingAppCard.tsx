import constructionGif from "../assets/construction-worker.gif";

const MessasingAppCard = () => {
  return (
    <div className="message-card">
      <div className="card-photo-container">
        <a className="card-photo" href="" target="_blank">
          <img
            style={{ objectFit: "fill" }}
            className="card-photo"
            src={constructionGif}
            alt="messagePhoto"
          />
        </a>
      </div>
      <div className="card-content">
        <div className="card-title">
          <p className="card-title-text">Chat Messaging App</p>
          <p className="card-title-text-info">
            Passion/Learning Project (in progress) ·{" "}
            <span className="card-year">2024</span>
          </p>
        </div>
        <div className="card-description">
          <p className="card-description-text">React · TypeScript · MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default MessasingAppCard;
