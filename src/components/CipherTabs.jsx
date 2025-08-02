import React, { useState } from "react";
import CaesarCipher from "./CaesarCipher";
import PlayfairCipher from "./PlayfairCipher";
import HillCipher from "./HillCipher";
import VigenereCipher from "./VigenereCipher";
import Base64Encoder from "./Base64Encoder";
import MorseCodeTranslator from "./MorseCodeTranslator";
import HashGenerator from "./HashGenerator";
import RailFenceCipher from "./RailFenceCipher";
import ROT13Cipher from "./ROT13Cipher";
import BinaryConverter from "./BinaryConverter";
import RSAKeyGenerator from "./RSAKeyGenerator";

const tabs = [
  { name: "🔐 Caesar", component: <CaesarCipher /> },
  { name: "🧩 Playfair", component: <PlayfairCipher /> },
  { name: "📊 Hill", component: <HillCipher /> },
  { name: "📜 Vigenère", component: <VigenereCipher /> },
  { name: "📦 Base64", component: <Base64Encoder /> },
  { name: "••• Morse", component: <MorseCodeTranslator /> },
  { name: "🔑 Hash", component: <HashGenerator /> },
  { name: "🔁 ROT13", component: <ROT13Cipher /> },
  { name: "010 Binary", component: <BinaryConverter /> },
  { name: "🛤️ Rail Fence", component: <RailFenceCipher /> },
  { name: "🔑 RSA", component: <RSAKeyGenerator /> },
];

const CipherTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-white shadow-xl rounded-2xl p-4">
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
              activeIndex === index
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-100"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-2">{tabs[activeIndex].component}</div>
    </div>
  );
};

export default CipherTabs;
