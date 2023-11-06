import { topDealUsers } from "@/utils/data";
import Image from "next/image";

const UserItem = ({ img, username, email, amount }) => {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
        <img src={img} alt={username} className="w-10 h-10 object-cover rounded-full"/>
        <div className="flex flex-col">
            <p className="text-sm font-[500]">{username}</p>
            <span className="text-xs">{email}</span>
        </div>
      </div>
      <span className="">${amount}</span>
    </div>
  );
};

const TopBox = () => {
  return (
    <div className="box md:col-span-2 lg:col-span-1 lg:row-span-3">
      <h1 className="text-3xl font-bold mb-5">Top Deals</h1>
      {topDealUsers.map((user, index) => {
        return <UserItem key={`${user.username}-${index}`} {...user} />;
      })}
    </div>
  );
};

export default TopBox;
