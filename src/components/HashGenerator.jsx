import React, { useState } from "react";
import CryptoJS from "crypto-js";

const HashGenerator = () => {
  const [input, setInput] = useState("");
  const [md5Hash, setMd5Hash] = useState("");
  const [sha256Hash, setSha256Hash] = useState("");

  const generateHash = () => {
    setMd5Hash(CryptoJS.MD5(input).toString());
    setSha256Hash(CryptoJS.SHA256(input).toString());
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">🔐 Hash Generator</h2>
      <input
        className="w-full border rounded p-2 mb-3"
        type="text"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={generateHash}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Generate Hash
      </button>

      {md5Hash && (
        <div className="text-left mt-4 text-sm">
          <p><strong>MD5:</strong> {md5Hash}</p>
          <p className="mt-2"><strong>SHA-256:</strong> {sha256Hash}</p>
        </div>
      )}
    </div>
  );
};

export default HashGenerator;
