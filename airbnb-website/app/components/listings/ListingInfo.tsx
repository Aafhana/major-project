'use client';

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

// import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

const Map = dynamic(() => import('../Map'), { 
  ssr: false 
});

interface ListingInfoProps {
  user: SafeUser,
  description: string;
  descriptions:string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category: {
    icon: IconType,
    label: string;
    description: string;
  } | undefined
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  descriptions,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  // const { getByValue } = useCountries();

  // const coordinates = getByValue(locationValue)?.latlng

  return ( 
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-600
          "
        >
          <div>
            {guestCount} Participants
          </div>
          <div>
            {roomCount} Teams
          </div>
          {/* <div>
            {bathroomCount} bathrooms
          </div> */}
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 my-4"/>
      {category && (
        <ListingCategory
          icon={category.icon} 
          label={category?.label}
          description={category?.description} 
        />
      )}
      <hr className="border-t-2 border-gray-300 my-4"/>
      
      <div className="
      text-lg font-light text-neutral-600">
        {description}
      </div>
      <hr />

      <div className="
       text-lg
       font-light
        text-neutral-600
        "><span className="text-black font-bold">Link:</span>
        <a 
        href={descriptions} 
        target="_blank" 
        rel="noopener noreferrer"
        className="break-words">
          {descriptions}
        </a>
      </div>
      {/* <Map center={coordinates} /> */}
    </div>
   );
}
 
export default ListingInfo;