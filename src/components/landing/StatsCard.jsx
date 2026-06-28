function StatsCard({ number, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300">
      <h2 className="text-4xl font-bold text-blue-600">
        {number}
      </h2>

      <p className="mt-3 text-gray-600 font-medium">
        {title}
      </p>
    </div>
  );
}

export default StatsCard;