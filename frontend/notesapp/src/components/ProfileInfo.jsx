import React from "react";

export default function ProfileInfo({ logout }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full w-16 h-16 bg-slate-300 text-center items-center pt-2">
        John William
      </div>
      <div>
        <p className="font-semibold">John William</p>
        <button className="underline">Logout</button>
      </div>
    </div>
  );
}
