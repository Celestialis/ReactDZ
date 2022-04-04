import {Message} from "../Message/Message";
import React from "react";

export const MessageList = ({messages}) =>
    messages.map((msg) => <Message key={msg.id} text={msg.text} name={msg.author} />);