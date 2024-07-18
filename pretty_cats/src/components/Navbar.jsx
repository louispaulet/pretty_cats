// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <Link className="mr-4 hover:text-gray-400" to="/">Home</Link>
          <Link className="mr-4 hover:text-gray-400" to="/about">About</Link>
          <Link className="hover:text-gray-400" to="/top-cats">Top Cats</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
