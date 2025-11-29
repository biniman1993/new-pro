import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface FilterOptions {
  priceRange: [number, number];
  inStock: boolean;
}

interface FiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  maxPrice: number;
}

const Filters = ({ filters, onFiltersChange, maxPrice }: FiltersProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-10 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
        
        {/* Custom Range Slider */}
        <div className="w-full md:w-2/3 space-y-4">
          <div className="flex justify-between text-sm font-medium text-gray-600">
            <span>Price Limit</span>
            <span className="text-[#1c4c97] font-bold">
              ${filters.priceRange[0]} - ${filters.priceRange[1]}
            </span>
          </div>
          <input 
            type="range"
            min={0}
            max={maxPrice}
            step={50}
            value={filters.priceRange[1]}
            onChange={(e) => onFiltersChange({ 
              ...filters, 
              priceRange: [0, parseInt(e.target.value)] 
            })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1c4c97] focus:outline-none focus:ring-2 focus:ring-[#1c4c97]/20"
          />
        </div>

        {/* Custom Toggle Switch */}
        <div className="w-full md:w-auto flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
          <button
            role="switch"
            aria-checked={filters.inStock}
            onClick={() => onFiltersChange({ ...filters, inStock: !filters.inStock })}
            className={cn(
              "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
              filters.inStock ? "bg-[#1c4c97]" : "bg-gray-200"
            )}
          >
            <span
              className={cn(
                "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
                filters.inStock ? "translate-x-5" : "translate-x-0"
              )}
            />
          </button>
          <label className="cursor-pointer font-medium text-gray-700" onClick={() => onFiltersChange({ ...filters, inStock: !filters.inStock })}>
            In Stock Only
          </label>
        </div>

      </div>
    </div>
  );
};

export default Filters;