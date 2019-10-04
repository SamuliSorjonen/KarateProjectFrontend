import React, {Component} from 'react';
import {NavBar} from "../components/navbars/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import History from "../components/history/History";
import Karatestyles from "../components/karatestyles/Karatestyles";
import Frontpage from "../components/Frontpage";
import StyleDetailFrames from "../components/karatestyles/StyleDetailFrames";
import User from "../components/users/User"
import EditUser from "../components/users/EditUser"
import EditStyle from "../components/karatestyles/EditStyle";

class Router1 extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={Frontpage}/>
                        <Route exact path="/history" component={History}/>
                        <Route exact path="/styles" component={Karatestyles}/>
                        <Route exact path="/user" component={User}/>
                        <Route exact path="/styles/:id" component={StyleDetailFrames}/>
                        <Route exact path="/editstyle/:id" component={EditStyle}/>
                        <Route exact path="/edituser/:id" component={EditUser}/>
                        <Route exact path="/login" component={Frontpage}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Router1;