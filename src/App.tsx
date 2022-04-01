import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { Home } from "./pages/home";
import { queryClient } from "./others/contexts/api";
import { NotFoundPage } from "./pages/notFound";
import { CountryDetail } from "./pages/countryDetail";
import { TrackingContextProvider } from "./others/contexts/tracking";

export function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <TrackingContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<CountryDetail />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </TrackingContextProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
}
