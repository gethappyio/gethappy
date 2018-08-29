import React, { Component } from "react";

const AuthContext = React.createContext();

export class AuthProvider extends Component {

    constructor() {
        super();
    }

    render() {
        const {children} = this.props;
        return (
            <AuthContext.Provider
                value={{
                    isAuthenticated: false,
                    isTrue: true
                }}>
                {children}
            </AuthContext.Provider>
        );
    }
}

export const AuthConsumer = AuthContext.Consumer;