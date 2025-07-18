import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import YieldPredictor from "./pages/YieldPredictor";
import PestPredictor from "./pages/PestPredictor";
import UploadCSV from "./pages/UploadCSV";
import BotTabs from "./pages/BotTabs";
import SensorDashboard from "./components/app/dashboard/SensorDashboard";
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import YieldDashboard from './pages/YieldDashboard';
import PestDashboard from './pages/PestDashboard';


const queryClient = new QueryClient();

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []); // Initialize AOS on component mount;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <div className="App">
              <Toaster />
              <Sonner />
              <Header />
              <Routes>
                {/* <Route path="/" element={<Index />} /> */}
                <Route path='/' element={<Main />} />
                <Route path="/dashboard" element={<SensorDashboard />} />
                <Route path='/yields-dashboard' element={<YieldDashboard />} />
                <Route path='/pests-dashboard' element={<PestDashboard />} />
                <Route path="/yield-prediction" element={<YieldPredictor />} />
                <Route path="/pest-prediction" element={<PestPredictor />} />
                <Route path="/upload" element={<UploadCSV />} />
                <Route path="/bot" element={<BotTabs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  )
};

export default App;
