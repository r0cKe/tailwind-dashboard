import {
  ArrowUpOnSquareIcon,
  Bars3BottomLeftIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  FilmIcon,
  HomeIcon,
  PencilSquareIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

const Menu = () => {
  const isMenuOpen = useSelector(
    (state) => state.toggleModalReducer.toggleMenu
  );
  return (
    <div
      className={`fixed z-50 top-0 ${
        isMenuOpen ? "left-0" : "-left-[100%]"
      } transition-all duration-500 ease-in-out w-64 h-full min-h-screen overflow-y-auto md:h-auto lg:static py-2 px-5 bg-dark_bg border-r-2 border-dark`}
    >
      <MenuItem
        title="MAIN"
        items={[
          { icon: <HomeIcon className="icon" />, text: "Home" },
          { icon: <UserIcon className="icon" />, text: "Profile" },
        ]}
      />
      <MenuItem
        title="LISTS"
        items={[
          {
            icon: <UserGroupIcon className="icon" />,
            text: "Users",
            href: "/users",
          },
          {
            icon: <ShoppingCartIcon className="icon" />,
            text: "Products",
            href: "/products",
          },
          {
            icon: <ClipboardDocumentListIcon className="icon" />,
            text: "Orders",
          },
          { icon: <FilmIcon className="icon" />, text: "Posts" },
        ]}
      />
      <MenuItem
        title="GENERAL"
        items={[
          { icon: <Squares2X2Icon className="icon" />, text: "Elements" },
          { icon: <PencilSquareIcon className="icon" />, text: "Notes" },
          { icon: <Bars3BottomLeftIcon className="icon" />, text: "Forms" },
          { icon: <CalendarDaysIcon className="icon" />, text: "Calender" },
        ]}
      />
      <MenuItem
        title="MAINTENANCE"
        items={[
          { icon: <Cog6ToothIcon className="icon" />, text: "Settings" },
          {
            icon: <ArrowUpOnSquareIcon className="icon" />,
            text: "Backups",
          },
        ]}
      />
      <MenuItem
        title="ANALYTICS"
        items={[
          { icon: <ChartBarIcon className="icon" />, text: "Charts" },
          {
            icon: <DocumentTextIcon className="icon" />,
            text: "Logs",
          },
        ]}
      />
    </div>
  );
};

export default Menu;
