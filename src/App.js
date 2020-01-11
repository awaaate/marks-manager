import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";

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
            <Switch>
              <Route  path='/manager' component={ManagerPage}></Route>
              <Route excat path='/' component={HomePage}></Route>
            </Switch>
          </div>
        )
    }
}

export default App;
