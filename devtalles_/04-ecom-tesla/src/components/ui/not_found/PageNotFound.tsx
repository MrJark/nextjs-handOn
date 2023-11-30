import { titleFont } from '@/config/fonts'
import Image from 'next/image'
import Link from 'next/link'

export const PageNotFound = () => {
  return (
    <div className='flex flex-col h-[800px] w-full justify-center items-center align-middle'>
      <div className='text-center px-5 mx-5 py-5'>
        <h2 className={ `${titleFont.className} antialiased text-9xl` }>404</h2>
        <p className='font-semibold text-xl'>Whoops! Something is wrong</p>
      </div>
      <div className='px-5 mx-5'>
        <Image 
          className='rounded-xl p-5 sm:p-0'
          src='https://midu.dev/images/this-is-fine-404.gif'
          alt='This is fine gif'
          width={500}
          height={500}
        />
      </div>
      <div className='text-center px-5 mx-5 py-5'>
        <p className='font-light text-xl'>
          <span>You can return to </span>
          <Link className='font-normal hover:underline hover:text-2xl hover:text-blue-400 transition-all' href='/'>Home</Link>
        </p>
      </div>
    </div>
  )
}
