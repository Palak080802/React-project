function Message  ({ message, isSent, image })  {
    return (
        <div className={`message ${isSent ? 'sent' : 'received'}`}>
            
            <p>{message}</p>
        </div>
    );
};


export default Message;
