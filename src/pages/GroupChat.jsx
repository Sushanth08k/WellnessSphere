import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

const GroupChat = () => {
  const { user } = useAuth();
  const { groupId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const messagesRef = collection(db, `communityGroups/${groupId}/messages`);
    const q = query(messagesRef, orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [groupId]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    const messagesRef = collection(db, `communityGroups/${groupId}/messages`);

    await addDoc(messagesRef, {
      text: newMessage,
      sender: user.displayName || "Anonymous",
      timestamp: new Date(),
    });

    setNewMessage("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Group: {groupId}</h1>
      <div className="border p-4 h-80 overflow-y-auto bg-gray-100">
        {messages.map(msg => (
          <div key={msg.id} className="p-2 border-b">
            <strong>{msg.sender}: </strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow p-2 border rounded-l-md"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="px-4 py-2 bg-blue-500 text-white rounded-r-md">
          Send
        </button>
      </div>
    </div>
  );
};

export default GroupChat;
