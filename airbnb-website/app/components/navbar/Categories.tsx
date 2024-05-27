'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { MdOutlineSportsEsports } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { TbCircleLetterI, TbSquareRoundedLetterP } from "react-icons/tb";
import { TbCircleLetterP } from "react-icons/tb";
import { TbCircleLetterT } from "react-icons/tb";

import { TbSquareRoundedLetterT } from "react-icons/tb";
import { TbSquareRoundedLetterC } from "react-icons/tb";
import { TbHexagonLetterK } from "react-icons/tb";
import { TbSquareRoundedLetterS } from "react-icons/tb";



import { 
  GiBarn,  
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  
  
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [

  {
    label: 'Intent',
    icon: AiFillThunderbolt,
    description: 'CSE !'
  },
  {
    label: 'Interface',
    icon: TbCircleLetterI,
    description: 'Branch fest!'
  },
  {
    label: 'Articles/Papers',
    icon: TbSquareRoundedLetterP,
    description: 'Coding event!'
  },
  {
    label: 'Kalotsava',
    icon: TbHexagonLetterK,
    description: 'kalotsava!'
  },
  {
    label: 'Seminar/Webnar',
    icon: TbSquareRoundedLetterS,
    description: 'Seminar!'
  },
  
  {
    label: 'Technodea',
    icon: TbSquareRoundedLetterT,
    description: 'Technodea!'
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;