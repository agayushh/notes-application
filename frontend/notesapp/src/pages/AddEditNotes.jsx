import React from "react";

//this component is mounted when we click on the + button on the home screen this will allow us to add more notes to the home page

export default function AddEditNotes() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 border-2 mt-7 w-1/2 p-4 bg-white h-[50vh] ">
        <form className="flex flex-col">
          <label>Title</label>
          <input
            type="text"
            placeholder="enter title"
            className="p-3 bg-slate-100 rounded-lg"
          />
          <label className="mt-5">Description</label>

          <textarea
            type={Text}
            placeholder="enter description"
            className="h-52 p-3 bg-slate-100 mt-3"
          ></textarea>
          <div>
            <label> Tags</label>
          </div>

          <button className="bg-black p-3 text-white rounded-md hover:bg-gray-800 mt-4">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
