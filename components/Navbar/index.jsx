import {
  ArrowsPointingOutIcon,
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import { toggleMenu } from "@/redux/features/modal/toggleModalSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <header className="flex items-center justify-between p-5">
      {/* Logo */}
      <div className="text-xl font-bold text-primary">Rocketadmin</div>
      {/* Icons */}
      <div className="flex gap-6">
        <div className="hidden md:inline-flex gap-3">
          <MagnifyingGlassIcon className="pointer-icon" />
          <Squares2X2Icon className="pointer-icon" />
          <ArrowsPointingOutIcon className="pointer-icon" />
          <div className="relative">
            <BellIcon className="pointer-icon" />
            <span className="flex items-center justify-center absolute bg-red-600 w-4 h-4 rounded-full -top-3 -right-3 text-xs">
              1
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <UserCircleIcon className="pointer-icon" />
          Rocket
        </div>
        <Cog6ToothIcon className="pointer-icon hidden lg:inline-block" />
        <Bars3Icon
          className="pointer-icon lg:hidden"
          onClick={() => dispatch(toggleMenu())}
        />
      </div>
    </header>
  );
};

export default Navbar;
