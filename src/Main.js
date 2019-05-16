import React, {Component } from 'react';
import {Route, NaLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Male from "./Male";
import Female from "./Female";

class Main extends Component {
    render(){
        return (
            <HashRouter>
                <div>
                    <h1 className="title">Fetching Data Api</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home<NavLink></li>
                        <li><NavLink exact to="/male">Male<NavLink></li>
                        <li><NavLink exact to="/female">Female<NavLink></li>
                    </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/male" component={Male}/>
                    <Route exact path="/female" component={Female}/>
                </div>
                </div>
                </HashRouter>
        );
    }
}


export default Main;
