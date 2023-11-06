import { useRouter } from "next/router";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { singleUsers } from "@/utils/data";
import { useEffect, useState } from "react";

const UserId = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    console.log(router.query);
    setCurrentUser(
      singleUsers?.map((user) => {
        return user.id == userId ? user : null;
      })[0] || {}
    );
  }, []);

  return (
    <div className="md:flex">
      {/* User Info */}
      <div className=" flex-1">
        {/* Info */}
        <div className="">
          <div className="flex flex-wrap items-center gap-5 mb-4">
            {currentUser?.img && (
              <img
                src={currentUser.img}
                alt={currentUser.img}
                className="w-24 h-24 rounded-2xl object-cover"
              />
            )}
            <h1 className="text-3xl font-semibold">{currentUser.title}</h1>
            <button
              type="button"
              className="bg-red-400 px-2 py-1 rounded-md cursor-pointer"
            >
              Update
            </button>
          </div>
          <div className="text-lg">
            {Object.entries(currentUser.info || {}).map((item) => (
              <div className="py-4" key={item[0]}>
                <span className="font-semibold me-2 capitalize">
                  {item[0]}:
                </span>
                <span>{item[1]}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="w-[90%] h-0 border-[.5px] border-soft/25 my-5" />

        {/* Charts */}
        <div className="mt-12 lg:w-4/5 h-96">
          {currentUser.chart && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={currentUser.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {currentUser.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Activities */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-5 text-soft/70">
          Latest Activities
        </h2>
        {currentUser.activities && (
          <ul className="">
            {currentUser.activities.map((activity) => (
              <li
                className="relative pt-12  border-l-[1px] border-red-400 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-3 after:h-3 after:rounded-full after:bg-red-400 after:-translate-x-1/2"
                key={activity.text}
              >
                <div className="bg-red-400/20 p-4">
                  <p>{currentUser.title + " " + activity.text}</p>
                  <time className="text-xs">{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserId;
