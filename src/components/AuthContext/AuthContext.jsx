import React, { Component } from "react";

const AuthContext = React.createContext();

export class AuthProvider extends Component {

    constructor() {
        super();
        this.isAuthenticated = false;
    }

    authenticate(cb) {
        this.isAuthenticated = true;
        cb();
    }

    signout(cb) {
        this.isAuthenticated = false;
        cb();
    }

    render() {
        const {children} = this.props;
        return (
            <AuthContext.Provider
                value={{
                    isAuthenticated: this.isAuthenticated,
                    authenticate: this.authenticate,
                    signout: this.signout
                }}>
                {children}
            </AuthContext.Provider>
        );
    }
}

export const AuthConsumer = AuthContext.Consumer;