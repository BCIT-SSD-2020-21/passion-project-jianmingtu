import "./Navbar.css";
import avatar from "../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar, user }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <a href="#">Admin</a>
         <a href="#">PawsBlog</a>
          <a href="#">PawsStore</a>
        <a className="active_link" href="#">
          Lost & Found
        </a>
      </div>
      <div className="navbar__right">
        <a href="#">
          <span>{user && user.username}</span>
        </a>
        <a href="#">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        <a href="#!">
          <img width="30" src={(user && user.avatar)?user.avatar:avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
