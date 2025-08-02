import React, { useState } from "react";

const Base64Encoder = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const encode = () => setResult(btoa(text));
  const decode = () => {
    try {
      setResult(atob(text));
    } catch {
      setResult("❌ Invalid Base64 input");
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">📦 Base64 Encoder / Decoder</h2>
      <input
        className="w-full border rounded p-2 mb-2"
        type="text"
        placeholder="Enter text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex gap-2 mb-2">
        <button onClick={encode} className="bg-blue-500 text-white px-4 py-1 rounded">Encode</button>
        <button onClick={decode} className="bg-green-500 text-white px-4 py-1 rounded">Decode</button>
      </div>
      <p className="text-left text-sm text-gray-700 break-all">Output: {result}</p>
    </div>
  );
};

export default Base64Encoder;
