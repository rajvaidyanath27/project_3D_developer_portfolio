import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Chatbot = () => {
  return (
    
    <section className="relative max-w-md w-full h-[80vh] mx-auto bg-gray-900 text-white flex flex-col justify-end p-4 rounded-xl shadow-lg">
  
  <div className="flex-1 overflow-y-auto mb-4 p-3 rounded-lg bg-gray-800 space-y-2">
    
    <p className="text-sm text-gray-400">Chat messages will appear here...</p>
  </div>

 
  <div className="flex gap-2 items-center">
    <input
      type="text"
      placeholder="Type your message..."
      className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition duration-200">
      Send
    </button>
  </div>
</section>


  );
};

export default Chatbot;
