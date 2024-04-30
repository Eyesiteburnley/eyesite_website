import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, NAV_LINKS } from '@/constants'

import BookingButton from './BookingButton'

const Footer = () => {
  return (
    <footer className='flexCenter p-5 bg-blue-80'>
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="flex lg:flex-col lg:w-auto md:w-auto sm:flex-row gap-[10%] sm:w-full sm:justify-between">
            <Link href="/" className='mb-10'>
              <Image src='/white_logo.png' alt='logo' width={150} height={60}/>
            </Link>
            <BookingButton 
              type="button"
              title="Booking"
              icon=""
              variant="btn_white"
            />
          </div>

          <div className="flex flex-wrap gap-10 sm:justify-around md:flex-1">
              <FooterColumn title="Quick Links" key={''}>
                <ul className='regular-14 flex flex-col gap-4 text-white'>
                  {NAV_LINKS.map((link) => (
                    <li key={link.key}>
                      <a
                        href={link.href}
                        className="py-4 cursor-pointer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title} key={''}>
                {FOOTER_CONTACT_INFO.links.map((link)=>(
                  <Link
                   href='/' 
                   key={link.label}
                   className='flex gap-4 md:flex-col lg:flex-row hover:-translate-x-5 transition-transform duration-300'
                   >
                    <p className='whitespace-nowrap text-white'>
                      {link.label}:
                    </p>
                    <p className='medium-14 whitespace-nowrap text-white'>
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
          
          </div>
        </div>
      </div>
    </footer>
  )
}

type FooterColumnProp ={
  title:string;
  children:React.ReactNode;
}

const FooterColumn = ({title, children}:FooterColumnProp) =>{
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap text-white'>{title}</h4>
      <span className=''>{children}</span>
    </div>
  )
}

export default Footer
