import React from "react";

export default function AddEditNotes() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2  border-2 mt-5 w-1/2 p-4 ">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            placeholder="enter title"
            className="p-3 bg-slate-100 rounded-lg"
          />
          <label>Description</label>

          <textarea
            type={Text}
            placeholder="enter description"
            className="h-40 p-3 bg-slate-100"
          ></textarea>
          <div>
            <label> Tags</label>
          </div>

          <button className="bg-black p-3 text-white rounded-md hover:bg-gray-800">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
