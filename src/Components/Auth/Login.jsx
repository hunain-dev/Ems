import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);
    if (email === "huniiali1122@gmail.com" && password === "hunainkhan") {
      alert("your email and password was corrected");

      return;
    } else {
        alert("your email and password was incoorected");
    }
    setemail("");
    setpassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            submithandler(e);
          }}
        >
          <label className="block">
            <span className="Actay text-sm text-gray-600">Email</span>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 Actay block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </label>

          <label className="block">
            <span className="Actay text-sm text-gray-600">Password</span>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="mt-1 Actay block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </label>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded-md" />
              <span className="text-gray-600 Actay">Remember me</span>
            </label>
            <a href="#" className="Actay text-indigo-600 hover:underline">
              Forgot?
            </a>
          </div>

          <button
            type="submit"
            className="Actay w-full mt-2 rounded-xl bg-black text-white py-3 font-medium shadow-md hover:shadow-lg transform transition duration-200 hover:-translate-y-0.5"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <p className="Actay text-sm text-gray-500">or continue with</p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 cursor-pointer">
          <button
            type="button"
            className="Actay flex items-center justify-center cursor-pointer gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium shadow-sm hover:shadow-md transition transform duration-150"
          >
            {/* Google icon */}
            <svg
              className="w-5 h-5"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M533.5 278.4c0-17.4-1.6-34.1-4.7-50.3H272v95.3h147.4c-6.4 34.6-25.8 63.9-55 83.4v69.5h88.9c52-48 81.2-118.4 81.2-198z"
                fill="#4285F4"
              />
              <path
                d="M272 544.3c73.5 0 135.3-24.3 180.4-66.1l-88.9-69.5c-24.7 16.6-56.1 26.4-91.5 26.4-70.3 0-129.9-47.5-151.1-111.3H30.9v69.9C75.6 485.6 169.5 544.3 272 544.3z"
                fill="#34A853"
              />
              <path
                d="M120.9 326.8c-10.7-31.9-10.7-66.4 0-98.3V158.6H30.9c-39.2 76.5-39.2 167.6 0 244.1l90-75.9z"
                fill="#FBBC05"
              />
              <path
                d="M272 109.6c39.9-.6 78 14.6 107.1 41.8l80.3-80.3C407.3 24.6 345.5 0 272 0 169.5 0 75.6 58.7 30.9 148.2l90 69.9C142.1 157.1 201.7 109.6 272 109.6z"
                fill="#EA4335"
              />
            </svg>
            <span>Google</span>
          </button>

          <button
            type="button"
            className="Actay flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm cursor-pointer font-medium shadow-sm hover:shadow-md transition transform duration-150"
          >
            {/* GitHub icon */}
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.003.071 1.53 1.031 1.53 1.031.892 1.528 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.376.202 2.393.099 2.646.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.31.679.923.679 1.861 0 1.343-.012 2.427-.012 2.758 0 .268.18.58.688.482C19.137 20.163 22 16.415 22 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
            <span>GitHub</span>
          </button>
        </div>

        <p className="Actay mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
        <Link to="/">
        <a href="#" className="Actay text-indigo-600 hover:underline">
            Sign up
          </a>
        </Link> 
     
        </p>
      </div>
    </div>
  );
}
