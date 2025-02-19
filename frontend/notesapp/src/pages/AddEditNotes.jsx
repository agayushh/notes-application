import React, { useState } from "react";
import { MdClose } from "react-icons/md";

//this component is mounted when we click on the + button on the home screen this will allow us to add more notes to the home page

export default function AddEditNotes({ noteData, type, onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const addNote = async () => {};
  const editNote = async () => {};

  function handleAddEditNote() {
    console.log("hi");
    if (!title) {
      setError("Please enter a valid title");
      return;
    }
    if (!content) {
      setError("Please enter content");
      return;
    } else setError;
    if (type === "edit") {
      editNote();
    } else {
      addNote();
    }
  }

  return (
    <div className="flex justify-center relative">
      <button
        className="h-10 w-10 rounded-full flex items-center justify-center absolute top-7 right-[480px] hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>

      <div className="flex flex-col gap-2 border-2 mt-7 w-1/2 p-4 bg-white h-[50vh] ">
        <form className="flex flex-col">
          <label>Title</label>
          <input
            type="text"
            placeholder="enter title"
            className="p-3 bg-slate-100 rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="mt-5">Description</label>

          <textarea
            type="text"
            placeholder="enter description"
            className="h-52 p-3 bg-slate-100 mt-3"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
          <div>
            <br />
          </div>

          {error && <p className="text-red-500 text-xs pt-4">{error}</p>}
          <button
            className="bg-black p-3 text-white rounded-md hover:bg-gray-800 mt-4"
            onClick={handleAddEditNote}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
