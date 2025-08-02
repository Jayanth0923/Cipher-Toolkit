import { useState } from 'react';

function generateMatrix(key) {
  key = key.toUpperCase().replace(/J/g, 'I').replace(/[^A-Z]/g, '');
  let seen = {};
  let matrix = [];
  let chars = key + 'ABCDEFGHIKLMNOPQRSTUVWXYZ';

  for (let char of chars) {
    if (!seen[char]) {
      seen[char] = true;
      matrix.push(char);
    }
  }

  return Array.from({ length: 5 }, (_, i) => matrix.slice(i * 5, i * 5 + 5));
}

function formatText(text) {
  text = text.toUpperCase().replace(/J/g, 'I').replace(/[^A-Z]/g, '');
  let formatted = '';

  for (let i = 0; i < text.length; i += 2) {
    let a = text[i];
    let b = text[i + 1] || 'X';

    if (a === b) {
      formatted += a + 'X';
      i--;
    } else {
      formatted += a + b;
    }
  }

  return formatted;
}

function findPosition(matrix, letter) {
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      if (matrix[row][col] === letter) {
        return [row, col];
      }
    }
  }
}

function processText(text, matrix, mode) {
  let result = '';

  for (let i = 0; i < text.length; i += 2) {
    let [a, b] = [text[i], text[i + 1]];
    let [row1, col1] = findPosition(matrix, a);
    let [row2, col2] = findPosition(matrix, b);

    if (row1 === row2) {
      result += matrix[row1][(col1 + (mode === 'encrypt' ? 1 : 4)) % 5];
      result += matrix[row2][(col2 + (mode === 'encrypt' ? 1 : 4)) % 5];
    } else if (col1 === col2) {
      result += matrix[(row1 + (mode === 'encrypt' ? 1 : 4)) % 5][col1];
      result += matrix[(row2 + (mode === 'encrypt' ? 1 : 4)) % 5][col2];
    } else {
      result += matrix[row1][col2];
      result += matrix[row2][col1];
    }
  }

  return result;
}

export default function PlayfairCipher() {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');

  const handleEncrypt = () => {
    const matrix = generateMatrix(key);
    const formatted = formatText(text);
    const result = processText(formatted, matrix, 'encrypt');
    setOutput(result);
  };

  const handleDecrypt = () => {
    const matrix = generateMatrix(key);
    const formatted = formatText(text);
    const result = processText(formatted, matrix, 'decrypt');
    setOutput(result);
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-md my-4">
      <h2 className="text-2xl font-semibold mb-4">Playfair Cipher</h2>
      <input
        type="text"
        placeholder="Enter text"
        className="w-full border p-2 mb-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter keyword"
        className="w-full border p-2 mb-4"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <div className="flex gap-4 mb-4">
        <button onClick={handleEncrypt} className="bg-blue-500 text-white px-4 py-2 rounded">Encrypt</button>
        <button onClick={handleDecrypt} className="bg-green-500 text-white px-4 py-2 rounded">Decrypt</button>
      </div>
      <div className="p-3 bg-gray-100 rounded">
        <strong>Output:</strong> {output}
      </div>
    </div>
  );
}
