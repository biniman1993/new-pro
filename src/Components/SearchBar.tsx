import { Search } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar = ({ searchQuery, onSearchChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-xl mx-auto mb-6 group">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1c4c97] transition-colors">
        <Search size={20} />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search products, specs, or details..."
        className="w-full py-4 pl-12 pr-6 bg-white border border-gray-200 rounded-2xl shadow-sm outline-none focus:border-[#1c4c97] focus:ring-4 focus:ring-[#1c4c97]/10 transition-all duration-300 placeholder:text-gray-400 text-gray-700"
      />
    </div>
  );
};

export default SearchBar;