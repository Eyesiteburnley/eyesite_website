import React from 'react'
import Image from 'next/image'

const DesignerService = () => {
  return (
    <section className='flex w-full flex-col bg-blue-200'>
      <div className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row  w-full'>
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 sm:text-center items-center justify-center'>
            <h1 className='bold-52 lg:bold-88'>We Offer Designer eyewear</h1>
            <p className='regular-16 text-gray-30 xl:max-w-[520px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur molestias voluptate eveniet dolorum ullam sapiente possimus, reiciendis saepe nemo accusamus fugiat illum voluptas! Voluptas modi delectus dolorum unde dolorem dolor neque ad fuga tempora illo praesentium exercitationem, totam accusantium laborum cum cupiditate perferendis nam vero? Incidunt iusto dicta esse quia.</p>
            
            <div className='my-11 flex flex-wrap gap-5'>
                <div className="flex items-center gap-2">
                </div>
            </div>
            <div className='flex flex-col w-full gap-3 sm:flex-row'>
            </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
            <Image src="/d-eyewear.png" alt='eyewear image' width={600} height={600} className='2xl:rounded-5xl'></Image>
        </div>
            
    </div>

    <div className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-blue-200 w-full'>
        <div className="relative flex flex-1 items-center justify-center">
            <Image src="/machine.JPG" alt='eyewear image' width={600} height={600} className='2xl:rounded-5xl'></Image>
        </div>
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 sm:text-center items-center justify-center'>
            <h1 className='bold-52 lg:bold-88'>We Offer OCT eye scans</h1>
            <p className='regular-16 text-gray-30 xl:max-w-[520px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur molestias voluptate eveniet dolorum ullam sapiente possimus, reiciendis saepe nemo accusamus fugiat illum voluptas! Voluptas modi delectus dolorum unde dolorem dolor neque ad fuga tempora illo praesentium exercitationem, totam accusantium laborum cum cupiditate perferendis nam vero? Incidunt iusto dicta esse quia.</p>
            
            <div className='my-11 flex flex-wrap gap-5'>
                <div className="flex items-center gap-2">
                </div>
            </div>
            <div className='flex flex-col w-full gap-3 sm:flex-row'>
            </div>
        </div>   
    </div>
    </section>
  )
}

export default DesignerService
