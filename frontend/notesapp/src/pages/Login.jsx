import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Signup from "./Signup";

export default function Login() {
  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center mt-[-100px] h-[80vh]">
        <div className="w-[520px] rounded-xl border p-10 mt-52">
          <form action="" onSubmit={() => {}}>
            <h1 className="text-4xl mb-7">Login</h1>
            <div className="flex flex-col gap-y-5">
              <input
                type="email"
                placeholder="enter your email id"
                className="border p-2 rounded-lg"
              />
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
