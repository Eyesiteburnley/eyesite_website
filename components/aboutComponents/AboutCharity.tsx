'use client'
import React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Slider from '../Slider'



const AboutCharity= () => {
  const [emblaRef] = useEmblaCarousel()
  return (
    <section>
      <div className='max-container flex flex-col  py-10 pb-32 lg:py-20 items-center justify-center'>
        <div className='flex flex-col md:flex-row items-center justify-center text-center'>
          <div className='w-4/5'>
            <h1 className='bold-52 lg:bold-88'>Our Work With Healthier Heros</h1>
          </div>
          <div className='w-1/5'>
          <Image
            src={'/eyesite-healthierheroes.jpeg'}
            alt='charity image'
            width={200}
            height={200}
            />
          </div>
        </div>
        <Slider />
      </div>
    </section>
    

  )
}

export default AboutCharity
