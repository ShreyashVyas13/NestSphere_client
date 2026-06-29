import { Search } from "lucide-react";

function SearchBar({
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="relative w-full md:w-96">

      <Search
        size={18}
        className="absolute left-4 top-4 text-gray-400"
      />

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}

export default SearchBar;