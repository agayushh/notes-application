import React from "react";
import Navbar from "../components/Navbar";
import Notecard from "../components/Notecard";
import { MdAdd } from "react-icons/md";

export default function Home() {
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
        <button className="h-16 w-16 flex items-center justify-center absolute bg-black hover:bg-gray-800 bottom-10 right-10 rounded-xl">
          <MdAdd className="text-white" size={40} />
        </button>
      </div>
    </div>
  );
}
