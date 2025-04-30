
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
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

// Mock medications data
const mockMedications = [
  {
    id: 1,
    name: "omez",
    dosage: "tablet",
    frequency: "once in a day",
    instructions: "before a meal",
    startDate: "2024-04-16",
    endDate: "2024-04-24"
  }
];

const MedicationsList = () => {
  const { id } = useParams<{ id: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [medications, setMedications] = useState(mockMedications);
  
  // Filter medications based on search term
  const filteredMedications = medications.filter(medication => 
    medication.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medication.dosage.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medication.instructions.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DoctorSidebar />
      
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          
          <Link to={`/add-medication/${id}`}>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="mr-2 h-4 w-4" /> Add Medication
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
                  <TableHead className="text-purple-500">Medication Name</TableHead>
                  <TableHead className="text-purple-500">Dosage</TableHead>
                  <TableHead className="text-purple-500">Frequency</TableHead>
                  <TableHead className="text-purple-500">Instructions</TableHead>
                  <TableHead className="text-purple-500">Start Date</TableHead>
                  <TableHead className="text-purple-500">End Date</TableHead>
                  <TableHead className="text-purple-500 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMedications.length > 0 ? (
                  filteredMedications.map((medication) => (
                    <TableRow key={medication.id}>
                      <TableCell>{medication.name}</TableCell>
                      <TableCell>{medication.dosage}</TableCell>
                      <TableCell>{medication.frequency}</TableCell>
                      <TableCell>{medication.instructions}</TableCell>
                      <TableCell>{medication.startDate}</TableCell>
                      <TableCell>{medication.endDate}</TableCell>
                      <TableCell className="text-right">
                        <div className="space-x-2">
                          <Button variant="outline" size="sm" className="text-red-500 border-red-300">
                            Delete
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4">
                      No medications found
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

export default MedicationsList;
