import React, { useState } from "react";

const VigenereCipher = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");

  const formatText = (str) => str.toUpperCase().replace(/[^A-Z]/g, "");

  const encrypt = () => {
    const input = formatText(text);
    const formattedKey = formatText(key);
    if (!input || !formattedKey) {
      setResult("Please enter both message and key.");
      return;
    }

    let output = "";
    for (let i = 0, j = 0; i < input.length; i++) {
      const charCode = ((input.charCodeAt(i) - 65 + formattedKey.charCodeAt(j % formattedKey.length) - 65) % 26) + 65;
      output += String.fromCharCode(charCode);
      j++;
    }
    setResult(output);
  };

  const decrypt = () => {
    const input = formatText(text);
    const formattedKey = formatText(key);
    if (!input || !formattedKey) {
      setResult("Please enter both message and key.");
      return;
    }

    let output = "";
    for (let i = 0, j = 0; i < input.length; i++) {
      const charCode = ((input.charCodeAt(i) - formattedKey.charCodeAt(j % formattedKey.length) + 26) % 26) + 65;
      output += String.fromCharCode(charCode);
      j++;
    }
    setResult(output);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">Vigenère Cipher</h2>
      <input
        type="text"
        placeholder="Enter message"
        className="border px-2 py-1 rounded w-full mb-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter key"
        className="border px-2 py-1 rounded w-full mb-2"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <div className="flex space-x-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={encrypt}>
          Encrypt
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={decrypt}>
          Decrypt
        </button>
      </div>
      {result && (
        <p className="mt-2">
          <strong>Result:</strong> {result}
        </p>
      )}
    </div>
  );
};

export default VigenereCipher;
