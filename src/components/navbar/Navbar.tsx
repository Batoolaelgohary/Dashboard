import { useNavigate } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="lamadmin" />
        <span>Lamadmin</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="noavatar.png" alt="" />
          <span>Jane</span>
        </div>
        <img src="settings.svg" alt="" className="icon" />
        <span
          className="logout"
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Log out
        </span>
      </div>
    </div>
  );
};

export default Navbar;