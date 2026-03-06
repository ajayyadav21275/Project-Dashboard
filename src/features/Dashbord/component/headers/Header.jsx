import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return t("Wellcome");
      case "/inbox":
        return t("Inbox");
      case "/personal":
        return t("Personal");
      case "/job":
        return t("Job");
      default:
        return t("dashboard");
    }
  };


  return (
    <div className="d-flex justify-content-between align-items-center mb-4">

      <div>
        <h2 className="fw-bold">{getTitle()}</h2>
        <small className="text-muted">{t("dashboard")}</small>
      </div>

      <div>
        <button
          className="btn btn-outline-secondary me-2"
          onClick={() => i18n.changeLanguage("Hindi")}
        >
          Hindi
        </button>

        <button
          className="btn btn-outline-secondary me-3"
          onClick={() => i18n.changeLanguage("eng")}
        >
          English
        </button>


        <button type="button" className="btn btn-primary" onClick={() => navigate("/add-task")}>
          +Add Task
        </button>&nbsp;
        <button className="btn btn-primary" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>

    </div>
  );
}

export default Header;