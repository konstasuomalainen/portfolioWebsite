import resevationAppPhoto from "../assets/reservationApp.jpg";

const ReservationAppCard = () => {
  return (
    <>
      <div className="message-card">
        <div className="card-photo-container">
          <a
            className="card-photo"
            href="https://react-c1aa9.web.app/"
            target="_blank"
          >
            <img
              style={{ height: "auto" }}
              className="card-photo"
              src={resevationAppPhoto}
              alt="messagePhoto"
            />
          </a>
        </div>
        <div className="card-content">
          <div className="card-title">
            <p className="card-title-text">Room ReservationApp</p>
            <p className="card-title-text-info">
              LAB University of Applied Sciences · Internship
            </p>
          </div>
          <div className="card-description">
            <p className="card-description-text">
              React · TypeScript · Kanban · Apache Cordova · Project Management
              · Planning
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationAppCard;
