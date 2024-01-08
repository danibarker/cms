import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { db } from "./firebase";
import { doc, onSnapshot } from "firebase/firestore";

function App() {
  const [data, setData] = useState();
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
    <div className="App">
      <p>{data}</p>
    </div>
  );
}

export default App;
