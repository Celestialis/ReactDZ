import React from 'react';
import './Message.scss';

export default function Message({ author, text }) {
    return (
        <div className='message'>
            <span>{author}:</span>
            <span>{text}</span>
        </div>
    )
};