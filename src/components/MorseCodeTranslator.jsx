import React, { useState } from "react";

const morseCodeMap = {
  A: ".-",    B: "-...",  C: "-.-.",  D: "-..",   E: ".",
  F: "..-.",  G: "--.",   H: "....",  I: "..",    J: ".---",
  K: "-.-",   L: ".-..",  M: "--",    N: "-.",    O: "---",
  P: ".--.",  Q: "--.-",  R: ".-.",   S: "...",   T: "-",
  U: "..-",   V: "...-",  W: ".--",   X: "-..-",  Y: "-.--",
  Z: "--..",  0: "-----", 1: ".----", 2: "..---", 3: "...--",
  4: "....-", 5: ".....", 6: "-....", 7: "--...", 8: "---..",
  9: "----.", " ": "/"
};

const reverseMap = Object.fromEntries(
  Object.entries(morseCodeMap).map(([k, v]) => [v, k])
);

const MorseCodeTranslator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const encode = () => {
    const encoded = input
      .toUpperCase()
      .split("")
      .map((char) => morseCodeMap[char] || "")
      .join(" ");
    setResult(encoded);
  };

  const decode = () => {
    const decoded = input
      .split(" ")
      .map((symbol) => reverseMap[symbol] || "")
      .join("");
    setResult(decoded);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">📡 Morse Code Translator</h2>
      <textarea
        className="w-full border rounded p-2 mb-3"
        rows={3}
        placeholder="Enter text or Morse code (e.g. .... . .-.. .-.. ---)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex justify-center gap-4 mb-2">
        <button
          onClick={encode}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Encode
        </button>
        <button
          onClick={decode}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Decode
        </button>
      </div>
      <div className="text-sm text-gray-800 break-words">
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
};

export default MorseCodeTranslator;
