import React, { useState } from "react";
import PasswordInput from "../components/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../utils/helper";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Enter a valid name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid Email");
      return;
    }

    if (!password) {
      setError("Please Enter Password");
      return;
    }

    setError("");
  };

  return (
    <div>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="w-[520px] rounded-xl border p-10 mt-52">
          <form action="" onSubmit={handleSignup}>
            <h1 className="text-4xl mb-7">Sign Up</h1>
            <div className="flex flex-col gap-y-5">
              <input
                type="text"
                placeholder="enter your name"
                className="border p-2 rounded-lg"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="enter your email id"
                className="border p-2 rounded-lg"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <PasswordInput
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {error && <p className="text-red-500 text-xs">{error}</p>}
              <button
                type="submit"
                className="bg-black text-white p-2 rounded-lg hover:bg-slate-600"
              >
                Sign Up
              </button>
            </div>
            <p className="text-sm mt-4">
              Already have an account?
              <br />
              <Link to="/login" className="font-medium underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
