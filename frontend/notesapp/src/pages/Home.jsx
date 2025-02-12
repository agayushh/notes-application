import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Notecard from "../components/Notecard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import ReactModal from "react-modal";

export default function Home() {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  return (
    <div>
      <Navbar />
      <div className="mx-auto container">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <Notecard
            title="Meeting on 7th"
            date="7th april 2025"
            content="Meeting on 7th april"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <Notecard
            title="Meeting on 7th"
            date="7th april 2025"
            content="Meeting on 7th april"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <Notecard
            title="Meeting on 7th"
            date="7th april 2025"
            content="Meeting on 7th april"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <Notecard
            title="Meeting on 7th"
            date="7th april 2025"
            content="Meeting on 7th april"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
        <button
          className="h-16 w-16 flex items-center justify-center absolute bg-black hover:bg-gray-800 bottom-10 right-10 rounded-xl"
          onClick={() => {
            setOpenAddEditModal({ isShown: true, type: "add", data: null });
          }}
        >
          <MdAdd className="text-white" size={40} />
        </button>
        <ReactModal
          isOpen={openAddEditModal.isShown}
          onRequestClose={() => {}}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.2)",
            },
          }}
          contentLabel=""
          className="w-[80%] text-center ml-40 mt-52"
        >
          <AddEditNotes />
        </ReactModal>
      </div>
    </div>
  );
}
