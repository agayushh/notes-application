import React from "react";

export default function AddEditNotes() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <form className="flex flex-col w-3/4">
          <label>Title</label>
          <input type="text" placeholder="enter title" />
          <label>Description</label>

          <textarea type={Text} placeholder="enter description"></textarea>
        </form>
      </div>
    </div>
  );
}
