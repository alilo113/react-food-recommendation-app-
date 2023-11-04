export function Chatwindow({ response }) {
  const foodArray = ["pizza", "burger", "salad", "sushi", "pasta", "tacos", "ice cream", "steak"];
  const randomFood = foodArray[Math.floor(Math.random() * foodArray.length)];

  return (
    <div id="chat-window" className="chat-window">
      <p>
        <b>Bot: </b>Are you hungry? I can fix that. Type YES if you want something to eat or NO if you don't.
      </p>
      {response && Array.isArray(response) && response.map((responses) => (
        <>
        <p key={responses.id}>
          <b>Me: </b>{responses.message}
        </p>
        <p key={responses.id}>
          <b>Bot: </b>{randomFood}
        </p>
      </>
      ))}
    </div>
  );
}
