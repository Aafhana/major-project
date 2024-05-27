import { SafeUser } from "@/app/types";

import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  return ( 
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
      <Container>
        <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
            bg-purple-300
            rounded-lg
          "
        >
          <Logo />
          {/* <h1 className="text-xl md:text-2xl font-bold items-center ">Department Of Computer Science and Enginering</h1> */}
          <Search />
          <UserMenu currentUser={currentUser} />
          
        </div>
        
      </Container>
    </div>
    <Categories />
  </div>
  );
}


export default Navbar;