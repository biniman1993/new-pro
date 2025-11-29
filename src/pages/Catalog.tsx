import { useState, useMemo } from 'react';
import { catalogData, getAllCategories, getCategoryProducts } from '../data/catalogData';
import CategoryTabs from '../Components/CategoryTabs';
import SearchBar from '../Components/SearchBar';
import Filters, { FilterOptions } from '../Components/Filters';
import ItemCard from '../Components/ItemCard';
import { Package, SearchX } from 'lucide-react';

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('Desktops');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 5000],
    inStock: false
  });

  const categories = getAllCategories();
  const categoryProducts = getCategoryProducts(activeCategory);

  const maxPrice = useMemo(() => {
    return Math.max(
      ...Object.values(catalogData)
        .flatMap(cat => cat.products)
        .map(prod => prod.price || 0)
    );
  }, []);

  const filteredProducts = useMemo(() => {
    return categoryProducts.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.specs && product.specs.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase())));

      const priceMatch = !product.price || (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]);

      const stockMatch = !filters.inStock || product.count > 0;

      return matchesSearch && priceMatch && stockMatch;
    });
  }, [categoryProducts, searchQuery, filters]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header with Gradient */}
      <header className="relative overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] z-0" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7b16]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1c4c97]/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Tech<span className="text-[#ff7b16]">Catalog</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Discover the latest high-performance technology curated for professionals and enthusiasts.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 pb-24 -mt-12 relative z-20">
        
        <div className="bg-white/50 backdrop-blur-xl border border-white/50 rounded-3xl p-6 md:p-8 shadow-xl shadow-indigo-900/5 mb-12">
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          <Filters
            filters={filters}
            onFiltersChange={setFilters}
            maxPrice={maxPrice}
          />
        </div>

        <div className="space-y-6">
          {filteredProducts.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                  <Package size={18} className="text-[#1c4c97]" />
                  <p className="text-gray-700 font-medium text-sm">
                    Showing <span className="text-[#1c4c97] font-bold">{filteredProducts.length}</span> results
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="animate-in fade-in zoom-in-95 duration-500 fill-mode-forwards"
                  >
                    <ItemCard product={product} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-dashed border-gray-200 text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <SearchX size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-6">
                We couldn't find any matches for "{searchQuery}" in this category. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilters({ priceRange: [0, maxPrice], inStock: false });
                }}
                className="px-6 py-2.5 bg-[#1c4c97] hover:bg-[#153975] text-white rounded-full font-medium transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="text-center px-4 pt-8 md:pt-0">
              <div className="text-4xl font-bold text-[#1c4c97] mb-2">500+</div>
              <p className="text-gray-500 font-medium">Premium Products</p>
            </div>
            <div className="text-center px-4 pt-8 md:pt-0">
              <div className="text-4xl font-bold text-[#ff7b16] mb-2">24/7</div>
              <p className="text-gray-500 font-medium">Expert Support</p>
            </div>
            <div className="text-center px-4 pt-8 md:pt-0">
              <div className="text-4xl font-bold text-[#1c4c97] mb-2">2k+</div>
              <p className="text-gray-500 font-medium">Trusted Customers</p>
            </div>
          </div>
          
          <div className="mt-16 text-center text-gray-400 text-sm">
            &copy; 2025 TechCatalog. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;