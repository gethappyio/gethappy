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
                <ul>
                    <li><a href="/user/info">Edit profile</a></li>
                    <li><a href="/user/orders">Orders</a></li>
                    <li><a href="/user/addresses">Addresses</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </Page>
        );
    }

}

export default User;