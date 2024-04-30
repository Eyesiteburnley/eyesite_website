import React from 'react'



const BookingSection = () => {
  return (
    <section className='w-full bg-blue-80 flex flex-col lg:flex-row'>
        <div className='max-container padding-container flex flex-col gap-20 py-10 sm:pb-10 md:gap-28 lg:py-20 xl:flex-row bg-blue-80'>
            <div className='relative flex flex-1 flex-col xl:w-1/2'>
                <h2 className='bold-52 lg:bold-88 text-white'>Book An Appointment</h2>
            </div>
            <div className='relative flex flex-1 flex-col xl:w-1/2'>
                <iframe id="myIframe" height="600" src="https://blinkoms.co.uk/blinkdiary/eyesite/booking"></iframe>
            </div>
        </div>
    </section>
  )
}

export default BookingSection
