import { useState, useEffect } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";


export default function MessageForm(props) {
  const { chatId, creds } = props;
  const [value, setValue] = useState("");

  useEffect(() => {
    return () => {
      console.log("aws");
    };
  }, []);
  const Submit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (text.length > 0) sendMessage(creds, chatId, { text });
    setValue("");
  };

  const Change = (e) => {
    setValue(e.target.value);
    isTyping(props, chatId);
  };

  const Upload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };

  return (
    <div className="MessageForm">
      <form className="msgform" onSubmit={Submit}>
        <input
          type="text"
          placeholder="Type a message..."
          value={value}
          onChange={Change}
        />
        <label htmlFor="upload-button">
          <span className="image-button">
            <PictureOutlined className="picture-icon" />
          </span>
        </label>
        <input
          type="file"
          id="upload-button"
          multiple={false}
          style={{ display: "none" }}
          onChange={Upload}
        />
        <button className="send-button" type="submit">
          <SendOutlined className="send-icon" />
        </button>
      </form>
    </div>
  );
}
