import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import LoginPage from "./layouts/LoginPage";
import SignOutPage from "./layouts/SignOutPage"
import NewPostPage from "./layouts/NewPostPage"

import * as token from './token'

const App = () => {
  const [user, _setUser] = useState(token.getDecodedToken(token.getToken()));


  const [sidebarOpen, setsidebarOpen] = useState(false);


    const setUser = (user) => {
      if(user === null) token.removeToken()
      _setUser(user)
  }


  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="app_container">
      <Router>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} user={user}  />
        <Switch>
            <Route path="/login">
              <LoginPage user={user} setUser={setUser} ></LoginPage>
            </Route>  
            <Route path="/signout">
              <SignOutPage setUser={setUser} />
            </Route>  
            <Route path="/newPost">
            <NewPostPage></NewPostPage>
            </Route>                            
            <Route path="/">
              <Main user={user}></Main>
            </Route>          
        </Switch>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} user={user} />
      </Router>
    </div>
  );
};

export default App;
