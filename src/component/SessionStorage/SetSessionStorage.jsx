import React from "react";

const SetSessionStorage = () => {
    sessionStorage.setItem("name", "namdul lama");
    sessionStorage.setItem("age", "24");
    return <div>Session Storage Set</div>;
};
export default SetSessionStorage;