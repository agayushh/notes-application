import React from 'react'
import Navbar from '../components/Navbar'
import Notecard from '../components/Notecard'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='mx-auto container'>
        <div className='grid grid-cols-3 gap-4 mt-8'>

        <Notecard title = "Meeting on 7th"
        date="7th april 2025"
        content="Meeting on 7th april"
        tags="#meeting"
        isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}/>
        <Notecard title = "Meeting on 7th"
        date="7th april 2025"
        content="Meeting on 7th april"
        tags="#meeting"
        isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}/>
        <Notecard title = "Meeting on 7th"
        date="7th april 2025"
        content="Meeting on 7th april"
        tags="#meeting"
        isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}/>
        <Notecard title = "Meeting on 7th"
        date="7th april 2025"
        content="Meeting on 7th april"
        tags="#meeting"
        isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}/>
        </div>

      </div>
    </div>
  )
}
