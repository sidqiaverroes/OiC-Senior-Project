import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Seek from "../components/Seek";
import Result from "../components/Result";
import Contact from "../components/Contact";

function SeekPage() {
  const FLASK_URL = process.env.REACT_APP_FLASK;

  const [result, setResult] = useState(null);
  const [error, setError] = useState(0);

  const handleSubmit = async (e, inputText) => {
    e.preventDefault();

    if (inputText.length > 3000) {
      setError(1); // Set error flag
      return;
    } else if (inputText === "") {
      setError(2);
      return;
    } else setError(false);

    try {
      const response = await fetch(`${FLASK_URL}/detect-news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input_text: inputText }),
      });

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log(data);
        setResult(data);
      } else {
        // Handle error response
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      // Handle network error
      console.error("Error:", error.message);
    }
  };

  const handleSeekAgain = () => {
    // Do something with the parameter received from the child component
    setResult("");
  };

  return (
    <div>
      <Navbar />
      {result ? (
        <Result result={result} handleSeekAgain={handleSeekAgain} />
      ) : (
        <Seek handleSubmit={handleSubmit} error={error} />
      )}

      <Contact />
    </div>
  );
}

export default SeekPage;
