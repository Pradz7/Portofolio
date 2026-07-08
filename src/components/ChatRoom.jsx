import { useState, useEffect, useRef } from "react";
import { auth, loginWithGoogle, logout, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export default function ChatRoom() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // cek login
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    return () => unsub();
  }, []);

  // ambil semua pesan realtime
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "messages"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // urutkan dari paling lama ke paling baru
        data.sort((a, b) => {
          const aTime = a.createdAt?.seconds || 0;
          const bTime = b.createdAt?.seconds || 0;
          return aTime - bTime;
        });

        setMessages(data);
      },
      (error) => {
        console.error("Error loading messages:", error);
      }
    );

    return () => unsub();
  }, []);

  // auto scroll ke bawah kalau ada pesan baru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // kirim pesan
  const sendMessage = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Login dulu untuk mengirim pesan");
      return;
    }

    if (!message.trim()) return;

    const newMessage = message.trim();

    // kosongkan input langsung setelah klik send
    setMessage("");

    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        uid: user.uid,
        displayName: user.displayName || "Anonymous",
        photoURL: user.photoURL || "",
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error sending message:", error);

      // kalau gagal, balikin text ke input supaya tidak hilang
      setMessage(newMessage);
      alert("Gagal mengirim pesan");
    }
  };

  return (
    <div className="bg-zinc-900 border border-gray-700 p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-5">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">
        Chat Room
      </h2>

      {/* Header user */}
      {user && (
        <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-3">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={user.photoURL || "https://via.placeholder.com/40"}
              alt="avatar"
              className="w-10 h-10 rounded-full shrink-0"
            />
            <span className="text-white font-semibold truncate">
              {user.displayName || "User"}
            </span>
          </div>

          <button
            onClick={logout}
            className="bg-red-600 px-4 py-1 rounded-full text-white hover:bg-red-700 shrink-0"
          >
            Logout
          </button>
        </div>
      )}

      {/* Area pesan - semua orang bisa lihat */}
      <div className="h-72 overflow-y-auto border border-gray-700 p-3 rounded-lg bg-zinc-800 mb-4 space-y-3">
        {messages.length === 0 ? (
          <p className="text-gray-400 text-sm text-center mt-4">
            Belum ada pesan
          </p>
        ) : (
          messages.map((msg) => {
            const isOwnMessage = msg.uid === user?.uid;

            return (
              <div
                key={msg.id}
                className={`flex gap-2 ${
                  isOwnMessage ? "justify-end" : "justify-start"
                }`}
              >
                {!isOwnMessage && (
                  <img
                    src={msg.photoURL || "https://via.placeholder.com/40"}
                    alt="avatar"
                    className="w-8 h-8 rounded-full self-end shrink-0"
                  />
                )}

                <div
                  className={`p-3 rounded-lg max-w-[75%] break-words ${
                    isOwnMessage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  <div className="text-xs opacity-70 mb-1">
                    {msg.displayName || "Unknown User"}
                  </div>
                  <div>{msg.text || ""}</div>
                </div>

                {isOwnMessage && (
                  <img
                    src={msg.photoURL || "https://via.placeholder.com/40"}
                    alt="avatar"
                    className="w-8 h-8 rounded-full self-end shrink-0"
                  />
                )}
              </div>
            );
          })
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Bagian bawah */}
      {user ? (
        <form
          onSubmit={sendMessage}
          className="flex gap-2 flex-wrap sm:flex-nowrap w-full"
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ketik pesan..."
            className="flex-1 min-w-0 p-2 rounded-lg bg-zinc-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-700 w-full sm:w-auto"
          >
            Send
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={loginWithGoogle}
            className="flex items-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
              className="w-5 h-5"
            />
            Login with Google
          </button>
          <p className="text-sm text-gray-400">
            Login to send a message.
          </p>
        </div>
      )}
    </div>
  );
}