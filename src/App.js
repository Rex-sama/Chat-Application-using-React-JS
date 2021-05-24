import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      {!localStorage.getItem("username") ? (
        <Login />
      ) : (
        <ChatEngine
          hideUI={true}
          publicKey={process.env.REACT_APP_PROJECT_ID}
          userName={localStorage.getItem("username")}
          userSecret={localStorage.getItem("password")}
          height="100vh"
          renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
        />
      )}
    </div>
  );
}

export default App;
