import React, { useState } from "react";

const HillCipher = () => {
  const [message, setMessage] = useState("");
  const [keyMatrix, setKeyMatrix] = useState([[6, 24], [1, 13]]); // Example 2x2 key
  const [result, setResult] = useState("");

  const mod26 = (n) => ((n % 26) + 26) % 26;

  const encrypt = () => {
    let text = message.toLowerCase().replace(/[^a-z]/g, "");
    if (text.length % 2 !== 0) text += "x"; // pad for 2x2

    let output = "";
    for (let i = 0; i < text.length; i += 2) {
      const vector = [
        text.charCodeAt(i) - 97,
        text.charCodeAt(i + 1) - 97,
      ];
      const enc1 = mod26(keyMatrix[0][0] * vector[0] + keyMatrix[0][1] * vector[1]);
      const enc2 = mod26(keyMatrix[1][0] * vector[0] + keyMatrix[1][1] * vector[1]);
      output += String.fromCharCode(enc1 + 97) + String.fromCharCode(enc2 + 97);
    }

    setResult(output);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">Hill Cipher (2x2 Matrix)</h2>
      <input
        type="text"
        className="border px-2 py-1 rounded w-full mb-2"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={encrypt}
      >
        Encrypt
      </button>
      {result && (
        <p className="mt-2">
          <strong>Encrypted:</strong> {result}
        </p>
      )}
    </div>
  );
};

export default HillCipher;
