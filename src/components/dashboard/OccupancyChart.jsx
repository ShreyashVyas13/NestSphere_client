import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function OccupancyChart({
  occupied,
  vacant,
}) {
  const data = [
    {
      name: "Occupied",
      value: occupied,
    },
    {
      name: "Vacant",
      value: vacant,
    },
  ];

  const COLORS = [
    "#f97316",
    "#22c55e",
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">

      <h2 className="text-lg font-semibold mb-6">
        Flat Occupancy
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map(
              (entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              )
            )}
          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}

export default OccupancyChart;