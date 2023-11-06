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

import { singleProducts } from "@/utils/data";
import { useEffect, useState } from "react";

const ProdId = () => {
  const router = useRouter();
  const { prodId } = router.query;
  const [currProduct, setCurrProduct] = useState({});

  useEffect(() => {
    setCurrProduct(
      singleProducts?.map((prod) => {
        return prod.id == prodId ? prod : null;
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
            {currProduct?.img && (
              <img
                src={currProduct.img}
                alt={currProduct.img}
                className="w-24 h-24 rounded-2xl object-cover"
              />
            )}
            <h1 className="text-3xl font-semibold">{currProduct.title}</h1>
            <button
              type="button"
              className="bg-red-400 px-2 py-1 rounded-md cursor-pointer"
            >
              Update
            </button>
          </div>
          <div className="text-lg">
            {Object.entries(currProduct.info || {}).map((item) => (
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
          {currProduct.chart && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={currProduct.chart.data}
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
                {currProduct.chart.dataKeys.map((dataKey) => (
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
        {currProduct.activities && (
          <ul className="">
            {currProduct.activities.map((activity) => (
              <li
                className="relative pt-12  border-l-[1px] border-red-400 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-3 after:h-3 after:rounded-full after:bg-red-400 after:-translate-x-1/2"
                key={activity.text}
              >
                <div className="bg-red-400/20 p-4">
                  <p>{currProduct.title + " " + activity.text}</p>
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

export default ProdId;
