import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet'; // Install: npm install react-helmet

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Add Helmet for page-specific SEO */}
      <Helmet>
        <title>Proactive Trading | Premium Electronics Ethiopia</title>
        <meta name="description" content="Proactive Trading offers high-quality electronics, computers, and networking equipment in Ethiopia. Shop desktops, laptops, and more." />
      </Helmet>

      {/* Update your main heading with keywords */}
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center px-4">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold text-foreground">
            Proactive Trading 
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <strong>Premium Electronics, Computers & Networking Equipment</strong> in Ethiopia
          </p>
          {/* Add these keywords naturally */}
          <div className="mt-4 text-sm text-gray-500">
            <span>Desktops • Laptops • Printers • Networking • Monitors</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;