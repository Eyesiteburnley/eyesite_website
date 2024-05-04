import { faGlasses } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Image from 'next/image'

const OCTSummary = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <FontAwesomeIcon icon={faGlasses} style={{width:'50px',height:'50px'}} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-blue-80">
          we care for your eyecare
        </p>
        <div className="flex flex-wrap justifu between gap-5 lg:gap-10">
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>We provide OCT Scans</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
          An Optical Coherence Tomography (OCT) scan uses (non-invasive) light waves to produce a 3D scan of the layers of the retina. It allows the Optometrist to see the layers of the retina rather than just the surface. It helps the Optometrist to diagnose and manage eye conditions. It can be used as a baseline to monitor changes over time.
          </p>
        </div>
      </div>
      <div className="flexCenter relative lg:w-3/4 bg-blue-80 p-20 rounded-5xl">
        <Image 
          src="/machine Large.jpeg"
          alt="OCT Scan"
          width={600}
          height={500}
          className=' object-cover object-center 2xl:rounded-5xl'
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl shadow-md md:left-[5%] lg:top-10">
          <div className="flexBetween flex-col ">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className='regular-16 text-gray-20'>The scan can help us detect</p>
              </div>
              <ul className='list-disc p-5'>
                <li>Glaucoma</li>
                <li>Age related Macular Degeneration</li>
                <li>Detached Retina</li>
                <li>Macula Hole</li>
                <li>Optic nerve Inflammation</li>
                <li>Retinal Vein Occlusion</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default OCTSummary;
