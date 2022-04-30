import type { NextPage } from 'next'
import Image from 'next/image'
import { Template } from '../components/Template'
import PantaIcon from '../assets/panta-icon.webp'

const Home: NextPage = () => {
  return (
    <Template>
      <div className='flex items-center justify-center h-screen'>
        <div className='text-center'>
          <div>
            <Image 
              src={PantaIcon}
              className='mr-2 align-baseline inline object-cover rounded-full'
              alt='icon'
              width='200'
              height='200'
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
