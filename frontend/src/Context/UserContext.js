import React, { useState } from "react";

const UserContext = React.createContext();

const { Provider, Consumer } = UserContext

const UserProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
        rol: ""
    })

    const login = (user, token, rol) => {
        setAuth({
            user,
            token,
            rol
        })
        localStorage.setItem('token', JSON.stringify(token))
    }

    const logout = () => {
        setAuth({
            user: null,
            token: "",
            rol: null
        })
        localStorage.clear();
    }

    return (
        <Provider value={{ auth, login, logout }}>
            {children}
        </Provider>
    )
}

export { UserProvider, Consumer as UserConsumer, UserContext }