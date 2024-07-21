import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/pretty_cat_logo.webp" alt="Pretty Cats Logo" className="h-8 w-8 mr-2" />
            <span className="text-white text-xl font-bold">Pretty Cats</span>
          </Link>
        </div>
        <div className="text-white">
          <Link className="mr-4 hover:text-gray-400" to="/">Home</Link>
          <Link className="mr-4 hover:text-gray-400" to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
