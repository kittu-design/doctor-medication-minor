
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DoctorSidebar from "@/components/DoctorSidebar";

// Mock patient data
const mockPatient = {
  id: 16,
  firstName: "Arjun",
  lastName: "Korde",
  dob: "15-06-2013",
  gender: "Female",
  phone: "8765434567",
  email: "Arjun@gmail.com",
  address: "Tv center",
  city: "Aurangabad",
  state: "Maharashtra",
  zipcode: "431001",
  country: "India"
};

const PatientView = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you'd fetch patient data based on id
  const patient = mockPatient;
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DoctorSidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Patient Details</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="uppercase font-medium text-gray-700 mb-6">PATIENT INFORMATION</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <p className="uppercase text-xs font-medium text-gray-500">First Name</p>
                <div className="bg-purple-50 p-3 rounded">{patient.firstName}</div>
              </div>
              
              <div className="space-y-2">
                <p className="uppercase text-xs font-medium text-gray-500">Last Name</p>
                <div className="bg-purple-50 p-3 rounded">{patient.lastName}</div>
              </div>
              
              <div className="space-y-2">
                <p className="uppercase text-xs font-medium text-gray-500">Date of Birth</p>
                <div className="bg-purple-50 p-3 rounded">{patient.dob}</div>
              </div>
              
              <div className="space-y-2">
                <p className="uppercase text-xs font-medium text-gray-500">Gender</p>
                <div className="bg-purple-50 p-3 rounded flex justify-between items-center">
                  <span>{patient.gender}</span>
                  <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="uppercase text-xs font-medium text-gray-500">Phone Number</p>
                <div className="bg-purple-50 p-3 rounded">{patient.phone}</div>
              </div>
              
              <div className="space-y-2">
                <p className="uppercase text-xs font-medium text-gray-500">Email</p>
                <div className="bg-purple-50 p-3 rounded">{patient.email}</div>
              </div>
              
              <div className="space-y-2">
                <p className="uppercase text-xs font-medium text-gray-500">Address</p>
                <div className="bg-purple-50 p-3 rounded">{patient.address}</div>
              </div>
              
              <div className="space-y-2">
                <p className="uppercase text-xs font-medium text-gray-500">City</p>
                <div className="bg-purple-50 p-3 rounded">{patient.city}</div>
              </div>
              
              <div className="space-y-2">
                <p className="uppercase text-xs font-medium text-gray-500">State</p>
                <div className="bg-purple-50 p-3 rounded">{patient.state}</div>
              </div>
              
              <div className="space-y-2">
                <p className="uppercase text-xs font-medium text-gray-500">Zipcode</p>
                <div className="bg-purple-50 p-3 rounded">{patient.zipcode}</div>
              </div>
              
              <div className="space-y-2">
                <p className="uppercase text-xs font-medium text-gray-500">Country</p>
                <div className="bg-purple-50 p-3 rounded">{patient.country}</div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              <Link to={`/view-medications/${id}`}>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  View Medications
                </Button>
              </Link>
              
              <Link to={`/edit-patient/${id}`}>
                <Button variant="outline">
                  Click To Edit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientView;
