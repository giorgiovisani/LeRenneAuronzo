import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css'; // Tailwind CSS
import '../styles/animations.css'

const NotFound: React.FC = () => {
  return (
    <>

      {/* Main NotFound content */}
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-fadeIn">
          404
        </h1>
        <h2 className="text-3xl text-gray-600 mb-4 animate-fadeInSlow">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-500 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        {/* Link to homepage */}
        <Link to="/" className="btn btn-primary px-4 py-2 text-white animate-fadeInSlow">
          Go Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
