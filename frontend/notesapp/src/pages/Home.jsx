import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Notecard from "../components/Notecard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import ReactModal from "react-modal";

//this is the exact homepage

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
        <div className="mt-8 flex justify-evenly flex-wrap">
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
        <div className="flex justify-center items-center">
          <ReactModal
            isOpen={openAddEditModal.isShown}
            onRequestClose={() => {
              setOpenAddEditModal({ isShown: false, type: "add", data: null });
            }}
            style={{
              overlay: {
                backgroundColor: "rgba(0,0,0,0.2)",
              },
            }}
            contentLabel=""
            className="text-center ml-10 mt-52"
          >
            <AddEditNotes
              type={openAddEditModal.type}
              noteData={openAddEditModal.data}
              onClose={() => {
                setOpenAddEditModal({
                  isShown: false,
                  type: "add",
                  data: null,
                });
              }}
            />
          </ReactModal>
        </div>
      </div>
    </div>
  );
}
