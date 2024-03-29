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
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
        
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
            <h1 className='bold-52 lg:bold-88'>Eyesite Opticians</h1>
            <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>Welcome to Eyesite Opticians. We have been established 30 years and built up a solid reputation. Our staff are the pinnacle of this. We provide eye examinations, Spectacles, contact lenses and spectacle accessories. We will soon be providing hearing tests, hearing aids and ear wax removal.</p>
            
            <div className='my-11 flex flex-wrap gap-5'>
                <div className="flex items-center gap-2">
                    {/* {Array(5).fill(1).map((_, index)=> (
                        <Image
                            src="/star.svg"
                            key={index}
                            alt='star'
                            width={24}
                            height={24}
                        />
                    ))} */}
                </div>

                {/* <p className="bold-16 lg:bold-20 text-blue-70">198k
                    <span className='regular-16 lg:regular-20 ml-1 underline'>Excellent Reviews</span>
                </p> */}
            </div>
            <div className='flex flex-col w-full gap-3 sm:flex-row'>
                <BookingButton 
                    type={'button'}
                    title={'Book An Appointment'} 
                    variant={'btn_blue'}                
                />

                <BookingButton 
                    type={'button'} 
                    title={'How your visit will go'} 
                    variant={'btn_white_text'} />
            </div>
        </div>
        <div className="relative flex flex-1 items-start ">
            {/* <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
                <div className="flex flex-col">
                    <div className="flexBetween">
                        <p className='regular-16 text-gray-20'>Location</p>
                        <Image 
                            src="/close.svg"
                            alt='close'
                            width={24}
                            height={24}                
                        />
                    </div>

                </div>
                <div className="flexBetween">
                    <div className="flex flex-col">

                    </div>
                </div>
            </div> */}
            <div className="relative">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/djNOpVAwZk0?si=KtUxnAI9eSb7SYG8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    </section>
  )
};

export default Hero
