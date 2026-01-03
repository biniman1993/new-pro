import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CategoryFiltersProps {
  filterOptions: Record<string, string[]>;
  activeFilters: Record<string, string[]>;
  onFilterChange: (filterType: string, value: string) => void;
  onClearFilters: () => void;
}

const CategoryFilters = ({
  filterOptions,
  activeFilters,
  onFilterChange,
  onClearFilters,
}: CategoryFiltersProps) => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    availability: true,
    brands: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const getFilterCount = () => {
    return Object.values(activeFilters).reduce(
      (total, values) => total + values.length,
      0
    );
  };

  const clearFilterType = (filterType: string) => {
    const newFilters = { ...activeFilters };
    delete newFilters[filterType];
    // This would need to be handled by parent
    // For now, we'll clear individual checkboxes
    filterOptions[filterType]?.forEach((value) => {
      if (activeFilters[filterType]?.includes(value)) {
        onFilterChange(filterType, value); // Toggle to remove
      }
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Filters</h3>
        <div className="flex items-center gap-2">
          {getFilterCount() > 0 && (
            <button
              onClick={onClearFilters}
              className="text-sm text-[#1c4c97] hover:text-[#153975] font-medium flex items-center gap-1"
            >
              <X size={14} />
              Clear all
            </button>
          )}
        </div>
      </div>

      <div className="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
        {Object.entries(filterOptions)
          .filter(([_, options]) => options.length > 0) // Only show filter sections with options
          .map(([filterType, options]) => (
            <div
              key={filterType}
              className="border-b border-gray-100 pb-6 last:border-0"
            >
              <button
                onClick={() => toggleSection(filterType)}
                className="flex items-center justify-between w-full text-left mb-3"
              >
                <h4 className="font-semibold text-gray-800 capitalize">
                  {filterType.replace(/([A-Z])/g, " $1").trim()}
                </h4>
                {expandedSections[filterType] ? (
                  <ChevronUp size={18} className="text-gray-400" />
                ) : (
                  <ChevronDown size={18} className="text-gray-400" />
                )}
              </button>

              {expandedSections[filterType] && (
                <div className="space-y-3">
                  {options.map((option) => {
                    const isActive =
                      activeFilters[filterType]?.includes(option) || false;
                    return (
                      <label
                        key={option}
                        className={cn(
                          "flex items-center gap-3 cursor-pointer group",
                          "transition-colors duration-150"
                        )}
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={isActive}
                            onChange={() => onFilterChange(filterType, option)}
                            className="sr-only"
                          />
                          <div
                            className={cn(
                              "w-4 h-4 border-2 rounded flex items-center justify-center transition-all duration-200",
                              isActive
                                ? "border-[#1c4c97] bg-[#1c4c97]"
                                : "border-gray-300 bg-white group-hover:border-gray-400"
                            )}
                          >
                            {isActive && (
                              <svg
                                className="w-2.5 h-2.5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span
                          className={cn(
                            "text-sm transition-colors duration-150",
                            isActive
                              ? "text-gray-900 font-medium"
                              : "text-gray-600 group-hover:text-gray-800"
                          )}
                        >
                          {option}
                        </span>
                        {filterType === "availability" && (
                          <span
                            className={cn(
                              "ml-auto text-xs px-2 py-0.5 rounded-full",
                              option === "In stock"
                                ? "bg-green-100 text-green-700"
                                : option === "Out of stock"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                            )}
                          >
                            {option === "In stock"
                              ? "✓"
                              : option === "Out of stock"
                              ? "✗"
                              : "!"}
                          </span>
                        )}
                      </label>
                    );
                  })}
                </div>
              )}

              {/* Show selected filters for this section */}
              {activeFilters[filterType]?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {activeFilters[filterType].map((value) => (
                    <span
                      key={value}
                      className="inline-flex items-center gap-1 bg-blue-50 text-[#1c4c97] text-xs px-2 py-1 rounded"
                    >
                      {value}
                      <button
                        onClick={() => onFilterChange(filterType, value)}
                        className="hover:text-[#153975]"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>

      {/* Price Range Filter (kept from original) */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-4">Price Range</h4>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Min: $0</span>
            <span className="text-gray-600">Max: $5000</span>
          </div>
          <div className="flex gap-3">
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1c4c97]"
            />
          </div>
          <div className="flex justify-between text-sm font-medium text-[#1c4c97]">
            <span>$0</span>
            <span>$5000</span>
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      {getFilterCount() > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">
              Active Filters
            </span>
            <span className="text-xs bg-[#1c4c97] text-white px-2 py-0.5 rounded-full">
              {getFilterCount()}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([type, values]) =>
              values.map((value) => (
                <span
                  key={`${type}-${value}`}
                  className="inline-flex items-center gap-1 bg-blue-50 text-[#1c4c97] text-xs px-2 py-1 rounded"
                >
                  {type}: {value}
                  <button
                    onClick={() => onFilterChange(type, value)}
                    className="hover:text-[#153975]"
                  >
                    <X size={12} />
                  </button>
                </span>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryFilters;
