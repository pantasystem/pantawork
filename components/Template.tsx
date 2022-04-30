

import React from 'react'
import { Header } from './Header'
type Props = {
  children: React.ReactElement,
}
export const Template: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-amber-100">
      <div className="w-screen relative">
        <Header />
        <div className='h-screen'>
          <div className='w-screen h-16'></div>
          {children}
        </div>

      </div>
    </div>
  )
}
