import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-earth-green-50 to-warm-beige-50 text-center p-6">
            <div className="animate-fadeIn">
                <div className="flex justify-center mb-6">
                    <div className="bg-earth-green-100 text-earth-green-700 p-4 rounded-full shadow-md">
                        <AlertTriangle size={48} />
                    </div>
                </div>

                <h1 className="text-8xl font-bold text-earth-green-700 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    Sorry, the page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-earth-green-600 text-white font-medium shadow hover:bg-earth-green-700 transition-all duration-300"
                >
                    Go Home
                </Link>
            </div>
        </section>
    );
}
