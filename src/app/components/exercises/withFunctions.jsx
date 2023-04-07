import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => () => {
    const isAuth = localStorage.getItem("auth");
    const onLogin = () => {
        console.log("Токен добавлен");
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        console.log("Токен удалён");
        localStorage.removeItem("auth");
    };
    return (
        <CardWrapper>
            <Component isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut} />
        </CardWrapper>
    );
};

export default withFunctions;
