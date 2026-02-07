import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontSize: "20px" }}>
      <h1>React → Node Connection Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
