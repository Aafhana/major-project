"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import axios from 'axios';
// import icon from './images/chatbox-icon';
import './Chatbox.css';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const chatboxMessagesRef = useRef(null);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    const userMessage = { name: 'User', message: message };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', { message });
      const data = response.data;
      const botMessage = { name: "Aafhana", message: data.answer };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      const speech = new SpeechSynthesisUtterance();
      speech.lang = 'en';
      speech.text = botMessage.message;
      window.speechSynthesis.speak(speech);
    } catch (error) {
      console.error('Error:', error);
    }

    setMessage('');
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleMic = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en';
    recognition.onstart = () => {
      console.log('Listening...');
    };
    recognition.onspeechend = () => {
      recognition.stop();
    };
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setMessage(transcript);
      handleSendMessage();
    };
    recognition.start();
  };

  useEffect(() => {
    if (chatboxMessagesRef.current) {
      chatboxMessagesRef.current.scrollTop = chatboxMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="container">
      <div className={`chatbox ${isOpen ? 'chatbox--active' : ''}`}>
        <div className="chatbox__support">
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <Image
                src="/images/chatbox-icon.svg"
                alt="Chatbox Icon"
                width={50}
                height={50}
              />
              <Image
                id="male"
                src="https://img.icons8.com/?size=100&id=NPW07SMh7Aco&format=png&color=000000"
                alt="User Icon"
                width={50}
                height={50}
              />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Chat support</h4>
              <p className="chatbox__description--header">Hi. My name is Aafhana, how can I help you?</p>
            </div>
          </div>
          <div className="chatbox__messages" ref={chatboxMessagesRef}>
            {messages.slice().reverse().map((msg, index) => (
              <div
                key={index}
                className={`messages__item ${
                  msg.name === 'Aafhana' ? 'messages__item--visitor' : 'messages__item--operator'
                }`}
              >
                {msg.message}
              </div>
            ))}
          </div>
          <div className="chatbox__footer">
            <input
              type="text"
              placeholder="Write a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyUp={handleKeyUp}
            />
            <button className="chatbox__send--footer send__button" onClick={handleSendMessage}>
              Send
            </button>
            <button className="chatbox__send--footer mic__button" onClick={handleMic}>
              <Image
                id="mic"
                src="https://img.icons8.com/?size=100&id=sH9rvs5LTPf3&format=png&color=000000"
                alt="Mic Icon"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        <div className="chatbox__button">
          <button onClick={toggleChatbox}>
            <Image
              src="https://img.icons8.com/?size=100&id=1RueIplXPGd2&format=png&color=000000"
              alt="Chatbox Icon"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;















// "use client";
// import React, { useState, useEffect,useRef } from 'react';
// import './Chatbox.css';
// import axios from 'axios';
// import icon from './images/chatbox-icon';
// // import get_response from chat; 

// const Chatbox = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');
//   const chatboxMessagesRef = useRef(null);

//   const toggleChatbox = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSendMessage = async () => {
//     if (message.trim() === '') return;

//     const userMessage = { name: 'User', message: message };
//     setMessages([...messages, userMessage]);

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/predict', { message });
//       const data = response.data; // Use response.data directly
//       const botMessage = { name: "Aafhana", message: data.answer };
//       setMessages((prevMessages) => [...prevMessages, botMessage]);

//       const speech = new SpeechSynthesisUtterance();
//       speech.lang = 'en';
//       speech.text = botMessage.message;
//       window.speechSynthesis.speak(speech);
//     } catch (error) {
//       console.error('Error:', error);
//     }




//     //  try {
//     //   const response = await post('/api/chat', { message });
//     // //   const data = response.data; // Use response.data directly
//     //   //const response = get_response(message);
//     //   //const data = response.data; // Use response.data directly
//     //   const botMessage = { name: "Aafhana", message:response };
//     //   setMessages((prevMessages) => [...prevMessages, botMessage]);

//     //   const speech = new SpeechSynthesisUtterance();
//     //   speech.lang = 'en';
//     //   speech.text = botMessage.message;
//     //   window.speechSynthesis.speak(speech);
//     // } catch (error) {
//     //   console.error('Error:', error);
//     // }

//     setMessage('');
//   };

//   const handleKeyUp = (event) => {
//     if (event.key === 'Enter') {
//       handleSendMessage();
//     }
//   };

//   const handleMic = () => {
//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognition.lang = 'en';
//     recognition.onstart = () => {
//       console.log('Listening...');
//     };
//     recognition.onspeechend = () => {
//       recognition.stop();
//     };
//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setMessage(transcript);
//       handleSendMessage();
//     };
//     recognition.start();
//   };

//   useEffect(() => {
//     if (chatboxMessagesRef.current) {
//       chatboxMessagesRef.current.scrollTop = chatboxMessagesRef.current.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <div className="container">
//       <div className={`chatbox ${isOpen ? 'chatbox--active' : ''}`}>
//         <div className="chatbox__support">
//           <div className="chatbox__header">
//             <div className="chatbox__image--header">
//             <icon/>
//               <img id="male"
//               src="https://img.icons8.com/?size=100&id=NPW07SMh7Aco&format=png&color=000000"
//                // src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
//                alt="icon"
//               />
//             </div>
//             <div className="chatbox__content--header">
//               <h4 className="chatbox__heading--header">Chat support</h4>
//               <p className="chatbox__description--header">Hi. My name is Aafhana, how can I help you?</p>
//             </div>
//           </div>
//           <div className="chatbox__messages" ref={chatboxMessagesRef}>
//             {messages.slice().reverse().map((msg, index) => (
//               <div
//                 key={index}
//                 className={`messages__item ${
//                   msg.name === 'Aafhana' ? 'messages__item--visitor' : 'messages__item--operator'
//                 }`}
//               >
//                 {msg.message}
//               </div>
//             ))}
//           </div>
//           <div className="chatbox__footer">
//             <input
//               type="text"
//               placeholder="Write a message..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyUp={handleKeyUp}
//             />
//             <button className="chatbox__send--footer send__button" onClick={handleSendMessage}>
//               Send
//             </button>
//             <button className="chatbox__send--footer mic__button" onClick={handleMic}>
//               <img id ="mic" src="https://img.icons8.com/?size=100&id=sH9rvs5LTPf3&format=png&color=000000" alt="Icon" />
//             </button>
//           </div>
//         </div>
//         <div className="chatbox__button">
//           <button onClick={toggleChatbox}>
          
//             <img src="https://img.icons8.com/?size=100&id=1RueIplXPGd2&format=png&color=000000" alt="Chatbox Icon" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbox;



















// // import React, { useState, useEffect, useRef } from 'react';
// // import './Chatbox.css';
// // import axios from 'axios';
// // const Chatbox = () => {
// //   let [isOpen, setIsOpen] = useState(false);
// //   let [messages, setMessages] = useState([]);
// //   let [message, setMessage] = useState('');
// //   const chatboxMessagesRef = useRef(null);
// //   //console.log(message);

// //   const toggleChatbox = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const handleSendMessage = async () => {
// //     if (message.trim() === '') return;

// //     const userMessage = { name: 'User', message: message };
// //     //console.log(userMessage.message);
// //     setMessages([...messages, userMessage]);
                            
// //     // try {
// //     //   const response = await axios.post('http://127.0.0.1:5000/api/chat', {
// //     //     message: newMessage
// //     //   });

// //     try {
// //       const response = await axios.post('http://127.0.0.1:5000/predict', {message});
// //         // method: 'POST',
// //         // body: JSON.stringify({ message }),
// //         // mode: 'cors',
// //         // headers: {
// //         //   'Content-Type': 'application/json',
// //         //   'Access-Control-Allow-Methods':'GET,POST'
// //         // },
      
// //       const data = await response.json();
// //       const botMessage = { name: "Aafhana", message: data.answer };
// //       setMessages((prevMessages) => [...prevMessages, botMessage.message]);

// //       const speech = new SpeechSynthesisUtterance();
// //       speech.lang = 'en';
// //       speech.text = botMessage.message;
// //       window.speechSynthesis.speak(speech);
// //     } catch (error) {
// //       console.error('Error:', error);
// //     }

// //     setMessage('');
// //   };

// //   const handleKeyUp = (event) => {
// //     if (event.key === 'Enter') {
// //       handleSendMessage();
// //     }
// //   };

// //   const handleMic = () => {
// //     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// //     recognition.lang = 'en';
// //     recognition.onstart = () => {
// //       console.log('Listening...');
// //     };
// //     recognition.onspeechend = () => {
// //       recognition.stop();
// //     };
// //     recognition.onresult = (event) => {
// //       const transcript = event.results[0][0].transcript;
// //       setMessage(transcript);
// //       handleSendMessage();
// //     };
// //     recognition.start();
// //   };

// //   useEffect(() => {
// //     if (chatboxMessagesRef.current) {
// //       chatboxMessagesRef.current.scrollTop = chatboxMessagesRef.current.scrollHeight;
// //     }
// //   }, [messages]);

// //   return (
// //     <div className="container">
// //       <div className={`chatbox ${isOpen ? 'chatbox--active' : ''}`}>
// //         <div className="chatbox__support">
// //           <div className="chatbox__header">
// //             <div className="chatbox__image--header">
// //               <img
// //                 src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
// //                 alt="Chatbot Avatar"
// //               />
// //             </div>
// //             <div className="chatbox__content--header">
// //               <h4 className="chatbox__heading--header">Chat support</h4>
// //               <p className="chatbox__description--header">Hi. My name is Aafhana. How can I help you?</p>
// //             </div>
// //           </div>
// //           <div className="chatbox__messages" ref={chatboxMessagesRef}>
// //             {messages.slice().reverse().map((msg, index) => (
// //               <div
// //                 key={index}
// //                 className={`messages__item ${
// //                   msg.name === 'Aafhana' ? 'messages__item--visitor' : 'messages__item--operator'
// //                 }`}
// //               >
// //                 {msg.message}
// //               </div>
// //             ))}
// //           </div>
// //           <div className="chatbox__footer">
// //             <input
// //               type="text"
// //               placeholder="Write a message..."
// //               value={message}
// //               onChange={(e) => setMessage(e.target.value)}
// //               onKeyUp={handleKeyUp}
// //             />
// //             <button className="chatbox__send--footer send__button" onClick={handleSendMessage}>
// //               Send
// //             </button>
// //             <button className="chatbox__send--footer mic__button" onClick={handleMic}>
// //               <img src="mic-icon-url" alt="Mic Icon" />                      
// //             </button>
// //           </div>
// //         </div>
// //         <div className="chatbox__button">
// //           <button onClick={toggleChatbox}>
// //             <img src="./images/chatbox-icon.svg" alt="Chatbox Icon" />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Chatbox;
