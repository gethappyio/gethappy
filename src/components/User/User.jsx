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
            </Page>
        );
    }

}

export default User;