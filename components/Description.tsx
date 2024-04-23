import React from 'react'
import { SLIDER_IMAGES } from '@/constants'
import left from '../public/slider/left.svg'
import right from '../public/slider/right.svg'
import Image from 'next/image'

type props ={
    clickNext:any,
    clickPrev:any,
    activeImageIndex:any,
}

const Description = ({clickNext,clickPrev,activeImageIndex}:props) => {
  return (
    <div className='grid place-items-start w-full relative md:rounded-tr-3xl md:rounded-br-3xl'>
      <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline"> A Little more about our work</div>
      {SLIDER_IMAGES.map((elem,idx)=>(
        <div className={idx === activeImageIndex ? 'block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out mt-10':'hidden'} key={idx}>
            <div className="py-16 text-5xl font-extrabold mx-20">
                {elem.title}
            </div>
            <div className='leading-relaxed font-medium text-base tracking-wide h-40 mx-20 text-black'>
                {""}
                {elem.desc}
            </div>
            <button className='bg-black text-white  px-4 py-2 rounded-md my-10 mx-20'>
                About Healthier Heroes
            </button>
            <div onClick={clickPrev} className="absolute bottom-1 w-full flex justify-center items-center">
                <div className='absolute bottom-2 right-10 cursor-pointer'>
                    <Image src={left} alt='' width={20} height={20}/>
                </div>
                <div onClick={clickNext} className='absolute bottom-2 right-2 cursor-pointer'>
                    <Image src={right} alt='' width={20} height={20}/>
                </div>
            </div>

        </div>
      ))}
    </div>
  )
}

export default Description
