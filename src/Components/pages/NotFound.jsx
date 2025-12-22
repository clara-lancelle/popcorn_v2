import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-7xl font-bold text-gray-300">404</h1>

            <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>

            <p className="mt-2 text-gray-500 max-w-md">
                Sorry, the page you are looking for doesn’t exist or has been
                moved.
            </p>

            <Link
                to="/"
                className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
            >
                Go back home
            </Link>
        </main>
    );
}
