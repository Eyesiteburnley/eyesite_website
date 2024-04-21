import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core';

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGlasses } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



interface serviceProps{
  backgroundImage:string;
  title:string;
  subtitle:string;
  readMore:string;
}

const Service=({backgroundImage,title,subtitle,readMore}:serviceProps)=>{
  return(
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:py-10 ">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-blue-80 p-4">
            <FontAwesomeIcon icon={faGlasses} style={{width:'28px', height:'28px'}}/>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='regular-14 text-white'>{subtitle}</p>
          </div>
        </div>
        <p className="bold-16 md:bold-20 text-white flex flex-row flexCenter">{readMore}<FontAwesomeIcon icon={faArrowRight} style={{width:'20px', height:'20px'}}/></p>
      </div>
    </div>
  )
}
const Services = () => {
  return (
    <section className=" 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 ">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
      <Service 
        backgroundImage="bg-bg-img-3"
        title="Eye Test"
        subtitle="OCT Scan"
        readMore="Read More  "
      />
      <Service 
        backgroundImage="bg-bg-img-4"
        title="Designer Eyewear"
        subtitle="Take a Look at some of the brands we stock"
        readMore="Read More  "
      />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-80 p-8 lg:max-w-[500px] xl:max-w-[743px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>Here Are the <strong>Services</strong> that we provide</h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">Here is what we provide, if you would like to know more, click on the images and they will take you the specific pagess</p>
          
        </div>

      </div>
    </section>
  )
}

export default Services
