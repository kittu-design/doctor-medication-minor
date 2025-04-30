
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search } from "lucide-react";
import DoctorSidebar from "@/components/DoctorSidebar";

// Mock data for patients
const mockPatients = [
  {
    id: 16,
    fullname: "Arjun Korde",
    age: 10,
    gender: "F",
    contact: "8765434567",
    address: "Tv center, Aurangabad"
  },
  // Add more mock patients if needed
];

const DoctorDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [patients, setPatients] = useState(mockPatients);

  // Filter patients based on search term
  const filteredPatients = patients.filter(patient => 
    patient.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.contact.includes(searchTerm) ||
    patient.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DoctorSidebar />
      
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">Welcome! You are successfully logged in.</p>
          </div>
          
          <Link to="/add-patient">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="mr-2 h-4 w-4" /> Add Patient
            </Button>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-purple-500">ID</TableHead>
                  <TableHead className="text-purple-500">Fullname</TableHead>
                  <TableHead className="text-purple-500">Age</TableHead>
                  <TableHead className="text-purple-500">Gender</TableHead>
                  <TableHead className="text-purple-500">Contact</TableHead>
                  <TableHead className="text-purple-500">Address</TableHead>
                  <TableHead className="text-purple-500 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.length > 0 ? (
                  filteredPatients.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell>{patient.id}</TableCell>
                      <TableCell>{patient.fullname}</TableCell>
                      <TableCell>{patient.age}</TableCell>
                      <TableCell>{patient.gender}</TableCell>
                      <TableCell>{patient.contact}</TableCell>
                      <TableCell>{patient.address}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Link to={`/view-patient/${patient.id}`}>
                            <Button variant="outline" size="sm">View Details</Button>
                          </Link>
                          <Link to={`/view-medications/${patient.id}`}>
                            <Button variant="outline" size="sm">View Medications</Button>
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4">
                      No patients found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
