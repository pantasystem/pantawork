import Link from 'next/link'
import React from 'react'


export const AppBar: React.FC = () => {
  return (<div className="header flex items-center p-4 bg-amber-500 fixed w-100 h-16 w-screen justify-between">
    <div className="flex items-center">

      <div className='pr-2 items-center flex'>
        <img
          className="inline object-cover rounded-full align-baseline w-10 h-10"
          src='/images/panta-icon.webp'
          alt="icon" />
      </div>

      パン太
    </div>
    <div className="flex">
      <Link href='/'><a className='px-2'>Home</a></Link>
      <Link href='/links'><a className='px-2'>Links</a></Link>
      <Link href='/profile'><a className='px-2'>Profile</a></Link>
    </div>
  </div>)
}