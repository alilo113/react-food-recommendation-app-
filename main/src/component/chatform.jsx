import { useState } from "react";
import { Chatwindow } from "./chatwindow";

export function Chatform() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState([]);

  function addRes(e) {
    e.preventDefault();
  
    let updatedResponse = [...response]; // Create a copy of the existing response array
  
    if (userInput.toUpperCase() === "YES" || userInput.toUpperCase() === "ANOTHER") {
      updatedResponse.push({ id: crypto.randomUUID(), message: userInput, isBot: false }); // User message
      updatedResponse.push({ id: crypto.randomUUID(), message: getBotResponse(), isBot: true }); // Bot response
    } 
    else if(userInput.toUpperCase() === "no"){
      updatedResponse.push({ id: crypto.randomUUID(), message: userInput, isBot: false }); // User message
      updatedResponse.push({id: crypto.randomUUID(), message: "Ok let me know if you change your mind", isBot: true})
    }
  
    setResponse(updatedResponse); // Update the response state once with the modified array
    setUserInput(""); // Clear the input field
  }
  

  function getBotResponse() {
    const foodArray = [
      "pizza", "burger", "salad", "sushi", "pasta", "tacos", "ice cream", "steak",
      "ramen", "tempura", "sashimi", "udon", "tonkatsu", "gyudon", "okonomiyaki", "yakitori"
    ];    
    return `${foodArray[Math.floor(Math.random() * foodArray.length)]}`;
  }

  return (
    <div>
      <Chatwindow response={response} userInput={userInput} />
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