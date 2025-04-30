
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Medications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Medication Management</h1>
        <p className="mb-8 text-gray-600">
          Track, manage, and set reminders for your medications. Get alerts for refills and stay on top of your health.
        </p>
        
        <div className="bg-white shadow-sm rounded-lg p-8">
          <p className="text-center text-gray-500">
            Please login to view and manage your medications
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Medications;
