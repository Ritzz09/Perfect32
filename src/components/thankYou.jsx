import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
    return (
        <div
          className="min-h-screen bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url('/public/img/hero.jpeg')` }}
        >
          <div className="bg-white/90 p-10 rounded-2xl shadow-2xl text-center max-w-md">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Thank You!</h1>
            <p className="text-lg text-gray-700 mb-6">
              Your appointment request was sent successfully.
            </p>
            <Link
              to="/"
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      );
}
