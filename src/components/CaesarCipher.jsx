import React, { useState } from "react";
import { FaLock } from "react-icons/fa";

const CaesarCipher = () => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(3);
  const [result, setResult] = useState("");

  const handleEncrypt = () => {
    const encrypted = text
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const base = code >= 65 && code <= 90 ? 65 : 97;
          return String.fromCharCode(((code - base + parseInt(shift)) % 26) + base);
        }
        return char;
      })
      .join("");
    setResult(encrypted);
  };

  const handleDecrypt = () => {
    const decrypted = text
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const base = code >= 65 && code <= 90 ? 65 : 97;
          return String.fromCharCode(((code - base - parseInt(shift) + 26) % 26) + base);
        }
        return char;
      })
      .join("");
    setResult(decrypted);
  };

  const handleClear = () => {
    setText("");
    setShift(3);
    setResult("");
  };

  return (
    <div className="border rounded-lg p-6 shadow-md bg-white">
      <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
        <FaLock className="text-blue-600" /> Caesar Cipher
      </h2>

      <textarea
        className="w-full p-3 border rounded mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={4}
        placeholder="Enter text to encrypt or decrypt..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter shift value"
        value={shift}
        onChange={(e) => setShift(e.target.value)}
      />

      <div className="flex gap-4 mb-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={handleEncrypt}
        >
          Encrypt
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          onClick={handleDecrypt}
        >
          Decrypt
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>

      <div className="mt-4">
        <p className="font-semibold text-lg">Result:</p>
        <p className="text-gray-800 bg-gray-100 p-3 rounded mt-2 min-h-[40px] break-words">
          {result}
        </p>
      </div>
    </div>
  );
};

export default CaesarCipher;
