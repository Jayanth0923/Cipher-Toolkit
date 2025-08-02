import React, { useState } from "react";

const ROT13Cipher = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const rot13 = (str) => {
    return str.replace(/[a-zA-Z]/g, (char) => {
      const base = char <= "Z" ? 65 : 97;
      return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
    });
  };

  const handleConvert = () => {
    setResult(rot13(text));
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">🔁 ROT13 Cipher</h2>
      <textarea
        rows={3}
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="Enter your message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleConvert}
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Apply ROT13
      </button>
      {result && (
        <div className="mt-4 bg-white border rounded p-2 text-sm whitespace-pre-wrap">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default ROT13Cipher;
