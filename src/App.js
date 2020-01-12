import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Switch, Route, Link } from "react-router-dom";

//pages
import ManagerPage from './pages/manager/manager.component'
import HomePage from "./pages/home/home.component";
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <header>
              <div className="site-title">
                <Link to="/">Marks amanger</Link>
              </div>
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </header>
            <Switch>
              <Route  path='/manager' component={ManagerPage}></Route>
              <Route excat path='/' component={HomePage}></Route>
            </Switch>
          </div>
        )
    }
}

export default App;
