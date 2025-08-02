import React, { useState } from "react";

const BinaryConverter = () => {
  const [text, setText] = useState("");
  const [binary, setBinary] = useState("");
  const [mode, setMode] = useState("text-to-binary");

  const toBinary = (str) =>
    str
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");

  const fromBinary = (bin) =>
    bin
      .split(" ")
      .map((b) => String.fromCharCode(parseInt(b, 2)))
      .join("");

  const handleConvert = () => {
    if (mode === "text-to-binary") {
      setBinary(toBinary(text));
    } else {
      setBinary(fromBinary(text));
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">🧮 Binary Converter</h2>

      <div className="flex justify-center gap-4 mb-2">
        <label className="inline-flex items-center gap-1">
          <input
            type="radio"
            name="mode"
            value="text-to-binary"
            checked={mode === "text-to-binary"}
            onChange={() => setMode("text-to-binary")}
          />
          Text → Binary
        </label>
        <label className="inline-flex items-center gap-1">
          <input
            type="radio"
            name="mode"
            value="binary-to-text"
            checked={mode === "binary-to-text"}
            onChange={() => setMode("binary-to-text")}
          />
          Binary → Text
        </label>
      </div>

      <textarea
        rows={3}
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder={
          mode === "text-to-binary"
            ? "Enter plain text"
            : "Enter binary (e.g., 01001000 01101001)"
        }
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleConvert}
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Convert
      </button>

      {binary && (
        <div className="mt-4 bg-white border rounded p-2 text-sm whitespace-pre-wrap break-words">
          <strong>Result:</strong> {binary}
        </div>
      )}
    </div>
  );
};

export default BinaryConverter;
