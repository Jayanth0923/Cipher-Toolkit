import React, { useState } from "react";

const ROT13Encoder = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleROT13 = (text) => {
    return text.replace(/[a-zA-Z]/g, (char) => {
      const base = char <= "Z" ? 65 : 97;
      return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setOutput(handleROT13(value));
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">🔄 ROT13 Encoder</h2>
      <textarea
        rows={3}
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="Enter text to encode/decode"
        value={input}
        onChange={handleChange}
      />
      <div className="bg-white border p-2 rounded text-sm whitespace-pre-wrap">
        <strong>Output:</strong> {output || " "}
      </div>
    </div>
  );
};

export default ROT13Encoder;
