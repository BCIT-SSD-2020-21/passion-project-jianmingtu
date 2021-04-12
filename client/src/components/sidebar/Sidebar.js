import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar" style={{  background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('/images/sidebar.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: 'cover'  }}>
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Codersbite</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="#">Search Paws</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="#">Contracts</a>
        </div>
        <h2>Manage</h2>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="#">Profile</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="#">Login</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="#">Register</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
