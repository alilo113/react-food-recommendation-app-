import { useState } from "react";
import { Chatwindow } from "./chatwindow";

export function Chatform() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState([]);

  function addRes(e) {
    e.preventDefault();

    // Assuming 'userInput' is the message entered by the user
    const userMessage = userInput.trim(); // Trim any extra spaces

    if (userMessage.toLowerCase() === "yes") {
      const newMessage = {
        id: crypto.randomUUID(),
        message: userMessage,
      };

      setResponse(prevResponse => [...prevResponse, newMessage]);
    }

    setUserInput("");
  }

  return (
    <div>
      <Chatwindow response={response} />
      <form onSubmit={addRes}>
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
