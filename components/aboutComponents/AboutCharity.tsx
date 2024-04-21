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
        <div>
          <h1 className='bold-52 lg:bold-88'>Our Work With Healthier Heros</h1>
        </div>
        <Slider />
      </div>
    </section>
    

  )
}

export default AboutCharity
