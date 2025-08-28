import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa"; // you can swap with FaGhost or FaSearch

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg px-4">
      <div className="text-center max-w-md">
        <FaExclamationTriangle className="mx-auto text-secondary text-7xl mb-4" />
        <h1 className="text-8xl font-bold text-secondary">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-txt">Page Not Found</h2>
        <p className="mt-2 text-txt opacity-80">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-2xl bg-secondary text-primary font-medium shadow-md hover:bg-active transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
