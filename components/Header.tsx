import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import AvatarImage from '../assets/panta-icon.webp';


export const Header: React.FC = () => {
  return (<div className="header flex items-center p-4 bg-amber-500 fixed w-100 w-screen justify-between">
    <div className="flex items-center">

      <div className='pr-2 items-center flex'>
        <Image
          className="inline object-cover rounded-full align-baseline"
          src={AvatarImage}
          height='24'
          width='24'
          alt="icon" />
      </div>

      パン太
    </div>
    <div className="flex">
      <Link href='/'><a className='px-2'>Home</a></Link>
      <Link href='/links'><a className='px-2'>Links</a></Link>
      <Link href='/profiel'><a className='px-2'>Profile</a></Link>
    </div>
  </div>)
}