import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

export default function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];
  const keys = Object.keys(messages);

  if (!chat) return "Loading...";
  const Logout = () => {
    localStorage.setItem("username", "");
    localStorage.setItem("password", "");
    window.location.reload();
  };

  return (
    <div className="main-container">
      <div className="chat-header">
        {chat.people.map((person, index) => (
          <img
            key={index}
            src={person.person.avatar}
            alt="people"
            width="45"
            height="45"
          />
        ))}

        <div className="chat-title">
          <h3>{chat.title}</h3>
          <p>{chat.people.map((person) => `${person.person.username},`)}</p>
        </div>
        <button onClick={Logout}>Logout</button>
      </div>
      <br />
      {keys.map((key, index) => {
        const message = messages[key];
        const lastMessageKey = index === 0 ? null : keys[index - 1];
        const isMyMessage = userName === message.sender.username;
        return (
          <div key={index} style={{ width: "100%" }}>
            <div className="message-block">
              {isMyMessage ? (
                <MyMessage message={message} />
              ) : (
                <TheirMessage
                  message={message}
                  lastMessage={messages[lastMessageKey]}
                />
              )}
            </div>
            {/* -----------------------------Read receipt---------------------- */}
            <div
              className="read-receipts"
              style={{
                marginRight: isMyMessage ? "8px" : "0px",
                marginLeft: isMyMessage ? "0px" : "60px",
              }}
            >
              {chat.people.map((person, index) => {
                return (
                  person.last_read === message.id && (
                    <div
                      className="read-receipt"
                      key={index}
                      style={{
                        float: isMyMessage ? "right" : "left",
                        backgroundImage: `url(${person.person.avatar})`,
                      }}
                    />
                  )
                );
              })}
            </div>
          </div>
        );
      })}
      <div style={{height:"64px"}} />
      <div className="message-form">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
}
