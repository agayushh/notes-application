import React from "react";
import { getInitials } from "../utils/helper";

//this components tells the profile with which the user has logged in it will be displayed on the navbar

export default function ProfileInfo({ logout }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full w-12 h-12 bg-slate-300 text-center items-center pt-2.5 text-xl">
        {getInitials("John William")}
      </div>
      <div>
        <p className="font-semibold">John William</p>
        <button onClick={logout} className="underline">
          Logout
        </button>
      </div>
    </div>
  );
}
