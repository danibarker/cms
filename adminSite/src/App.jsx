import { useEffect, useState } from "react";
import "./App.css";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [data, setData] = useState("");
  const updateData = () => {
    setDoc(doc(db, "content", "main"), {
      content: data,
    });
  };
  useEffect(() => {
    const docRef = doc(db, "content", "main");
    console.log("docRef", docRef);
    if (!docRef) return;
    const unsub = onSnapshot(docRef, (doc) => {
      console.log("doc", doc);
      if (!doc.exists()) return;
      setData(doc.data().content);
    });
    return unsub;
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setData(e.target.value)}
        value={data}
      />
      <button onClick={updateData}>Update</button>
    </div>
  );
}

export default App;
