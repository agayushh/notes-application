import React from 'react'
import Navbar from '../components/Navbar'
import Notecard from '../components/Notecard'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='mx-auto container'>
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
  )
}
