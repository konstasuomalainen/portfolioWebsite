import "../index.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="error-page-container">
        <div className="error-container">
          <p>Page not found 404</p>
          <button onClick={() => navigate("/")} className="back-home-button">
            Go back
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
