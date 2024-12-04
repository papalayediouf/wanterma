import { useState } from "react";
import { Link } from "react-router";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-red-600 font-bold text-xl">Wanterma</div>

        {/* Bouton pour le menu mobile */}
        <button
          className="sm:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menu Desktop (visible sur écran large) */}
        <ul className="hidden sm:flex space-x-4">
          <li>
            <Link to="/" className="hover:text-red-600">
              Tous
            </Link>
          </li>
          <li>
            <Link to="/hommes" className="hover:text-red-600">
              Hommes
            </Link>
          </li>
          <li>
            <Link to="/femmes" className="hover:text-red-600">
              Femmes
            </Link>
          </li>
          <li>
            <Link to="/enfants" className="hover:text-red-600">
              Enfants
            </Link>
          </li>
          <li>
            <Link to="/ventes" className="hover:text-red-600">
              Ventes
            </Link>
          </li>
          <li>
            <Link to="/chariot" className="hover:text-red-600">
              Chariot{" "}
              <span className="bg-red-500 rounded font-bold text-white px-1">
                0
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Drawer off-canvas pour mobile */}
      <div
        id="drawer-example"
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:hidden`}
        aria-labelledby="drawer-example-label"
      >
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col space-y-4 p-6">
          <li>
            <Link to="/" className="hover:text-red-600">
              Tous
            </Link>
          </li>
          <li>
            <Link to="/hommes" className="hover:text-red-600">
              Hommes
            </Link>
          </li>
          <li>
            <Link to="/femmes" className="hover:text-red-600">
              Femmes
            </Link>
          </li>
          <li>
            <Link to="/enfants" className="hover:text-red-600">
              Enfants
            </Link>
          </li>
          <li>
            <Link to="/ventes" className="hover:text-red-600">
              Ventes
            </Link>
          </li>
          <li>
            <Link to="/chariot" className="hover:text-red-600">
              Chariot{" "}
              <span className="bg-red-500 rounded font-bold text-white px-1">
                0
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay pour fermer le menu sur mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 sm:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}
