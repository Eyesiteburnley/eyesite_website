'use client'
import React from 'react'
import { EmblaCarousel } from './carouselComponents/EmblaCarousel'

const Reviews = () => {
  return (
    <section>
        <div className='max-container padding-container relative w-full flex'>
            <div className='flex flex-col items-center w-full'>
                <div className="relative">
                    <h2 className="bold-40 lg:bold-64">Check Out Our Google Reviews</h2>
                    <h3 className="text-gray-30">
                        Click Here For More
                    </h3>
                </div>
                <div className='w-full'>
                    <EmblaCarousel/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reviews
