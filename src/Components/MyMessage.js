import "./style.css";
import { useEffect } from "react";

export default function MyMessage({ message }) {
  useEffect(() => {}, [message]);

  return (
    <div className="my-block">
      <div className="my-image-block">
        {message?.attachments?.length > 0 ? (
          <div className="m1" style={{ marginLeft: "auto", marginRight: "0" }}>
            <img
              src={message.attachments[0].file}
              alt="message-attachment"
              style={{ height: "150px", width: "150px" }}
            />
          </div>
        ) : (
          <div className="my-message-block">
            <p>{message.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}
