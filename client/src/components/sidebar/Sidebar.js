import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { useHistory, Link, } from "react-router-dom"

const Sidebar = ({ sidebarOpen, closeSidebar, user, setUserFunc }) => {

    const history = useHistory()

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
          <Link to="/" exact>Dashboard</Link>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <Link to="/posts" exact>Search Paws</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <Link to="#">Contracts</Link>
        </div>

        {!!user && <h2>Add Your Paws</h2> }
        {!!user && 
            
            <div className="sidebar__link">
              <i className="fa fa-plus-circle"></i>
              <Link to="/newPost">Create</Link>
            </div>

        }

        <h2>Manage</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-circle"></i>
          <Link to="#">Profile</Link>
        </div>
        {!!user ?
          <div className="sidebar__logout">
            <i className="fa fa-sign-out"></i>
            <Link to="/signout">Log out</Link>
          </div> 
          :        
          <div className="sidebar__link">
            <i className="fa fa-sign-in"></i>
            <Link to="/login">Login</Link>
          </div>       
        }
      </div>
    </div>
 
  );
};

export default Sidebar;
