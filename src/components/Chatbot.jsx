import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const updatedMessages = [...messages, { role: "user", content: userInput }];
    setMessages(updatedMessages);
    setUserInput("");

    try {
     const res = await fetch("http://localhost:5000/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    messages: [
      { role: "user", content: userInput }
    ]
  }),
});
const data = await res.json();
setMessages([...updatedMessages, { role: "assistant", content: data.reply }]);

    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <section className="relative max-w-md w-full h-[80vh] mx-auto bg-gray-900 text-white flex flex-col justify-end p-4 rounded-xl shadow-lg">
      <div className="flex-1 overflow-y-auto mb-4 p-3 rounded-lg bg-gray-800 space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 text-sm rounded-lg ${msg.role === 'user' ? 'bg-purple-700 text-white self-end' : 'bg-gray-700 text-gray-200 self-start'}`}>
            {msg.content}
          </div>
        ))}
      </div>

      <div className="flex gap-2 items-center">
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition duration-200"
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default Chatbot;
