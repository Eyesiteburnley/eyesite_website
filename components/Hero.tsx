import React from 'react'
import Image from 'next/image'
import BookingButton from './BookingButton'
import YouTube from 'react-youtube'

const options = {
    height:'400',
    width:'640',
    playerVars:{
        autoplay:1,
    },
};

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 sm:pb-10 md:gap-28 lg:py-20 xl:flex-row'>
        
        <div className='relative flex flex-1 flex-col xl:w-1/2'>
            <h1 className='bold-52 lg:bold-88'>Eyesite Opticians</h1>
            <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>Welcome to Eyesite Opticians. We have been established 30 years and built up a solid reputation. Our staff are the pinnacle of this. We provide eye examinations, Spectacles, contact lenses and spectacle accessories. We will soon be providing hearing tests, hearing aids and ear wax removal.</p>
        </div>
        <div className="relative flex flex-1 items-center lg:items-start  ">
            <div className="relative hidden lg:flex">
                <iframe width="800" height="400" src="https://www.youtube.com/embed/djNOpVAwZk0?si=KtUxnAI9eSb7SYG8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="relative lg:hidden">
                <iframe width="350" height="200" src="https://www.youtube.com/embed/djNOpVAwZk0?si=KtUxnAI9eSb7SYG8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    </section>
  )
};

export default Hero
