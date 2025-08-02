import React, { useState } from "react";
import forge from "node-forge";

const RSAKeyGenerator = () => {
  const [keyPair, setKeyPair] = useState({ publicKey: "", privateKey: "" });
  const [generating, setGenerating] = useState(false);

  const generateKeys = () => {
    setGenerating(true);
    setTimeout(() => {
      const { pki } = forge;
      const keypair = pki.rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
      const publicKeyPem = pki.publicKeyToPem(keypair.publicKey);
      const privateKeyPem = pki.privateKeyToPem(keypair.privateKey);
      setKeyPair({ publicKey: publicKeyPem, privateKey: privateKeyPem });
      setGenerating(false);
    }, 100); // allow UI update
  };

  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">🔑 RSA Key Generator</h2>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={generateKeys}
        disabled={generating}
      >
        {generating ? "Generating..." : "Generate 2048-bit Keys"}
      </button>

      {keyPair.publicKey && (
        <div className="mt-4 text-left">
          <h3 className="font-bold text-sm mb-1">🔓 Public Key:</h3>
          <textarea
            readOnly
            className="w-full h-40 p-2 border rounded bg-white text-xs"
            value={keyPair.publicKey}
          />
          <h3 className="font-bold text-sm mt-4 mb-1">🔐 Private Key:</h3>
          <textarea
            readOnly
            className="w-full h-40 p-2 border rounded bg-white text-xs"
            value={keyPair.privateKey}
          />
        </div>
      )}
    </div>
  );
};

export default RSAKeyGenerator;
