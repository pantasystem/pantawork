

import Head from 'next/head'
import React from 'react'
import { AppBar } from './AppBar'

type Meta = {
  image?: string,
  description?: string,
};
type Props = {
  children: React.ReactElement,
  title?: string,
  meta?: Meta
}
export const Template: React.FC<Props> = ({ children, title, meta }) => {
  return (
    <div className="bg-amber-100">
      <Head>
        <title>{title ?? ''}</title>
        {title && <meta property='og:title' content={title} key='title' />}
        {meta?.description && <meta property='og:description' content={meta?.description ?? ''} key='description' />}
        {meta?.image && <meta property='og:image' content={meta?.image ?? ''} key='image' />}
      </Head>
      <div className="w-screen relative">
        <AppBar />
        <div className='h-screen'>
          <div className='w-screen h-16'></div>
          {children}
        </div>

      </div>
    </div>
  )
}
