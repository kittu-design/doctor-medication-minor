
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MedicalHistory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Medical History</h1>
        <p className="mb-8 text-gray-600">
          Store and access your complete medical history in one secure place. 
          Keep track of diagnoses, procedures, and medical reports.
        </p>
        
        <div className="bg-white shadow-sm rounded-lg p-8">
          <p className="text-center text-gray-500">
            Please login to view your medical history
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MedicalHistory;
