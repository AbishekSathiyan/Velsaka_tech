import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* Glow Background */}
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <div className="w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full"></div>
        </div>

        {/* 404 Text */}
        <h1 className="text-7xl sm:text-8xl font-bold text-white tracking-tight">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-slate-400 text-sm sm:text-base">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold hover:scale-105 transition-all shadow-lg shadow-indigo-500/20"
          >
            Go Home
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}