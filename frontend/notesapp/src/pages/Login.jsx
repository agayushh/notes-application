import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import { validateEmail } from "../utils/helper";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email id");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }
    setError("");
  };

  return (
    <div>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="w-[520px] rounded-xl border p-10 mt-52">
          <form action="" onSubmit={handleLogin}>
            <h1 className="text-4xl mb-7">Login</h1>
            <div className="flex flex-col gap-y-5">
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
                Login
              </button>
            </div>
            <p className="text-sm mt-4">
              Haven&apos;t registered yet?
              <br />
              <Link to="/signup" className="font-medium underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
