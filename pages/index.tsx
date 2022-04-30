import type { NextPage } from 'next'
import { Template } from '../components/Template'

const Home: NextPage = () => {
  return (
    <Template>
      <div className='flex items-center justify-center h-screen'>
        <div className='text-center'>
          <div>
            <img
              src='/images/panta-icon.webp'
              className='mr-2 align-baseline inline object-cover rounded-full w-48 h-48'
              alt='icon'
            />
          </div>

          <h1 className='text-5xl font-bold pt-2'>
            パン太
          </h1>
          <p className='pt-2'>それはパン。いいえ人間です。</p>
        </div>
      </div>
    </Template>
  )
}

export default Home
