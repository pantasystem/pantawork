import React from 'react'
import { Template } from './Template'

export const HomePage: React.FC = () => {
  return (
    <Template>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <img
            className="inline object-cover w-48 h-48 mr-2 rounded-full align-baseline"
            src="https://s3.arkjp.net/misskey/46b77a8d-fc00-432c-8bf9-245c01a952cb.png"
            alt="icon"/>
          <h1 className="text-5xl font-bold pt-2">
            パン太
          </h1>
          <p className="pt-2">それはパン。いいえ人間です。</p>
        </div>
      </div>
    </Template>

  )
}
