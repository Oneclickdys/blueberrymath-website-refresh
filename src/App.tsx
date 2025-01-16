import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Activities from "./pages/Activities";
import Implementation from "./pages/Implementation";
import Events from "./pages/Events";
import About from "./pages/About";
import { Footer } from "./components/Footer";
import './i18n/config';

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/implementation" element={<Implementation />} />
                <Route path="/events" element={<Events />} />
                <Route path="/about" element={<About />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);

export default App;