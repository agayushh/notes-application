import React from "react";
import { getInitials } from "../utils/helper";

export default function ProfileInfo({ logout }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full w-12 h-12 bg-slate-300 text-center items-center pt-2.5 text-xl">
        {getInitials("John William")}
      </div>
      <div>
        <p className="font-semibold">John William</p>
        <button className="underline">Logout</button>
      </div>
    </div>
  );
}
