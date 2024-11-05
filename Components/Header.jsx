import { assets } from '@/Assets/posts'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} width={180} className='w-180 sm:w-auto' alt='blogger'/>
        <button className='flex items-center gap-2 font-medium px-3 py-1 sm:py-3 sm:px-6 border border-solid border-black'>
            Get Started <Image src={assets.arrow} alt='arrow'/>
        </button>
        </div>
        <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere. Itaque architecto tempora a non culpa, nam quae provident dignissimos, quod dolores doloribus dolorum, repudiandae porro quos aut ab consequuntur nesciunt exercitationem quibusdam ullam eligendi. Corrupti doloremque provident totam quis suscipit sit rerum ipsum inventore iste. Sed ipsum quas vitae?</p>
            <form className='flex justify-center max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black'>
                <input type='email' placeholder='Enter your email' className='pl-4 outline-none'/>
                <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Header
