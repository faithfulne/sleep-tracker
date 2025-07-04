import React from 'react'
import Image from 'next/image'
const LandingPage = () => {
  return (
    <div className='flex flex-col md:flex-row space-x-6 items-center justify-betweenh-[calc(100vh-4rem)]'>
       <div className='md:w-1/2 text-center md:text-left'>
        <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mb-4 font-serif'>Ultimate Comfort Premium Cotton Shirt</h1>
        <p className='text-lg text-gray-700 mb-8 font-sans'>Discover the ultimate in comfort and style with our Premium Cotton Shirt. Made from 100% high quality cotton, this shirt is designed to offer an unparalleled soft touch and breathability.

        </p>
        <div>
            <button className='bg-sky-600 text-amber-300 border border-sky-600 py-2 px-6 font-semibold hover:bg-sky-800 mr-4'>SHOP NOW</button>
            <button className='bg-white text-sky-600 py-2 px-6 font-semibold border border-sky-600 hover:bg-sky-800'>Learn More</button>
        </div>
       </div>
       <div className='md:w-1/2 justify-center mt-12 md:mt-0'>
        <Image 
                  src="/assets/hero/hero.jpg" alt={''}
                   width={500}
                    height={96}
                    className='' /> 
        
       </div>
    </div>
  )
}

export default LandingPage
