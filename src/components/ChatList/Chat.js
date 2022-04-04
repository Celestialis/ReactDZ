import React from "react";
import './Chat.scss';
export const Chat = ({name}) => {
    return (
        <div className="chat"> {name}</div>
    );
}