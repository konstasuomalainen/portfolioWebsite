import firstWebsitePhoto from "../assets/first_website.jpg";

const FirstWebsiteCard = () => {
  return (
    <>
      <div className="message-card">
        <div className="card-photo-container">
          <a
            className="card-photo"
            href="https://konstasuomalainen.github.io/angularprojektit/news"
            target="_blank"
          >
            <img
              className="card-photo"
              src={firstWebsitePhoto}
              alt="messagePhoto"
            />
          </a>
        </div>
        <div className="card-content">
          <div className="card-title">
            <p className="card-title-text">First Website</p>
            <p className="card-title-text-info">Angular Project</p>
          </div>
          <div className="card-description">
            <p className="card-description-text">
              Git · API · Angular · Web Development · AngularJS · Front-End
              Development · TypeScript
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstWebsiteCard;
