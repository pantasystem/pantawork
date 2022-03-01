import React from 'react'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  return (<div className="header flex items-center p-4 bg-amber-500 fixed w-100 w-screen justify-between">
    <div className="flex items-center">
      <img
          className="inline object-cover w-8 h-8 mr-2 rounded-full align-baseline"
          src="https://s3.arkjp.net/misskey/46b77a8d-fc00-432c-8bf9-245c01a952cb.png"
          alt="icon"/>
        パン太
    </div>
    <div className="flex">
        <Link to="/">Home</Link>
        <Link to="/links">Links</Link>
        <Link to="/profile">Profile</Link>
    </div>
  </div>)
}
