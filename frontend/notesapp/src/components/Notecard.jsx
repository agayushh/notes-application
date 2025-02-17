import React from "react";
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";

//this is a single note card which will be displayed on the homepage

const Notecard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border shadow-md w-[470px] p-4 hover:shadow-2xl mt-10 transition duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-lg font-medium ">{title}</h6>
          <span className="text-sm text-slate-500">{date}</span>
        </div>
        <MdOutlinePushPin
          onClick={onPinNote}
          size={22}
          className={`${isPinned ? "text-blue-600" : "text-slate-400"}`}
        />
      </div>
      <div className="flex justify-between mt-2">
        <div>
          <p className="font-light text-base">{content?.slice(0, 60)}</p>
          <div>{tags}</div>
        </div>
        <div className="flex gap-3 mt-5">
          <MdCreate
            size={22}
            className=" text-slate-400 hover:text-green-400"
          />
          <MdDelete size={22} className="text-slate-400 hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Notecard;
