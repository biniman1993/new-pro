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
const [showFilters, setShowFilters] = useState(false);  
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
      case 'Accessories':
  return {
    availability: ['In stock', 'Out of stock', 'On backorder'],
    brands: ['Logitech', 'Razer', 'SteelSeries', 'Corsair', 'HyperX', 'Sennheiser', 'Bose', 'Sony', 'JBL', 'Anker', 'UGreen', 'Baseus', 'Aukey', 'Belkin'],
    type: ['Keyboard', 'Mouse', 'Headphones', 'Webcam', 'USB Hub', 'Laptop Stand', 'Gaming', 'Office', 'Wireless', 'Wired'],
    connectivity: ['USB', 'USB-C', 'Wireless 2.4GHz', 'Bluetooth', 'WiFi'],
    features: ['RGB Lighting', 'Noise Cancelling', 'Wireless Charging', 'Adjustable Height', 'Cooling Fans', 'Surround Sound', 'Mechanical Keys', 'Silent Click'],
    compatibility: ['Windows', 'Mac', 'Linux', 'iOS', 'Android', 'PS5', 'Xbox'],
    warranty: ['1 Year', '2 Years', '3 Years', 'Lifetime'],
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
    inputType: [],
    networkInterface: [],
    bandwidthRate: [],
    switchFeatures: [],
    motherboardSpeciality: [],
    routerType: [],
    dataSpeed: [],
    additionalFeature: []
  };
  case 'Projector':
  return {
    availability: ['In stock', 'Out of stock', 'On backorder'],
    brands: ['Epson', 'BenQ', 'Optoma', 'ViewSonic', 'LG', 'Sony', 'NEC', 'Panasonic', 'Acer', 'Xiaomi', 'Vankyo', 'Apeman', 'Anker', 'GooDee'],
    type: ['Business', 'Home Cinema', 'Portable', 'Short Throw', 'Laser', 'LED', 'DLP', 'LCD'],
    resolution: ['SVGA (800x600)', 'XGA (1024x768)', 'WXGA (1280x800)', '1080p Full HD', '4K UHD', 'WUXGA (1920x1200)'],
    brightness: ['2000-3000 Lumens', '3001-4000 Lumens', '4001-5000 Lumens', '5001+ Lumens'],
    throwDistance: ['Standard Throw', 'Short Throw', 'Ultra Short Throw', 'Long Throw'],
    features: ['Built-in Speaker', 'WiFi Connectivity', 'Bluetooth', 'Smart TV OS', '3D Ready', 'Keystone Correction', 'Lens Shift', 'Auto Focus', 'Auto Keystone'],
    connectivity: ['HDMI', 'VGA', 'USB', 'USB-C', 'Component', 'Composite', 'Ethernet', 'Wireless'],
    lightSource: ['Lamp', 'Laser', 'LED', 'Hybrid'],
    lampLife: ['Up to 5000 hours', '5001-10000 hours', '10001-20000 hours', '20000+ hours'],
    screenSize: ['Up to 100"', '101"-150"', '151"-200"', '201"-300"', '300"+'],
    contrastRatio: ['10000:1', '15000:1', '20000:1', '30000:1', '50000:1+'],
    warranty: ['1 Year', '2 Years', '3 Years', '5 Years'],
    // Add empty arrays for other filter types
    ram: [],
    ssd: [],
    generation: [],
    graphics: [],
    writeSpeed: [],
    socket: [],
    series: [],
    capacity: [],
    pcieGen: [],
    busSpeed: [],
    panelType: [],
    monitorFeatures: [],
    inputType: [],
    networkInterface: [],
    bandwidthRate: [],
    switchFeatures: [],
    motherboardSpeciality: [],
    routerType: [],
    dataSpeed: [],
    additionalFeature: []
  };
  case 'Printer':
  return {
    availability: ['In stock', 'Out of stock', 'On backorder'],
    brands: ['Epson', 'Brother', 'Canon', 'Pantum', 'Sunmi', 'Xprinter', 'Zebra', 'RICOH', 'Rongta', 'SEWOO', 'G-Printer', 'EVOLIS', 'Sharp', 'Fujifilm', 'GoDEX', 'SPRT', 'DeskJet', 'Toshiba', 'Deli', 'HID', 'HP'],
    type: ['Inkjet', 'Laser', 'All-in-One', 'Scanner', 'Label Printer', 'Barcode Scanner', 'POS Printer', 'Large Format', 'ID Card', 'Photocopier'],
    functionality: ['Print Only', 'Print & Scan', 'Print/Scan/Copy', 'Print/Scan/Copy/Fax', 'Multifunction'],
    color: ['Monochrome', 'Color', 'Photo Color'],
    connectivity: ['USB', 'Ethernet', 'WiFi', 'WiFi Direct', 'Bluetooth', 'Mobile Printing'],
    paperSize: ['A4', 'A3', 'Legal', 'Letter', 'Photo', 'Label', 'Roll Paper'],
    features: ['Auto Duplex', 'Auto Document Feeder', 'Touch Screen', 'Cloud Printing', 'AirPrint', 'Google Cloud Print', 'NFC', 'Ethernet Port', 'High Capacity Tray'],
    inkSystem: ['Cartridge', 'EcoTank', 'Ink Bottle', 'Toner', 'Ribbon'],
    printSpeed: ['Up to 10 PPM', '11-20 PPM', '21-30 PPM', '31-40 PPM', '40+ PPM'],
    resolution: ['600x600 dpi', '1200x1200 dpi', '2400x1200 dpi', '4800x1200 dpi', '9600x2400 dpi'],
    monthlyDutyCycle: ['Up to 5,000 pages', '5,001-10,000 pages', '10,001-20,000 pages', '20,001-50,000 pages', '50,000+ pages'],
    warranty: ['1 Year', '2 Years', '3 Years', 'On-site Warranty', 'Extended Warranty'],
    // Add empty arrays for other filter types
    ram: [],
    ssd: [],
    generation: [],
    screenSize: [],
    graphics: [],
    writeSpeed: [],
    refreshRate: [],
    socket: [],
    series: [],
    capacity: [],
    pcieGen: [],
    busSpeed: [],
    panelType: [],
    monitorFeatures: [],
    inputType: [],
    networkInterface: [],
    bandwidthRate: [],
    switchFeatures: [],
    motherboardSpeciality: [],
    routerType: [],
    dataSpeed: [],
    additionalFeature: []
  };
  case 'DigitalDisplay':
  return {
    availability: ['In stock', 'Out of stock', 'On backorder'],
    brands: ['Samsung', 'LG', 'NEC', 'Sharp', 'Planar', 'Barco', 'Christie', 'Daktronics', 'Leyard', 'Absen', 'Unilumin', 'Hisense', 'Sony', 'Panasonic', 'ViewSonic', 'BenQ', 'Elo', 'Advantech', 'AOPEN', 'Intel', 'BrightSign'],
    type: ['LED Display', 'LCD Display', 'Interactive Panel', 'Video Wall', 'Digital Signage', 'Kiosk', 'Outdoor Display', 'Indoor Display', 'Advertising Display', 'Menu Board'],
    application: ['Retail', 'Corporate', 'Education', 'Healthcare', 'Hospitality', 'Transportation', 'Stadium', 'Control Room', 'Broadcast', 'Public Space'],
    screenSize: ['Under 32"', '32"-49"', '50"-65"', '66"-85"', '86"-98"', '99"+', 'Custom Size'],
    resolution: ['HD (1366x768)', 'Full HD (1920x1080)', '2K (2560x1440)', '4K UHD (3840x2160)', '8K (7680x4320)', 'Custom Resolution'],
    brightness: ['250-500 nits', '501-1000 nits', '1001-2000 nits', '2001-3000 nits', '3001-5000 nits', '5000+ nits'],
    environment: ['Indoor', 'Outdoor', 'Semi-Outdoor', 'Weatherproof', 'Sunlight Readable', 'Temperature Controlled'],
    interactivity: ['Non-Touch', 'Touch Screen', 'Multi-Touch', 'Interactive Pen', 'Gesture Control', 'Voice Control'],
    connectivity: ['HDMI', 'DisplayPort', 'VGA', 'DVI', 'USB-C', 'Ethernet', 'WiFi', 'Bluetooth', 'RS-232', 'SDI'],
    features: ['Built-in Media Player', 'Android OS', 'Windows OS', 'Web Browser', 'Content Management System', 'Scheduling', 'Remote Management', 'Video Wall Processor', 'Bezel-less Design', 'Narrow Bezel'],
    pixelPitch: ['P0.9-P1.2', 'P1.5-P1.9', 'P2.0-P2.5', 'P2.6-P3.0', 'P3.1-P4.0', 'P4.0+'],
    viewingAngle: ['140°-160°', '161°-170°', '171°-178°', '178°+'],
    warranty: ['1 Year', '2 Years', '3 Years', '5 Years', 'On-site Support', '24/7 Support'],
    // Add empty arrays for other filter types
    ram: [],
    ssd: [],
    generation: [],
    graphics: [],
    writeSpeed: [],
    refreshRate: [],
    socket: [],
    series: [],
    capacity: [],
    pcieGen: [],
    busSpeed: [],
    panelType: [],
    monitorFeatures: [],
    inputType: [],
    networkInterface: [],
    bandwidthRate: [],
    switchFeatures: [],
    motherboardSpeciality: [],
    routerType: [],
    dataSpeed: [],
    additionalFeature: []
  };
  case 'Server':
  return {
    availability: ['In stock', 'Out of stock', 'On backorder'],
    brands: ['Dell', 'HP', 'HPE', 'Lenovo', 'IBM', 'Cisco', 'Supermicro', 'Fujitsu', 'Oracle', 'Huawei', 'Inspur', 'ASUS', 'Gigabyte', 'ASRock', 'Intel', 'AMD', 'NetApp', 'Synology', 'QNAP', 'Western Digital', 'Seagate', 'Toshiba', 'Kingston', 'Crucial', 'Samsung'],
    serverType: ['Rackmount', 'Tower', 'Blade', 'Micro', 'Modular'],
    processorType: ['Intel Xeon', 'AMD EPYC', 'Intel Core', 'AMD Ryzen', 'ARM'],
    processorCount: ['Single CPU', 'Dual CPU', 'Quad CPU'],
    ramType: ['DDR4', 'DDR5', 'DDR4 ECC', 'DDR5 ECC', 'LRDIMM'],
    ramCapacity: ['16GB', '32GB', '64GB', '128GB', '256GB', '512GB', '1TB+'],
    storageType: ['HDD', 'SSD', 'NVMe', 'SAS', 'SATA'],
    storageCapacity: ['Under 1TB', '1TB-4TB', '5TB-10TB', '11TB-50TB', '51TB-100TB', '100TB+'],
    storageBays: ['1-4 Bays', '5-8 Bays', '9-12 Bays', '13-24 Bays', '25+ Bays'],
    raidSupport: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 6', 'RAID 10', 'RAID 50', 'RAID 60', 'Hardware RAID', 'Software RAID'],
    networkPorts: ['1GbE', '10GbE', '25GbE', '40GbE', '100GbE', 'Fibre Channel'],
    powerSupply: ['Single PSU', 'Dual PSU', 'Redundant PSU', 'Hot-swap PSU'],
    formFactor: ['1U', '2U', '3U', '4U', 'Tower'],
    management: ['IPMI', 'iLO', 'iDRAC', 'BMC', 'Redfish'],
    virtualization: ['VMware Ready', 'Hyper-V', 'KVM', 'Xen', 'Proxmox'],
    gpuSupport: ['No GPU', 'Single GPU', 'Dual GPU', 'Quad GPU', '8+ GPU'],
    cooling: ['Air Cooling', 'Liquid Cooling', 'Rear Door Heat Exchanger'],
    warranty: ['1 Year', '3 Years', '5 Years', '7 Years', 'On-site Support', '24/7 Support'],
    certification: ['ENERGY STAR', '80 Plus', 'TAA Compliant', 'FIPS 140-2'],
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
    inputType: [],
    networkInterface: [],
    bandwidthRate: [],
    switchFeatures: [],
    motherboardSpeciality: [],
    routerType: [],
    dataSpeed: [],
    additionalFeature: []
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
      <header className="relative overflow-hidden mt-20 ">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a5da5] to-[#0a0e27] z-0" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7b16]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2a5da5]/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
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
  className="flex lg:hidden items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
>
  <Filter size={18} />
  {showFilters ? 'Hide Filters' : 'Show Filters'}
</button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
       {/* Left Sidebar - Filters */}
<div className={`${showFilters ? 'block' : 'hidden'} lg:block lg:w-1/4`}>
  <CategoryFilters
    filterOptions={categoryFilterOptions}
    activeFilters={filters}
    onFilterChange={handleFilterChange}
    onClearFilters={clearAllFilters}
  />
</div>

          {/* Right Content - Products */}
          <div className={`${showFilters ? 'lg:w-3/4' : 'w-full'}`}>
            <div className="space-y-6">
              {filteredProducts.length > 0 ? (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                      <Package size={18} className="text-[#2a5da5]" />
                      <p className="text-gray-700 font-medium text-sm">
                        Showing <span className="text-[#2a5da5] font-bold">{filteredProducts.length}</span> products
                        {Object.keys(filters).length > 0 && ' with filters applied'}
                      </p>
                    </div>
                    {Object.keys(filters).some(key => filters[key].length > 0) && (
                      <button
                        onClick={clearAllFilters}
                        className="text-sm text-[#2a5da5] hover:text-[#153975] font-medium"
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