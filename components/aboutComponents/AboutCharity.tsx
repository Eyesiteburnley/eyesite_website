import React from 'react'
import Image from 'next/image'

const AboutCharity= () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 sm:text-center items-center justify-center'>
            <h1 className='bold-52 lg:bold-88'>Our Work With Healthier Heros</h1>            
        </div>
        <div className="relative flex flex-1 items-center justify-center">
            <Image src="/shop_img.jpg" alt='store image' width={600} height={600}></Image>
        </div>
            
    </section>

  )
}

export default AboutCharity
