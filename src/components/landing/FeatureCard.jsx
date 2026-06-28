function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      
      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
        <Icon className="text-blue-600 w-7 h-7" />
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;