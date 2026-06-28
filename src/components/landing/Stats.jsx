import StatsCard from "./StatsCard";

function Stats() {

  const stats = [
    {
      number: "500+",
      title: "Residents"
    },
    {
      number: "50+",
      title: "Societies"
    },
    {
      number: "1500+",
      title: "Maintenance Bills"
    },
    {
      number: "99%",
      title: "Happy Users"
    }
  ];

  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">
            Trusted by Growing Communities
          </h2>

          <p className="text-gray-600 mt-4">
            Helping societies simplify management every day.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <StatsCard
              key={index}
              number={item.number}
              title={item.title}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;