
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Register = () => {
  const [accountType, setAccountType] = useState("patient");
  
  // Doctor form states
  const [doctorName, setDoctorName] = useState("");
  const [doctorEmail, setDoctorEmail] = useState("");
  const [doctorPassword, setDoctorPassword] = useState("");
  const [doctorSpecialization, setDoctorSpecialization] = useState("");
  const [doctorPhone, setDoctorPhone] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [doctorAddress, setDoctorAddress] = useState("");
  const [doctorCity, setDoctorCity] = useState("");
  const [doctorState, setDoctorState] = useState("");
  const [doctorCountry, setDoctorCountry] = useState("");
  const [doctorPostalCode, setDoctorPostalCode] = useState("");
  const [doctorBio, setDoctorBio] = useState("");
  
  // Patient form states
  const [patientFirstName, setPatientFirstName] = useState("");
  const [patientLastName, setPatientLastName] = useState("");
  const [patientDob, setPatientDob] = useState<Date>();
  const [patientGender, setPatientGender] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [patientCity, setPatientCity] = useState("");
  const [patientState, setPatientState] = useState("");
  const [patientZipcode, setPatientZipcode] = useState("");
  const [patientCountry, setPatientCountry] = useState("");

  const handleDoctorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Doctor Registration:", {
      name: doctorName,
      email: doctorEmail,
      password: doctorPassword,
      specialization: doctorSpecialization,
      phone: doctorPhone,
      licenseNumber,
      address: doctorAddress,
      city: doctorCity,
      state: doctorState,
      country: doctorCountry,
      postalCode: doctorPostalCode,
      bio: doctorBio
    });
    // In a real app, you would handle API calls here
  };

  const handlePatientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Patient Registration:", {
      firstName: patientFirstName,
      lastName: patientLastName,
      dateOfBirth: patientDob,
      gender: patientGender,
      phone: patientPhone,
      email: patientEmail,
      address: patientAddress,
      city: patientCity,
      state: patientState,
      zipcode: patientZipcode,
      country: patientCountry
    });
    // In a real app, you would handle API calls here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
            
            <Tabs defaultValue="patient" onValueChange={setAccountType} className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="patient" className="text-lg py-3">
                  <div className="flex items-center gap-2">
                    Patient
                  </div>
                </TabsTrigger>
                <TabsTrigger value="doctor" className="text-lg py-3">
                  <div className="flex items-center gap-2">
                    Doctor
                  </div>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="doctor">
                <h2 className="text-xl font-semibold mb-4">Register As Doctor</h2>
                <p className="text-gray-600 uppercase font-medium text-sm mb-6">ADD DETAILS</p>
                
                <form onSubmit={handleDoctorSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="doctorName" className="uppercase text-xs font-medium">Name</Label>
                      <Input
                        id="doctorName"
                        placeholder="Dr. John Doe"
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="doctorEmail" className="uppercase text-xs font-medium">Email</Label>
                      <Input
                        id="doctorEmail"
                        type="email"
                        placeholder="doctor@example.com"
                        value={doctorEmail}
                        onChange={(e) => setDoctorEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="doctorPassword" className="uppercase text-xs font-medium">Password</Label>
                      <Input
                        id="doctorPassword"
                        type="password"
                        value={doctorPassword}
                        onChange={(e) => setDoctorPassword(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="doctorSpecialization" className="uppercase text-xs font-medium">Specialization</Label>
                      <Input
                        id="doctorSpecialization"
                        placeholder="Cardiology"
                        value={doctorSpecialization}
                        onChange={(e) => setDoctorSpecialization(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="licenseNumber" className="uppercase text-xs font-medium">Licence Number</Label>
                      <Input
                        id="licenseNumber"
                        placeholder="MDXXXX"
                        value={licenseNumber}
                        onChange={(e) => setLicenseNumber(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="doctorPhone" className="uppercase text-xs font-medium">Phone Number</Label>
                      <Input
                        id="doctorPhone"
                        placeholder="+1 (555) 123-4567"
                        value={doctorPhone}
                        onChange={(e) => setDoctorPhone(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="doctorAddress" className="uppercase text-xs font-medium">Address</Label>
                      <Input
                        id="doctorAddress"
                        placeholder="123 Medical Center Drive"
                        value={doctorAddress}
                        onChange={(e) => setDoctorAddress(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="doctorCity" className="uppercase text-xs font-medium">City</Label>
                      <Input
                        id="doctorCity"
                        placeholder="New York"
                        value={doctorCity}
                        onChange={(e) => setDoctorCity(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="doctorState" className="uppercase text-xs font-medium">State</Label>
                      <Input
                        id="doctorState"
                        placeholder="NY"
                        value={doctorState}
                        onChange={(e) => setDoctorState(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="doctorCountry" className="uppercase text-xs font-medium">Country</Label>
                      <Input
                        id="doctorCountry"
                        placeholder="United States"
                        value={doctorCountry}
                        onChange={(e) => setDoctorCountry(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="doctorPostalCode" className="uppercase text-xs font-medium">Postal Code - ZIP Code</Label>
                      <Input
                        id="doctorPostalCode"
                        placeholder="10001"
                        value={doctorPostalCode}
                        onChange={(e) => setDoctorPostalCode(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="doctorBio" className="uppercase text-xs font-medium">Bio</Label>
                      <Textarea
                        id="doctorBio"
                        placeholder="Brief professional bio"
                        value={doctorBio}
                        onChange={(e) => setDoctorBio(e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                      Register
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="patient">
                <h2 className="text-xl font-semibold mb-4">Register As Patient</h2>
                <p className="text-gray-600 uppercase font-medium text-sm mb-6">ADD DETAILS</p>
                
                <form onSubmit={handlePatientSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="patientFirstName" className="uppercase text-xs font-medium">First Name</Label>
                      <Input
                        id="patientFirstName"
                        placeholder="John"
                        value={patientFirstName}
                        onChange={(e) => setPatientFirstName(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="patientLastName" className="uppercase text-xs font-medium">Last Name</Label>
                      <Input
                        id="patientLastName"
                        placeholder="Doe"
                        value={patientLastName}
                        onChange={(e) => setPatientLastName(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="patientDob" className="uppercase text-xs font-medium">Date of Birth</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !patientDob && "text-muted-foreground"
                            )}
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            {patientDob ? format(patientDob, "dd-MM-yyyy") : <span>dd-mm-yyyy</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <CalendarComponent
                            mode="single"
                            selected={patientDob}
                            onSelect={setPatientDob}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="patientGender" className="uppercase text-xs font-medium">Gender</Label>
                      <Select onValueChange={setPatientGender} defaultValue={patientGender}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="patientPhone" className="uppercase text-xs font-medium">Phone Number</Label>
                      <Input
                        id="patientPhone"
                        placeholder="8765434567"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="patientEmail" className="uppercase text-xs font-medium">Email</Label>
                      <Input
                        id="patientEmail"
                        type="email"
                        placeholder="patient@example.com"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="patientAddress" className="uppercase text-xs font-medium">Address</Label>
                      <Input
                        id="patientAddress"
                        placeholder="123 Main St"
                        value={patientAddress}
                        onChange={(e) => setPatientAddress(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="patientCity" className="uppercase text-xs font-medium">City</Label>
                      <Input
                        id="patientCity"
                        placeholder="New York"
                        value={patientCity}
                        onChange={(e) => setPatientCity(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="patientState" className="uppercase text-xs font-medium">State</Label>
                      <Input
                        id="patientState"
                        placeholder="NY"
                        value={patientState}
                        onChange={(e) => setPatientState(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="patientZipcode" className="uppercase text-xs font-medium">Zipcode</Label>
                      <Input
                        id="patientZipcode"
                        placeholder="10001"
                        value={patientZipcode}
                        onChange={(e) => setPatientZipcode(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="patientCountry" className="uppercase text-xs font-medium">Country</Label>
                      <Input
                        id="patientCountry"
                        placeholder="United States"
                        value={patientCountry}
                        onChange={(e) => setPatientCountry(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                      Register
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-purple-600 hover:underline">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
