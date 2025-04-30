
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Health Events</h1>
        <p className="mb-8 text-gray-600">
          Keep track of appointments, screenings, and health-related events. 
          Never miss an important healthcare appointment again.
        </p>
        
        <div className="bg-white shadow-sm rounded-lg p-8">
          <p className="text-center text-gray-500">
            Please login to view and manage your health events
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
