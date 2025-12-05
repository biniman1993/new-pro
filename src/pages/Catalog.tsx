import { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { catalogData, getCategoryProducts, getMainCategory, getSubcategories } from '../data/catalogData';
import CategoryTabs from '../Components/CategoryTabs';
import SearchBar from '../Components/SearchBar';
import ItemCard from '../Components/ItemCard';
import { Package, SearchX, Filter } from 'lucide-react';
import CategoryFilters from '../Components/CategoryFilters';

const Catalog = () => {
  // Fix: Remove TypeScript generic if not using TypeScript strictly
  const { category } = useParams();
  
  // Set initial category from URL or default to first subcategory of Desktop
  const [activeCategory, setActiveCategory] = useState(category || 'BusinessDesktop');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(true);
  
  // Get main category from active subcategory
  const mainCategory = getMainCategory(activeCategory);
  
  // Get subcategories for the current main category
  const subcategories = getSubcategories(mainCategory) || [];
  
// Get category-specific filter options
const getCategoryFilterOptions = (): Record<string, string[]> => {
  switch (mainCategory) {
    case 'Desktop':
      return {
        availability: ['In stock', 'Out of stock', 'On backorder'],
        brands: ['SMART', 'Lenovo', 'MSI', 'Acer', 'DELL', 'Asus', 'HP', 'Apple', 'Walton'],
        ram: ['4 GB', '8 GB', '16 GB', '32 GB'],
        ssd: ['128 GB', '256 GB', '512 GB'],
        generation: ['Intel 10th Gen', 'Intel 12th Gen', 'Intel 13th Gen', 'Intel 14th Gen (Upcoming)'],
        screenSize: ['15-17″ Inch', '21-22″ Inch', '23-25″ inch', '26-30″ inch'],
        graphics: ['Shared / Integrated'],
        writeSpeed: ['Up to 500MB/s'],
        // Add empty arrays for other filter types to maintain consistency
        resolution: [],
        refreshRate: [],
        socket: [],
        series: [],
        capacity: [],
        pcieGen: [],
        busSpeed: [],
        panelType: [],
        monitorFeatures: [],
        type: [],
        inputType: [],
        networkInterface: [],
        bandwidthRate: [],
        switchFeatures: [],
        motherboardSpeciality: [],
        routerType: [],
        dataSpeed: [],
        additionalFeature: []
      };
    case 'Laptop':
      return {
        availability: ['In stock', 'Out of stock', 'On backorder'],
        brands: ['GigaByte', 'SMART', 'Chuwi', 'Avita', 'Microsoft', 'Infinix', 'Lenovo', 'MSI', 'Acer', 'DELL', 'Asus', 'HP', 'Apple', 'Walton'],
        ram: ['4 GB', '8 GB', '16 GB', '32 GB', '64 GB'],
        ssd: ['128 GB', '256 GB', '512 GB', '1 TB', '2 TB', '4 TB'],
        generation: ['Intel 10th Gen', 'Intel 11th Gen', 'Intel 12th Gen', 'Intel 13th Gen', 'Intel 14th Gen (Upcoming)', 'Ryzen 3000 Series', 'Ryzen 7000 Series'],
        screenSize: ['15-17″ Inch', '18-20″ Inch'],
        resolution: ['HD or Below'],
        refreshRate: ['240 Hz'],
        graphics: ['Shared / Integrated', 'Dedicated 4GB', 'Dedicated 6GB', 'Dedicated 8GB', 'Dedicated 12GB', 'Dedicated 16GB'],
        socket: ['Intel LGA2011'],
        series: ['Gaming', 'Professional', 'Regular'],
        capacity: ['0-128 GB'],
        pcieGen: ['Gen3'],
        writeSpeed: ['Up to 500MB/s'],
        busSpeed: ['5600MHz'],
        // Add empty arrays for other filter types
        panelType: [],
        monitorFeatures: [],
        type: [],
        inputType: [],
        networkInterface: [],
        bandwidthRate: [],
        switchFeatures: [],
        motherboardSpeciality: [],
        routerType: [],
        dataSpeed: [],
        additionalFeature: []
      };
    case 'Monitor':
      return {
        availability: ['In stock', 'Out of stock', 'On backorder'],
        brands: ['LG', 'Viewsonic', 'GigaByte', 'Dahua', 'BenQ', 'Samsung', 'Xiaomi', 'PHILIPS', 'AOC', 'PC Power', 'Value-TOP', 'Trend Sonic', 'Gigasonic', 'NPC', 'Huawei', 'Lenovo', 'MSI', 'Acer', 'DELL', 'HP', 'Walton'],
        screenSize: ['15-17″ Inch', '18-20″ Inch', '21-22″ Inch', '23-25″ inch', '26-30″ inch', '31 -40 ″ inch'],
        resolution: ['HD or Below', 'FHD', '2K QHD', '4K UHD', '5K'],
        refreshRate: ['60 Hz', '75 HZ', '100 Hz', '120 Hz', '144 Hz', '160 Hz', '165 Hz', '180 Hz', '240 Hz', '360 Hz'],
        series: ['Gaming', 'Professional', 'Regular'],
        panelType: ['TN', 'VA', 'IPS', 'OLED', 'TFT'],
        monitorFeatures: ['Built-in Speaker', 'Gaming', 'AMD Free Sync'],
        type: ['Gaming'],
        inputType: ['VGA', 'HDMI', 'Display Port', 'D-Sub', 'USB', 'USB Type-C', 'Audio Jack'],
        networkInterface: ['2'],
        // Add empty arrays for other filter types
        ram: [],
        ssd: [],
        generation: [],
        graphics: [],
        writeSpeed: [],
        socket: [],
        capacity: [],
        pcieGen: [],
        busSpeed: [],
        bandwidthRate: [],
        switchFeatures: [],
        motherboardSpeciality: [],
        routerType: [],
        dataSpeed: [],
        additionalFeature: []
      };
    case 'Networking':
      return {
        availability: ['In stock', 'Out of stock', 'On backorder'],
        brands: ['TP-Link', 'Netgear', 'Ruijie', 'Safenet', 'Huawei', 'Tenda', 'R&M', 'Cisco', 'Cudy', 'D-Link', 'TRENDnet', 'Mikrotik', 'BDCOM', 'CommScope', 'Zyxel', 'Ficer', 'C-Data', 'Mercusys', 'Vention', 'Netis', 'IP-Com', 'TotoLink', 'SonicWall', 'Grandstream', 'Dintek', 'Rosenberger', 'Cambium', 'Wavlink', 'Ubiquiti', 'Levelone', 'UGreen', 'Dahua', 'Edgecore', 'Linksys', 'Informate', 'Yuanxin', 'Belkin', 'Orico', 'Solitine', 'VSOL', 'TRENDnet', 'GoPro', 'Xtreme', 'Planet', 'Baseus'],
        type: ['Managed Switch', 'UnManaged Switch'],
        networkInterface: ['2', '4 Port', '5 Port', '6 Port', '8 Port', '10 Port', '12 Port', '16 Port', '18 Port', '20 Port', '24 Port', '26 Port', '28 Port', '48 Port & Above'],
        bandwidthRate: ['10/100 Mbps', '10/100/1000 Mbps', '2.5GBPS to Above'],
        switchFeatures: ['Poe Compatible', 'Built-In Power Supply'],
        motherboardSpeciality: ['CrossFireX'],
        routerType: ['Dual Band Router', 'Tri-Band Router', 'Gigabit Router', 'Wireless N Router', 'Gaming Router', 'SIM Router / LTE'],
        dataSpeed: ['Up to 150Mbps', '151Mbps to 300Mbps', '301Mbps to 600Mbps', '601Mbps to 1000Mbps', '1001Mbps & Above'],
        additionalFeature: ['Access Point', 'Modem', 'Repeater', 'Cloud Facility'],
        // Add empty arrays for other filter types
        ram: [],
        ssd: [],
        generation: [],
        screenSize: [],
        graphics: [],
        writeSpeed: [],
        resolution: [],
        refreshRate: [],
        socket: [],
        series: [],
        capacity: [],
        pcieGen: [],
        busSpeed: [],
        panelType: [],
        monitorFeatures: [],
        inputType: []
      };
    default:
      return {
        availability: ['In stock', 'Out of stock'],
        brands: [],
        ram: [],
        ssd: [],
        generation: [],
        screenSize: [],
        graphics: [],
        writeSpeed: [],
        resolution: [],
        refreshRate: [],
        socket: [],
        series: [],
        capacity: [],
        pcieGen: [],
        busSpeed: [],
        panelType: [],
        monitorFeatures: [],
        type: [],
        inputType: [],
        networkInterface: [],
        bandwidthRate: [],
        switchFeatures: [],
        motherboardSpeciality: [],
        routerType: [],
        dataSpeed: [],
        additionalFeature: []
      };
  }
};

  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const categoryFilterOptions = getCategoryFilterOptions();
  const categoryProducts = getCategoryProducts(activeCategory);

  const maxPrice = useMemo(() => {
    return Math.max(
      ...Object.values(catalogData)
        .flatMap(cat => cat.products)
        .map(prod => prod.price || 0)
    );
  }, []);

  // Update active category when URL changes
  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    }
  }, [category]);

  const filteredProducts = useMemo(() => {
    return categoryProducts.filter(product => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.specs && product.specs.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase())));

      if (!matchesSearch) return false;

      // Apply category-specific filters
      for (const [filterType, selectedValues] of Object.entries(filters)) {
        if (selectedValues.length === 0) continue;

        let productMatches = false;
        
        switch (filterType) {
          case 'availability':
            if (selectedValues.includes('In stock') && product.count > 0) productMatches = true;
            if (selectedValues.includes('Out of stock') && product.count === 0) productMatches = true;
            // For backorder, we'll assume some products are marked as backorder
            if (selectedValues.includes('On backorder') && product.count < 5) productMatches = true;
            break;
          
          case 'brands':
            const brandMatch = selectedValues.some(brand => 
              product.name.toLowerCase().includes(brand.toLowerCase())
            );
            if (brandMatch) productMatches = true;
            break;
          
          case 'ram':
            const ramMatch = selectedValues.some(ram => 
              product.specs?.some(spec => spec.includes(ram))
            );
            if (ramMatch) productMatches = true;
            break;
          
          case 'ssd':
            const ssdMatch = selectedValues.some(ssd => 
              product.specs?.some(spec => spec.includes(ssd))
            );
            if (ssdMatch) productMatches = true;
            break;
          
          // Add more filter types as needed
          default:
            productMatches = true;
        }

        if (!productMatches) return false;
      }

      return true;
    });
  }, [categoryProducts, searchQuery, filters]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => {
      const currentValues = prev[filterType] || [];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [filterType]: currentValues.filter(v => v !== value)
        };
      } else {
        return {
          ...prev,
          [filterType]: [...currentValues, value]
        };
      }
    });
  };

  const clearAllFilters = () => {
    setFilters({});
    setSearchQuery('');
  };

  // Format category name for display
  const formatCategoryName = (category: string) => {
    if (!category) return 'Products';
    return category
      .replace(/([A-Z])/g, ' $1')
      .replace(/and/g, ' & ')
      .replace(/Thin Light/g, 'Thin & Light')
      .replace(/in 1/g, 'in-1')
      .replace(/  /g, ' ')
      .trim();
  };

  // Get display name for category
  const getCategoryDisplayName = (categoryKey: string) => {
    if (catalogData[categoryKey]) {
      return catalogData[categoryKey].name;
    }
    return formatCategoryName(categoryKey);
  };

  // Handle tab change
  const handleTabChange = (categoryName: string) => {
    // Find the subcategory key from the display name
    const subcategoryKey = Object.keys(catalogData).find(
      key => catalogData[key]?.name === categoryName
    ) || categoryName;
    setActiveCategory(subcategoryKey);
  };

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
            {getCategoryDisplayName(activeCategory)}
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Browse our collection of {getCategoryDisplayName(activeCategory).toLowerCase()} products
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 pb-24 -mt-12 relative z-20">
        
        <div className="bg-white/50 backdrop-blur-xl border border-white/50 rounded-3xl p-6 md:p-8 shadow-xl shadow-indigo-900/5 mb-12">
          {/* Subcategory Tabs */}
          {subcategories.length > 0 && (
            <CategoryTabs
              categories={subcategories.map(sc => getCategoryDisplayName(sc))}
              activeCategory={getCategoryDisplayName(activeCategory)}
              onCategoryChange={handleTabChange}
            />
          )}

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow">
              <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              <Filter size={18} />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          {showFilters && (
            <div className="lg:w-1/4">
              <CategoryFilters
                filterOptions={categoryFilterOptions}
                activeFilters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={clearAllFilters}
              />
            </div>
          )}

          {/* Right Content - Products */}
          <div className={`${showFilters ? 'lg:w-3/4' : 'w-full'}`}>
            <div className="space-y-6">
              {filteredProducts.length > 0 ? (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                      <Package size={18} className="text-[#1c4c97]" />
                      <p className="text-gray-700 font-medium text-sm">
                        Showing <span className="text-[#1c4c97] font-bold">{filteredProducts.length}</span> products
                        {Object.keys(filters).length > 0 && ' with filters applied'}
                      </p>
                    </div>
                    {Object.keys(filters).some(key => filters[key].length > 0) && (
                      <button
                        onClick={clearAllFilters}
                        className="text-sm text-[#1c4c97] hover:text-[#153975] font-medium"
                      >
                        Clear Filters
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    {searchQuery 
                      ? `We couldn't find any matches for "${searchQuery}" in this category.`
                      : 'No products match the selected filters.'}
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="px-6 py-2.5 bg-[#1c4c97] hover:bg-[#153975] text-white rounded-full font-medium transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
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