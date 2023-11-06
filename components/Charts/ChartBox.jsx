import { FireIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const ChartBox = ({
  color = "#8884d8",
  title = "Total Users",
  value = 11.238,
  percentage = 45,
  dataKey = "pv",
  duration = "this month",
  chartData,
}) => {
  return (
    <div className="box flex h-full">
      <div className="flex flex-[3] flex-col justify-between">
        <div className="flex items-center gap-3">
          <FireIcon className="icon" style={{ color: color }} />
          <span>{title}</span>
        </div>
        <h1 className="text-2xl font-bold">{value}</h1>
        <Link href="/" style={{ color: color }}>
          view all
        </Link>
      </div>
      <div className="flex-[2] flex flex-col justify-between items-end">
        <div className="w-full h-full">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 0, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-right">
          <span
            className="text-lg font-bold"
            style={{ color: percentage < 0 ? "tomato" : "limegreen" }}
          >
            {percentage}%
          </span>
          <span className="block text-sm">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
