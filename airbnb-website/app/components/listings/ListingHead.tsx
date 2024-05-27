'use client';

import Image from "next/image";

// import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  // locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  // locationValue,
  imageSrc,
  id,
  currentUser
}) => {
  // const { getByValue } = useCountries();

  // const location = getByValue(locationValue);

  return ( 
    <>
      <Heading
        title={title}
        // subtitle={`${location?.region}, ${location?.label}`}// h-[115vh]
      />
      <div className="
          w-full
          overflow-hidden 
          rounded-xl
          relative
          bg-purple-300
          h-auto  // Set height to auto to allow the div to adjust based on image aspect ratio
        "
      >
        <Image
          // src={imageSrc}
          // fill
          // className="object-cover w-full"
          // alt="Image"
          src={imageSrc}
          className="object-cover w-full"
          alt="Image"
          width={1920} // Set a width for the image (adjust as needed)
          height={1080} // Set a height for the image (adjust as needed)
        
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton 
            listingId={id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </>
   );
}
 
export default ListingHead;