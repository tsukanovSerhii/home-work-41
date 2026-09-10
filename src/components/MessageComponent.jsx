import { use } from 'react';

const MessageComponent = ({ messagePromise }) => {
  const message = use(messagePromise);

  return (
    <div className="message-container">
      <h2>Отримане повідомлення:</h2>
      <p>{message}</p>
    </div>
  );
};

export default MessageComponent;
