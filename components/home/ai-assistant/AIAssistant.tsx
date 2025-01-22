// "use client";

// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MessageSquare, Bot, X, Send } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { chatResponses } from '@/lib/chat-responses';

// interface Message {
//   type: 'user' | 'bot';
//   content: string;
// }

// export default function AIAssistant() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     { type: 'bot', content: chatResponses.greetings[0] }
//   ]);
//   const [input, setInput] = useState('');
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const generateResponse = (userInput: string) => {
//     const input = userInput.toLowerCase();
    
//     if (input.includes('ai') || input.includes('artificial intelligence') || input.includes('machine learning')) {
//       return chatResponses.services.ai[Math.floor(Math.random() * chatResponses.services.ai.length)];
//     }
    
//     if (input.includes('mobile') || input.includes('app') || input.includes('ios') || input.includes('android')) {
//       return chatResponses.services.mobile[Math.floor(Math.random() * chatResponses.services.mobile.length)];
//     }
    
//     if (input.includes('web') || input.includes('website') || input.includes('application')) {
//       return chatResponses.services.web[Math.floor(Math.random() * chatResponses.services.web.length)];
//     }
    
//     if (input.includes('technology') || input.includes('tech stack') || input.includes('tools')) {
//       return chatResponses.technologies[Math.floor(Math.random() * chatResponses.technologies.length)];
//     }
    
//     if (input.includes('process') || input.includes('methodology') || input.includes('how do you work')) {
//       return chatResponses.process[Math.floor(Math.random() * chatResponses.process.length)];
//     }
    
//     if (input.includes('meeting') || input.includes('consultation') || input.includes('discuss')) {
//       return chatResponses.consultation[Math.floor(Math.random() * chatResponses.consultation.length)];
//     }
    
//     return chatResponses.services.general[Math.floor(Math.random() * chatResponses.services.general.length)];
//   };

//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userMessage = { type: 'user' as const, content: input };
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');

//     // Simulate typing delay
//     setTimeout(() => {
//       const response = generateResponse(input);
//       setMessages(prev => [...prev, { type: 'bot', content: response }]);
//     }, 1000);
//   };

//   return (
//     <>
//       <motion.button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <MessageSquare className="w-6 h-6" />
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 100 }}
//             className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl overflow-hidden"
//           >
//             {/* Header */}
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
//               <div className="flex items-center gap-2 text-white">
//                 <Bot className="w-6 h-6" />
//                 <span className="font-semibold">TRAI Assistant</span>
//               </div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="text-white hover:text-blue-200 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Messages */}
//             <div className="h-96 overflow-y-auto p-4 space-y-4">
//               {messages.map((message, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div
//                     className={`max-w-[80%] p-3 rounded-lg ${
//                       message.type === 'user'
//                         ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
//                         : 'bg-gray-100 text-gray-800'
//                     }`}
//                   >
//                     {message.content}
//                   </div>
//                 </motion.div>
//               ))}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Input */}
//             <div className="p-4 border-t">
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                   placeholder="Ask about our services, technologies..."
//                   className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <Button 
//                   onClick={handleSend} 
//                   className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
//                 >
//                   <Send className="w-4 h-4" />
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Bot, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { chatResponses } from '@/lib/chat-responses';
import { sendChatMessage } from '@/lib/chat-helpers';


interface Message {
  type: 'user' | 'bot';
  content: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: chatResponses.greetings[0] }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      // Call the API to get the bot's response
      const botResponse = await sendChatMessage([...messages, userMessage]);
      // Append bot response
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    } catch (error) {
      // In case of error, show an error message
      setMessages(prev => [...prev, { type: 'bot', content: "Sorry, something went wrong. Please try again later." }]);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Bot className="w-6 h-6" />
                <span className="font-semibold">TRAI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-blue-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about our services, technologies..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button 
                  onClick={handleSend} 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
