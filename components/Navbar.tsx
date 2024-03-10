import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BookingButton from './BookingButton'
import { NAV_LINKS } from '@/constants'


const Navbar = () => {
  return (
    <nav className='border-2 bg-blue-80 flexBetween max-w-full padding-container relative z-30 py-5'>
      <Link className='ml-4'href="/">
        <Image className=''src="/white_logo.png" alt="logo" width={150} height={750}/>
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link)=>(
          <Link href={link.href} key={link.key} className='regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
            {link.label}
          </Link>
        ))}
      </ul>
      <div className='lg:flexCenter hidden'>
        <BookingButton 
        type="button"
        title="Booking"
        icon=""
        variant="btn_white"
        />
      </div>

      <Image 
      src="menu.svg"
      alt="menu"
      width={32}
      height={32}
      className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar
