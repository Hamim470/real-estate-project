import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="max-w-xl text-center">
        <h1 className="text-7xl font-bold text-sky-600">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-sky-600 text-white font-semibold rounded-xl shadow hover:bg-sky-700 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
    );
};

export default ErrorPage;