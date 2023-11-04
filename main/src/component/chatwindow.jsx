export function Chatwindow({ response }) {
  return (
    <div id="chat-window" className="chat-window">
      <p>
        <b>Bot: </b>Are you hungry? I can fix that. Type YES if you want something to eat or NO if you don't and type ANOTHER to give you another thing to eat.
      </p>
      {response && Array.isArray(response) && response.map((item) => (
        <div key={item.id}>
          <p>
            {item.isBot ? 'Bot' : 'Me'}: {item.message}
          </p>
        </div>
      ))}
    </div>
  );
}
