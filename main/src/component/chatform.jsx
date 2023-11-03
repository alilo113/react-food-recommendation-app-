import { Chatwindow } from "./chatwindow";
import { useState } from "react";

export function Chatform() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]); // Initialize as an array

  function handleUserInput(event) {
    event.preventDefault();

    if (userInput.toLowerCase() === "yes") {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          messageValue: userInput,
        },
      ]);
    }
    setUserInput("");
  }

  return (
    <div>
      <Chatwindow messages={messages} />
      <form onSubmit={handleUserInput}>
        <input
          type="text"
          name="userInput"
          placeholder="Type a message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
