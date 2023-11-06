import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

const BarChartBox = ({ title, color, chartData, dataKey }) => {
  return (
    <div className="box">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div>
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width="100%" height="100%" data={chartData}>
            <Tooltip
              contentStyle={{ background: "#1e293b", borderRadius: "4px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill: "none"}}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
