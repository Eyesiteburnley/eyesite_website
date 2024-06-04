import React from "react";
import { OFFERS } from "@/constants";
import { faGlasses,faKitMedical, faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface offerProps {
  service: string;
  offerDetails: string;
}

const OfferBox = ({ service, offerDetails}: offerProps) => {
  return (
    <div className="flex bg-white items-center p-10 rounded-5xl border-2 border-black m-2">
      <div className="flex flex-col justify-between">
        <h3 className="bold-32 lg:bold-32">{service}</h3>
        <p className="regular-16">{offerDetails}</p>
      </div>
      <div className="flex flex-col items-end w-1/3">
        <FontAwesomeIcon icon={faGlasses} style={{width:'30px', height:'30px'}} />
        <p className="self-end regular-16 text-gray-30">Expires 06/24</p>
      </div>
    </div>
  );
};

const CurrentOffers = () => {
  console.log(OFFERS[0]);
  return (
    <section className="w-full bg-blue-80 flex flex-col lg:flex-row">
      <div className="max-container padding-container flex flex-col gap-20 py-10 sm:pb-10 md:gap-28 lg:py-20 xl:flex-row bg-blue-80">
        <div className="relative flex flex-1 flex-col xl:w-1/2">
          <h2 className="bold-52 lg:bold-88 text-white">
            Some of Our Current Offers
          </h2>
          <div>
            <p className="regular-16 text-white m-5 ml-0">
              What we currently have going on at Eyesite Opticians
            </p>
          </div>
        </div>
        <div className="relative flex flex-1 flex-col xl:w-1/2 overflow-y-scroll overflow-hidden h-[45vh]">
            <div>
                <ul>
                    {OFFERS.map((link) =>(
                        <OfferBox
                            key={link.service}
                            service={link.service}
                            offerDetails={link.offerDetails}                    />
                    ))}
                </ul>
                {/* <OfferBox 
                service={OFFERS[0].service}
                offerDetails={OFFERS[0].offerDetails}
                />
                <OfferBox 
                service={OFFERS[0].service}
                offerDetails={OFFERS[0].offerDetails}
                />
                <OfferBox 
                service={OFFERS[0].service}
                offerDetails={OFFERS[0].offerDetails}
                /> */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentOffers;
