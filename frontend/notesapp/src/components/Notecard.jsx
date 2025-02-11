import React from 'react'
import { MdCreate, MdDelete, MdOutlinePushPin } from 'react-icons/md'

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
    <div className='border shadow-md w-96 p-4 hover:scale-105 mt-10 transition duration-300'>
      <div>
        <div>
          <h6 className='text-lg font-medium '>{title}</h6>
          <span className='text-sm text-slate-500'>{date}</span>
        </div>
        <MdOutlinePushPin onClick={onPinNote} size={20} />
      </div>

    <p className='font-light text-base'>{content?.slice(0,60)}</p>
      <div>
        {tags}
      </div>
        <div className='flex'>
          <MdCreate size={20} />
          <MdDelete size={20} />
        </div>
    </div>
  )
}

export default Notecard