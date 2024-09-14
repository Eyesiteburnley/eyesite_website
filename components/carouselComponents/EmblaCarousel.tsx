import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "/app/globals.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import { REVIEWS } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaStar } from "react-icons/fa";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface reviewProps {
  avatar: string;
  name: string;
  review: string;
  time:string;
}

const ReviewBox = ({ avatar, name, review, time }: reviewProps) => {
  return (
    <Card className="lg:w-[500px] w-[25rem] bg-blue-80 h-full">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={avatar}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-white">
              {name}
            </h4>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>
          {review}
        </p>
        <span className="pt-2">
        <FontAwesomeIcon icon={faStar} className="text-yellow-400"/><FontAwesomeIcon icon={faStar} className="text-yellow-400"/><FontAwesomeIcon icon={faStar} className="text-yellow-400"/><FontAwesomeIcon icon={faStar} className="text-yellow-400"/><FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{time}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {REVIEWS.map((link) => (
            //small screen one
                   <div className="embla_slide_sm h-full p-5 " key={link.name}>
                     <ReviewBox
                       avatar={link.avatar}
                       name={link.name}
                       review={link.review}
                       time={link.time}
                     />
                   </div>
               
            
          
          //normal screen one
        ))}
      </div>
    </div>
  );
}
