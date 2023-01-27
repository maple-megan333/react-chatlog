import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const time_difference = (posted) => {
  const difference = new Date(
    new Date().getTime() - new Date('2018-05-18T22:12:03Z').getTime()
  );
  if (difference.getFullYear() - 1970) {
    return `${difference.getFullYear() - 1970} years ago`;
  }
  return difference.getMonth() - 1
    ? `${difference.getMonth() - 1} months ago`
    : `${difference.getDate() - 1} days ago`;
};

const ChatEntry = ({ id, sender, body, timeStamp }) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{time_difference(timeStamp)}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
