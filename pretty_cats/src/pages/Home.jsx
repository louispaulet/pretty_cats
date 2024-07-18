// src/pages/Home.jsx
import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center flex-col">
        <div className="my-4">
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-3xl font-bold underline">Vite + React</h1>
        <div className="card">
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className="mt-2">
            Edit <code>src/pages/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs mt-4">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default Home;
