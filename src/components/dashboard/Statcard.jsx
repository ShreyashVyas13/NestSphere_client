function StatCard({
  title,
  value,
  icon: Icon,
  color,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-lg transition">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${color}`}
        >
          <Icon className="text-white" size={28} />
        </div>

      </div>

    </div>
  );
}

export default StatCard;