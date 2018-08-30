import React, { Component } from "react";
import Page from "../Page/Page";
import Nav from "../Nav/Nav";

class User extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Page>
                <Nav />
                <h1>User account</h1>
                <a href="./user/info">Edit profile</a>
                <a href="./logout">Logout</a>
            </Page>
        );
    }

}

export default User;