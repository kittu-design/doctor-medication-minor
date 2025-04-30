
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { Calendar, FileMedical, Pills } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Welcome to Health Sync
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Your comprehensive health management platform designed to streamline
              medical records, track medications, and provide personalized health
              insights.
            </p>
            <Link to="/register">
              <Button className="bg-primary hover:bg-primary/90 px-8 py-2 text-white rounded-md">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Medication Management"
                description="Track your medications, set reminders, and receive alerts for refills."
                icon={<Pills size={32} />}
              />
              <FeatureCard
                title="Medical History"
                description="Store and access your complete medical history in one secure place."
                icon={<FileMedical size={32} />}
              />
              <FeatureCard
                title="Health Events"
                description="Keep track of appointments, screenings, and health-related events."
                icon={<Calendar size={32} />}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
