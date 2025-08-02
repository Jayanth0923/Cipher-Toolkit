import CipherTabs from "./components/CipherTabs";
import "./index.css"; 

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Cipher Toolkit
        </h1>
        <p className="text-lg text-gray-600">
          Encrypt & decrypt using classic ciphers
        </p>
      </div>
      <CipherTabs />
    </div>
  );
}

export default App;