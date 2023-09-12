import { createContext, useState } from "react";
import { IAuthContext } from "../Common/DataTypes";

export const AuthContext = createContext<IAuthContext>(
    {
        token: "",
        setToken: () => { },
        userId: 0,
        setUserId: () => { },
        userName: "",
        setUserName: () => { },
        expireTimestamp: Date.now(),
        setExpireTimestamp: () => { }
    });

export const AuthProvider = ({ children }: any) => {
    const [token, setTokenState] = useState<string>(() => {
        return localStorage.getItem("token") || "";
    });

    const setToken = (newToken: string) => {
        setTokenState(newToken);
        localStorage.setItem("token", newToken);
    }

    const [userId, setUserIdState] = useState<number>(() => {
        return parseInt(localStorage.getItem("userId") || "0");
    });

    const setUserId = (newUserId: number) => {
        setUserIdState(newUserId);
        localStorage.setItem("userId", newUserId.toString());
    }

    const [userName, setUserNameState] = useState<string>(() => {
        return localStorage.getItem("userName") || "";
    });

    const setUserName = (userName: string) => {
        setUserNameState(userName);
        localStorage.setItem("userName", userName);
    }

    const [expireTimestamp, setExpireTimestampState] = useState<number>(() => {
        const date = new Date(localStorage.getItem("expireTimestamp") ?? Date.now()).getTime();
        return date;
    });

    const setExpireTimestamp = (newMilliseconds: number) => {
        setExpireTimestampState(newMilliseconds);
        localStorage.setItem("expireTimestamp", newMilliseconds.toString());
    }

    return (
        <AuthContext.Provider value={{
            token, setToken,
            userId, setUserId,
            userName, setUserName,
            expireTimestamp, setExpireTimestamp
        }} >
            {children}
        </AuthContext.Provider>
    )
}