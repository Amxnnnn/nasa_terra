import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LegacyTerraVideo from "./pages/LegacyTerraVideo";
import AsterVideo from "./pages/AsterVideo";
import ModisVideo from "./pages/ModisVideo";
import MisrVideo from "./pages/MisrVideo";
import CeresVideo from "./pages/CeresVideo";
import MopittVideo from "./pages/MopittVideo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/legacy-terra-video" element={<LegacyTerraVideo />} />
          <Route path="/aster-video" element={<AsterVideo />} />
          <Route path="/modis-video" element={<ModisVideo />} />
          <Route path="/misr-video" element={<MisrVideo />} />
          <Route path="/ceres-video" element={<CeresVideo />} />
          <Route path="/mopitt-video" element={<MopittVideo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
