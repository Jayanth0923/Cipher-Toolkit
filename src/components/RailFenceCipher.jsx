import React, { useState } from "react";

const RailFenceCipher = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState(3);
  const [mode, setMode] = useState("encrypt");
  const [result, setResult] = useState("");

  const encrypt = (plainText, rails) => {
    let rail = Array.from({ length: rails }, () => []);
    let dirDown = false;
    let row = 0;

    for (let char of plainText) {
      rail[row].push(char);
      if (row === 0 || row === rails - 1) dirDown = !dirDown;
      row += dirDown ? 1 : -1;
    }

    return rail.flat().join("");
  };

  const decrypt = (cipher, rails) => {
    let len = cipher.length;
    let rail = Array.from({ length: rails }, () => Array(len).fill('\n'));
    let dirDown;
    let row = 0, col = 0;

    for (let i = 0; i < len; i++) {
      if (row === 0) dirDown = true;
      if (row === rails - 1) dirDown = false;

      rail[row][col++] = '*';
      row += dirDown ? 1 : -1;
    }

    let index = 0;
    for (let i = 0; i < rails; i++) {
      for (let j = 0; j < len; j++) {
        if (rail[i][j] === '*' && index < cipher.length) {
          rail[i][j] = cipher[index++];
        }
      }
    }

    let result = "";
    row = 0; col = 0;
    for (let i = 0; i < len; i++) {
      if (row === 0) dirDown = true;
      if (row === rails - 1) dirDown = false;

      result += rail[row][col++];
      row += dirDown ? 1 : -1;
    }

    return result;
  };

  const handleSubmit = () => {
    if (!text || key < 2) return setResult("Enter valid text and key (≥ 2)");

    if (mode === "encrypt") {
      setResult(encrypt(text, parseInt(key)));
    } else {
      setResult(decrypt(text, parseInt(key)));
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">🚂 Rail Fence Cipher</h2>
      <textarea
        rows={3}
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="Enter your message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        min="2"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="Enter number of rails"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <div className="flex gap-4 justify-center mb-2">
        <label>
          <input
            type="radio"
            value="encrypt"
            checked={mode === "encrypt"}
            onChange={() => setMode("encrypt")}
          />
          <span className="ml-1">Encrypt</span>
        </label>
        <label>
          <input
            type="radio"
            value="decrypt"
            checked={mode === "decrypt"}
            onChange={() => setMode("decrypt")}
          />
          <span className="ml-1">Decrypt</span>
        </label>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Run Cipher
      </button>
      {result && (
        <div className="mt-4 bg-white border rounded p-2 text-sm whitespace-pre-wrap">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default RailFenceCipher;
