import React from 'react'
import Image from 'next/image'

const AboutHero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 sm:text-center'>
            <h1 className='bold-52 lg:bold-88'>About Us</h1>
            <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px] sm:regular-25'>Welcome to Eyesite Opticians. We have been established 30 years and built up a solid reputation. Our staff are the pinnacle of this. We provide eye examinations, Spectacles, contact lenses and spectacle accessories. We will soon be providing hearing tests, hearing aids and ear wax removal.</p>
            
            <div className='my-11 flex flex-wrap gap-5'>
                <div className="flex items-center gap-2">
                </div>
            </div>
            <div className='flex flex-col w-full gap-3 sm:flex-row'>
            </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
            <Image src="/shop_img.jpg" alt='store image' width={600} height={600}></Image>
        </div>
            
    </section>

  )
}

export default AboutHero
