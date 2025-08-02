import React, { useState } from "react";

const TextToBinary = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const convertToBinary = (text) => {
    return text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setOutput(convertToBinary(value));
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">🧮 Text to Binary Converter</h2>
      <textarea
        rows={3}
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="Enter text to convert"
        value={input}
        onChange={handleChange}
      />
      <div className="bg-white border p-2 rounded text-sm whitespace-pre-wrap">
        <strong>Binary:</strong> {output || " "}
      </div>
    </div>
  );
};

export default TextToBinary;
