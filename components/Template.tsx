

import React from 'react'
import { Header } from './Header'
type Props = {
  children: React.ReactElement,
}
export const Template: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-amber-100">
      <div className="w-screen h-screen">
        <Header />
        {children}

      </div>
    </div>
  )
}