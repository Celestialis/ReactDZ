import React from 'react';
import './Message.scss';
import PropTypes from 'prop-types';

export const Message = ({name, text}) => {
    return (

        <div className="message-container">
            <h3 className="message">
                <div> {name}</div>
                <div>Message:</div>
                <div>{text}</div>
            </h3>
        </div>

    );
}

Message.propTypes = {
    author: PropTypes.string,
    text: PropTypes.string,
}