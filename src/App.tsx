
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Medications from "./pages/Medications";
import MedicalHistory from "./pages/MedicalHistory";
import Events from "./pages/Events";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import DoctorDashboard from "./pages/DoctorDashboard";
import AddPatient from "./pages/AddPatient";
import PatientView from "./pages/PatientView";
import MedicationsList from "./pages/MedicationsList";
import AddMedication from "./pages/AddMedication";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medications" element={<Medications />} />
          <Route path="/medical-history" element={<MedicalHistory />} />
          <Route path="/events" element={<Events />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/add-patient" element={<AddPatient />} />
          <Route path="/view-patient/:id" element={<PatientView />} />
          <Route path="/view-medications/:id" element={<MedicationsList />} />
          <Route path="/add-medication/:id" element={<AddMedication />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
