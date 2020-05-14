import React, { Component } from 'react';
import Registration from "./auth/Registration";
import Login from "./auth/Login";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleSuccessfulAuth(data) {
        //needs update parent component
        this.props.handleLogin(data);
        //also, need to redirect the user
        this.props.history.push("./dashboard");
}   

    handleLogoutClick() {
        this.props.handleLogout();
    }



    render() {
        return (
            <div>
              <h1>Home</h1> 
              <h1>Status: {this.props.loggedInStatus}</h1>
              <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
              <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
              <button onClick= {() => this.handleLogoutClick()}>LogOut</button>
            </div>
        );
    }
}

