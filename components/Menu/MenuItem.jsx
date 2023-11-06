import Link from "next/link";
import { toggleMenu } from "@/redux/features/modal/toggleModalSlice";
import { useDispatch } from "react-redux";

const MenuItem = ({ title, items = [] }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 mb-5">
      <span className="text-xs font-thin text-slate-400">{title}</span>
      {items.map(({ icon, text, href }, index) => (
        <Link
          href={href || "/"}
          key={`${text}-${index}`}
          className="flex items-center gap-2 p-2 hover:bg-slate-600 hover:rounded-md hover:text-purple-400"
          onClick={() => dispatch(toggleMenu())}
        >
          {icon}
          <p className="">{text}</p>
        </Link>
      ))}
    </div>
  );
};

export default MenuItem;
