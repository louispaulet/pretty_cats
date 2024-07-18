// src/pages/Home.jsx
import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import TopCats from './../components/TopCats';


function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center flex-col">
        <TopCats />
      </div>
    </div>
  );
}

export default Home;
