
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
            >
              <path
                d="M22 12H18L15 21L9 3L6 12H2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-2 font-bold text-gray-800 tracking-tight">
              DOCTOR MEDICATION SYSTEM
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link to="/medications" className="text-gray-700 hover:text-primary">
            Medications
          </Link>
          <Link to="/medical-history" className="text-gray-700 hover:text-primary">
            Medical History
          </Link>
          <Link to="/events" className="text-gray-700 hover:text-primary">
            Events
          </Link>
          <Link to="/careers" className="text-gray-700 hover:text-primary">
            Careers
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <Link to="/register">
            <Button variant="outline" className="border border-gray-300">Register</Button>
          </Link>
          <Link to="/login">
            <Button className="bg-primary">Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
