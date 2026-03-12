import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold text-foreground">
            Proactive Trading
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <strong>Premium Electronics, Computers & Networking Equipment</strong> in Addis Ababa, Ethiopia
          </p>
          
          {/* Add more content for SEO */}
          <div className="mt-8 text-left bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Welcome to Proactive Trading </h2>
            <p className="mb-3">
              Based in Addis Ababa, Proactive Trading ET is your premier destination for high-quality electronics and computer solutions across Ethiopia.
            </p>
            <p className="mb-3">
              We specialize in:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Business and gaming laptops from top brands</li>
              <li>Desktop computers for office and home use</li>
              <li>Printer equipment and accessories</li>
              <li>Networking gear for businesses</li>
              <li>Professional monitors and displays</li>
            </ul>
            <p className="mt-4">
              Serving customers throughout Ethiopia with quality products and reliable service.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;