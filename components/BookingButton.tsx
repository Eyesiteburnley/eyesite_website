import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ButtonProps={
    type:'button' | 'submit';
    title:string;
    icon?:string;
    variant:string;
}

const BookingButton = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <Link href={'https://blinkoms.co.uk/blinkdiary/eyesite/booking'}>
      <button
        className={`flexCenter gap-3 rounded-full border ${variant} cursor-pointer`}
        type={type}
      >
          {icon&& <Image src={icon} alt={title} width={24} height={24}/>}
          <label className='bold-13 whitespace-nowrap cursor-pointer'>{title}</label>
      </button>
    </Link>
  )
}

export default BookingButton
