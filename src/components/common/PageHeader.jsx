function PageHeader({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          {title}
        </h1>

        <p className="text-slate-500 mt-2">
          {subtitle}
        </p>
      </div>

      {buttonText && (
        <button
          onClick={onButtonClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition font-medium"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default PageHeader;