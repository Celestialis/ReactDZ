import './Message.scss';

export const Message = ({ name, message }) => {
    return (
        <h3 className=''>
            {message}, {name}
        </h3>
    )
};