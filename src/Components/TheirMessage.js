import React from "react";

const TheirMessage = React.memo(({ lastMessage, message }) => {
  // const isFirstMessage =
  //   !lastMessage || lastMessage.sender.username !== message.sender.username;
  // console.log(lastMessage);
  return (
    <div className="message-row">
      <div
        className="message-avatar"
        style={{
          backgroundImage: message.sender && `url(${message.sender.avatar})`,
        }}
      />

      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          style={{
            marginLeft: lastMessage ? "10px" : "10px",
            height: "150px",
            width: "150px",
          }}
        />
      ) : (
        <div
          className="message"
          style={{
            marginLeft: lastMessage ? "0px" : "0px",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
});
export default TheirMessage;
