
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Join Our Team</h1>
        <p className="mb-8 text-gray-600">
          We're looking for talented professionals who are passionate about improving healthcare through technology.
        </p>
        
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Open Positions</h2>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="font-medium">Medical Software Developer</h3>
              <p className="text-sm text-gray-500 mt-1">Full-time • Remote</p>
              <p className="mt-2">Help build cutting-edge healthcare software solutions that improve patient outcomes.</p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="font-medium">Healthcare Data Analyst</h3>
              <p className="text-sm text-gray-500 mt-1">Full-time • On-site</p>
              <p className="mt-2">Analyze medical data to identify trends and help improve our healthcare platform.</p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="font-medium">Medical Content Writer</h3>
              <p className="text-sm text-gray-500 mt-1">Part-time • Remote</p>
              <p className="mt-2">Create accurate, accessible content about medications and medical procedures.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
