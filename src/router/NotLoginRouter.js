import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NotLogInNavbar} from "../components/navbars/NotLogInNavbar";
import History from "../components/history/History";
import Frontpage from "../components/Frontpage";
import Karatestyles from "../components/karatestyles/Karatestyles";
import Login from "../components/loginandsignin/Login";
import Signin from "../components/loginandsignin/Signin";
import StyleDetailFrames from "../components/karatestyles/StyleDetailFrames";

class NotLoginRouter extends Component {
    render() {
        return (
            <div>
               <Router>
                   <NotLogInNavbar/>
                   <Switch>
                       <Route exact path="/" component={Frontpage}/>
                       <Route exact path="/history" component={History}/>
                       <Route exact path="/styles" component={Karatestyles}/>
                       <Route exact path="/login" component={Login}/>
                       <Route exact path="/signin" component={Signin}/>
                       <Route exact path="/styles/:id" component={StyleDetailFrames}/>
                   </Switch>
               </Router>
            </div>
        );
    }
}

export default NotLoginRouter;