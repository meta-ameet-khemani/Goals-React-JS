import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Users from "./users";

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/users" component={Users}></Route>
                </Switch>
            </Router>
        )
    }
}