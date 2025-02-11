import React from 'react'
import ProfileInfo from './ProfileInfo'

export default function Navbar() {
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
        <h2 className='text-2xl font-medium text-black py-2 hover:scale-105 transition duration-300'>Notes</h2>
        <ProfileInfo />
    </div>
  )
}
