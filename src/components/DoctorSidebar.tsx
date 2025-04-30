
import { Link } from "react-router-dom";
import { Settings, User } from "lucide-react";

const DoctorSidebar = () => {
  return (
    <div className="w-[80px] bg-gray-900 text-white flex flex-col items-center py-6">
      <div className="mb-8">
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
          <User size={24} />
        </div>
      </div>
      
      <div className="flex-grow flex flex-col items-center">
        <Link 
          to="/doctor-dashboard" 
          className="w-12 h-12 mb-4 bg-white text-purple-700 rounded-lg flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M10 3H3v7h7V3z"></path>
            <path d="M21 3h-7v7h7V3z"></path>
            <path d="M21 14h-7v7h7v-7z"></path>
            <path d="M10 14H3v7h7v-7z"></path>
          </svg>
        </Link>
      </div>
      
      <div className="mt-auto">
        <Link to="/settings">
          <Settings size={24} className="text-gray-400 hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorSidebar;
